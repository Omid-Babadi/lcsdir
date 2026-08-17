import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { isSameOriginRequest } from "@/lib/admin-auth";
import connectDB from "@/lib/db/mongodb";
import Booking from "@/lib/models/Booking";

const bookingSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(50).optional().default(""),
  service: z.string().trim().max(160).optional().default(""),
  date: z.string().trim().max(100).optional().default(""),
  notes: z.string().trim().max(4000).optional().default(""),
});

const RATE_LIMIT_WINDOW_MS = 24 * 60 * 60 * 1000;
const MAX_PER_WINDOW = 2;
const rateLimits = new Map<string, { count: number; firstSeen: number }>();

function getIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const entry = rateLimits.get(ip) ?? { count: 0, firstSeen: now };
  if (now - entry.firstSeen > RATE_LIMIT_WINDOW_MS) {
    entry.count = 0;
    entry.firstSeen = now;
  }
  entry.count += 1;
  rateLimits.set(ip, entry);
  return entry.count > MAX_PER_WINDOW;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function sendTelegramWebhook(url: string, payload: unknown) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10_000);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`Telegram returned ${response.status}`);
  } finally {
    clearTimeout(timeoutId);
  }
}

export async function POST(request: NextRequest) {
  if (!isSameOriginRequest(request)) {
    return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  }
  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    return NextResponse.json({ error: "Invalid content type." }, { status: 400 });
  }

  if (isRateLimited(getIp(request))) {
    return NextResponse.json(
      { error: "You can only submit 2 booking requests per day. Please try again tomorrow." },
      { status: 429 },
    );
  }

  const parsed = bookingSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid booking details." },
      { status: 400 },
    );
  }

  let savedBooking;
  try {
    await connectDB();
    savedBooking = await Booking.create({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      service: parsed.data.service,
      preferredDate: parsed.data.date,
      notes: parsed.data.notes,
    });
  } catch (error) {
    console.error("Booking persistence failed:", error);
    return NextResponse.json({ error: "Could not save your booking. Please call us." }, { status: 500 });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const value = (text: string) => escapeHtml(text || "—");
  const messageText = `<b>New Booking Request</b>\n\n<b>Name:</b> ${value(parsed.data.name)}\n<b>Email:</b> ${value(parsed.data.email)}\n<b>Phone:</b> ${value(parsed.data.phone)}\n<b>Service:</b> ${value(parsed.data.service)}\n<b>Date:</b> ${value(parsed.data.date)}\n<b>Notes:</b> ${value(parsed.data.notes)}\n<b>Timestamp:</b> ${new Date().toISOString()}`;

  if (!botToken || !chatId) {
    await Booking.findByIdAndUpdate(savedBooking._id, {
      telegramStatus: "failed",
      telegramError: "Telegram is not configured.",
    });
    return NextResponse.json({ ok: true, warning: "Booking saved; notification is pending." });
  }

  try {
    await sendTelegramWebhook(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatId,
      text: messageText,
      parse_mode: "HTML",
    });
    await Booking.findByIdAndUpdate(savedBooking._id, { telegramStatus: "sent" });
  } catch (error) {
    console.error("Telegram notification failed:", error);
    await Booking.findByIdAndUpdate(savedBooking._id, {
      telegramStatus: "failed",
      telegramError: error instanceof Error ? error.message.slice(0, 500) : "Notification failed.",
    });
    return NextResponse.json({ ok: true, warning: "Booking saved; notification is pending." });
  }

  return NextResponse.json({ ok: true });
}
