import { NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  adminCredentialsAreConfigured,
  createAdminSessionToken,
  validateAdminCredentials,
} from "@/lib/admin-auth";

export async function POST(request: Request) {
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
    return NextResponse.json({ error: "Invalid username or password." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });

  response.cookies.set(ADMIN_SESSION_COOKIE, createAdminSessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12,
  });

  return response;
}
