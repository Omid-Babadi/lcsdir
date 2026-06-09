import { createHmac, timingSafeEqual } from "crypto";

export const ADMIN_SESSION_COOKIE = "lcs_admin_session";

const SESSION_DURATION_MS = 1000 * 60 * 60 * 12;

function getSessionSecret() {
  return process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD || "";
}

function sign(value: string) {
  return createHmac("sha256", getSessionSecret()).update(value).digest("base64url");
}

function safeEqual(a: string, b: string) {
  const aBuffer = Buffer.from(a);
  const bBuffer = Buffer.from(b);

  return aBuffer.length === bBuffer.length && timingSafeEqual(aBuffer, bBuffer);
}

export function adminCredentialsAreConfigured() {
  return Boolean(process.env.ADMIN_USERNAME && process.env.ADMIN_PASSWORD);
}

export function validateAdminCredentials(username: string, password: string) {
  if (!adminCredentialsAreConfigured()) return false;

  return (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  );
}

export function createAdminSessionToken() {
  const payload = Buffer.from(
    JSON.stringify({
      username: process.env.ADMIN_USERNAME,
      expiresAt: Date.now() + SESSION_DURATION_MS,
    }),
  ).toString("base64url");

  return `${payload}.${sign(payload)}`;
}

export function isValidAdminSessionToken(token?: string) {
  if (!token || !adminCredentialsAreConfigured() || !getSessionSecret()) {
    return false;
  }

  const [payload, signature] = token.split(".");
  if (!payload || !signature || !safeEqual(signature, sign(payload))) {
    return false;
  }

  try {
    const session = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));

    return (
      session.username === process.env.ADMIN_USERNAME &&
      typeof session.expiresAt === "number" &&
      session.expiresAt > Date.now()
    );
  } catch {
    return false;
  }
}
