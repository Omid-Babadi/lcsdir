import { createHash } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { isSameOriginRequest } from "@/lib/admin-auth";
import connectDB from "@/lib/db/mongodb";
import PageView from "@/lib/models/PageView";

const requestCounts = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(request: NextRequest) {
  const key = request.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
  const now = Date.now();
  const current = requestCounts.get(key);
  if (!current || current.resetAt < now) {
    requestCounts.set(key, { count: 1, resetAt: now + 60_000 });
    return false;
  }
  current.count += 1;
  return current.count > 60;
}

export async function POST(request: NextRequest) {
  if (!isSameOriginRequest(request) || isRateLimited(request)) {
    return new NextResponse(null, { status: 202 });
  }

  const userAgent = request.headers.get("user-agent") ?? "";
  if (/bot|crawler|spider|preview/i.test(userAgent)) {
    return new NextResponse(null, { status: 202 });
  }

  const body = await request.json().catch(() => null);
  const path = typeof body?.path === "string" ? body.path.trim().slice(0, 300) : "";
  const visitorId = typeof body?.visitorId === "string" ? body.visitorId.slice(0, 100) : "";
  const sessionId = typeof body?.sessionId === "string" ? body.sessionId.slice(0, 100) : "";
  const referrer = typeof body?.referrer === "string" ? body.referrer.slice(0, 500) : "";

  if (!path.startsWith("/") || path.startsWith("/api") || path.startsWith("/thispageisforadmin")) {
    return new NextResponse(null, { status: 202 });
  }
  if (!/^[a-zA-Z0-9_-]{8,100}$/.test(visitorId) || !/^[a-zA-Z0-9_-]{8,100}$/.test(sessionId)) {
    return new NextResponse(null, { status: 202 });
  }

  const bucket = Math.floor(Date.now() / 600_000);
  const dedupKey = createHash("sha256")
    .update(`${sessionId}:${path}:${bucket}`)
    .digest("hex");

  try {
    await connectDB();
    await PageView.create({ path, visitorId, sessionId, referrer, dedupKey });
  } catch (error: any) {
    if (error?.code !== 11000) console.error("Page-view tracking failed:", error);
  }

  return new NextResponse(null, { status: 202 });
}
