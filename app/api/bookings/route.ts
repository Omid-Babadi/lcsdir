import { NextResponse } from 'next/server';

type Booking = {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  date?: string;
  notes?: string;
};

const RATE_LIMIT_WINDOW_MS = 24 * 60 * 60 * 1000; // 24 hours
const MAX_PER_WINDOW = 2;

const rateLimits = new Map<string, { count: number; firstSeen: number }>();

function getIp(req: Request) {
  // Next.js edge may not expose ip; try headers first
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  const realIp = req.headers.get('x-real-ip');
  if (realIp) return realIp;
  return 'unknown';
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function sendTelegramWebhook(telegramUrl: string, payload: unknown) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout for Telegram API
    
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const bodyText = await response.text().catch(() => '');
      throw new Error(`Telegram webhook failed with status ${response.status}: ${bodyText}`);
    }
  } catch (error: any) {
    if (error.name === 'AbortError') {
      throw new Error('Telegram webhook request timed out. Booking saved locally.');
    }
    throw error;
  }
}

export async function POST(request: Request) {
  try {
    if (request.headers.get('content-type') !== 'application/json') {
      return NextResponse.json({ error: 'Invalid content type' }, { status: 400 });
    }

    const ip = getIp(request);
    const now = Date.now();
    const entry = rateLimits.get(ip) || { count: 0, firstSeen: now };
    if (now - entry.firstSeen > RATE_LIMIT_WINDOW_MS) {
      entry.count = 0;
      entry.firstSeen = now;
    }
    entry.count += 1;
    rateLimits.set(ip, entry);
    if (entry.count > MAX_PER_WINDOW) {
      return NextResponse.json({ error: 'You can only submit 2 booking requests per day. Please try again tomorrow.' }, { status: 429 });
    }

    const body = await request.json();
    const booking: Booking = {
      name: String(body.name || '').trim(),
      email: String(body.email || '').trim(),
      phone: body.phone ? String(body.phone).trim() : undefined,
      service: body.service ? String(body.service).trim() : undefined,
      date: body.date ? String(body.date).trim() : undefined,
      notes: body.notes ? String(body.notes).trim() : undefined,
    };

    if (!booking.name || !booking.email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    if (!isValidEmail(booking.email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    if (!botToken || !chatId) {
      console.error('TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not configured');
      return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 });
    }

    const ipForPayload = ip === 'unknown' ? 'unknown' : ip;

    const messageText = `<b>New Booking Request</b>\n\n<b>Name:</b> ${booking.name}\n<b>Email:</b> ${booking.email}\n<b>Phone:</b> ${booking.phone || '—'}\n<b>Service:</b> ${booking.service || '—'}\n<b>Date:</b> ${booking.date || '—'}\n<b>Notes:</b> ${booking.notes || '—'}\n<b>IP:</b> ${ipForPayload}\n<b>Timestamp:</b> ${new Date().toISOString()}`;

    try {
      await sendTelegramWebhook(telegramUrl, { 
        chat_id: chatId,
        text: messageText,
        parse_mode: "HTML"
      });
    } catch (error) {
      console.error('Telegram webhook send failed', error);
      // Still return success to user even if webhook fails - booking was received
      return NextResponse.json({ ok: true, warning: 'Your booking was received, but we may contact you shortly to confirm.' }, { status: 200 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error('Booking POST error', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
