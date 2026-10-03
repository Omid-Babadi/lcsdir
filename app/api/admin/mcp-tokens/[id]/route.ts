import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { canMutateAdminData } from "@/lib/admin-api";
import connectDB from "@/lib/db/mongodb";
import McpToken from "@/lib/models/McpToken";

type Context = { params: Promise<{ id: string }> };

export async function DELETE(request: NextRequest, { params }: Context) {
  if (!canMutateAdminData(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  if (!mongoose.isValidObjectId(id)) {
    return NextResponse.json({ error: "Invalid MCP token." }, { status: 400 });
  }

  try {
    await connectDB();
    const token = await McpToken.findOneAndUpdate(
      { _id: id, revokedAt: null },
      { $set: { revokedAt: new Date() } },
      { new: true },
    ).lean();

    if (!token) {
      return NextResponse.json({ error: "Active MCP token not found." }, { status: 404 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Admin MCP token revocation failed:", error);
    return NextResponse.json({ error: "Could not revoke the MCP token." }, { status: 500 });
  }
}
