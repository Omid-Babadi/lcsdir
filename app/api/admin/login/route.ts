import { NextRequest, NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  adminCredentialsAreConfigured,
  createAdminSessionToken,
  isSameOriginRequest,
  validateAdminCredentials,
} from "@/lib/admin-auth";

const attempts = new Map<string, { count: number; resetAt: number }>();

function attemptKey(request: NextRequest) {
  return request.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
}

export async function POST(request: NextRequest) {
  if (!isSameOriginRequest(request)) {
    return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  }

  const key = attemptKey(request);
  const now = Date.now();
  const current = attempts.get(key);
  if (current && current.resetAt > now && current.count >= 8) {
    return NextResponse.json(
      { error: "Too many sign-in attempts. Please wait 15 minutes." },
      { status: 429 },
    );
  }
  if (!current || current.resetAt <= now) {
    attempts.set(key, { count: 0, resetAt: now + 15 * 60 * 1000 });
  }

  if (!adminCredentialsAreConfigured()) {
    return NextResponse.json(
      { error: "Admin username and password are not configured." },
      { status: 500 },
    );
  }

  const body = await request.json().catch(() => null);
  const username = String(body?.username || "");
  const password = String(body?.password || "");

  if (!validateAdminCredentials(username, password)) {
    const entry = attempts.get(key);
    if (entry) entry.count += 1;
    return NextResponse.json({ error: "Invalid username or password." }, { status: 401 });
  }

  attempts.delete(key);

  const response = NextResponse.json({ ok: true });

  response.cookies.set(ADMIN_SESSION_COOKIE, createAdminSessionToken(), {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12,
  });

  return response;
}
