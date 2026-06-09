import { NextRequest, NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE, isValidAdminSessionToken } from "@/lib/admin-auth";
import {
  getAvailabilityMode,
  getEffectiveAvailability,
  isAvailabilityMode,
  setAvailabilityMode,
} from "@/lib/availability-store";

function isAuthorized(request: NextRequest) {
  return isValidAdminSessionToken(request.cookies.get(ADMIN_SESSION_COOKIE)?.value);
}

export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const mode = await getAvailabilityMode();

  return NextResponse.json({
    mode,
    isAvailable: getEffectiveAvailability(mode),
  });
}

export async function PUT(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);

  if (!isAvailabilityMode(body?.mode)) {
    return NextResponse.json({ error: "Invalid availability mode." }, { status: 400 });
  }

  await setAvailabilityMode(body.mode);

  return NextResponse.json({
    mode: body.mode,
    isAvailable: getEffectiveAvailability(body.mode),
  });
}
