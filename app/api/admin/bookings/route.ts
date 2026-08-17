import { NextRequest, NextResponse } from "next/server";
import { isAuthorizedAdminRequest } from "@/lib/admin-api";
import connectDB from "@/lib/db/mongodb";
import Booking from "@/lib/models/Booking";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  if (!isAuthorizedAdminRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
    const [bookings, newCount] = await Promise.all([
      Booking.find({}).sort({ createdAt: -1 }).limit(250).lean(),
      Booking.countDocuments({ status: "new" }),
    ]);
    return NextResponse.json({ data: bookings, newCount }, {
      headers: { "Cache-Control": "private, no-store" },
    });
  } catch (error) {
    console.error("Admin booking list failed:", error);
    return NextResponse.json({ error: "Could not load bookings." }, { status: 500 });
  }
}
