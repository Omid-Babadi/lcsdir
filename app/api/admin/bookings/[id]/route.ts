import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { canMutateAdminData } from "@/lib/admin-api";
import connectDB from "@/lib/db/mongodb";
import Booking from "@/lib/models/Booking";

const statusSchema = z.object({
  status: z.enum(["new", "contacted", "confirmed", "completed", "archived"]),
});

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!canMutateAdminData(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const parsed = statusSchema.safeParse(await request.json().catch(() => null));
  if (!mongoose.isValidObjectId(id) || !parsed.success) {
    return NextResponse.json({ error: "Invalid booking update." }, { status: 400 });
  }

  try {
    await connectDB();
    const booking = await Booking.findByIdAndUpdate(
      id,
      { status: parsed.data.status },
      { new: true, runValidators: true },
    ).lean();
    if (!booking) {
      return NextResponse.json({ error: "Booking not found." }, { status: 404 });
    }
    return NextResponse.json({ data: booking });
  } catch (error) {
    console.error("Admin booking update failed:", error);
    return NextResponse.json({ error: "Could not update booking." }, { status: 500 });
  }
}
