import { NextResponse } from "next/server";
import { getAvailabilityMode, getEffectiveAvailability } from "@/lib/availability-store";

export async function GET() {
  const mode = await getAvailabilityMode();

  return NextResponse.json(
    {
      mode,
      isAvailable: getEffectiveAvailability(mode),
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}
