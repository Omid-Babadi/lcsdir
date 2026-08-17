import { NextRequest, NextResponse } from "next/server";
import { canMutateAdminData, isAuthorizedAdminRequest } from "@/lib/admin-api";
import {
  getAvailabilityMode,
  getEffectiveAvailability,
  isAvailabilityMode,
  setAvailabilityMode,
} from "@/lib/availability-store";

export async function GET(request: NextRequest) {
  if (!isAuthorizedAdminRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const mode = await getAvailabilityMode();

  return NextResponse.json({
    mode,
    isAvailable: getEffectiveAvailability(mode),
  });
}

export async function PUT(request: NextRequest) {
  if (!canMutateAdminData(request)) {
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
