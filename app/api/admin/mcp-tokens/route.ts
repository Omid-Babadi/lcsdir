import { randomBytes } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { canMutateAdminData, isAuthorizedAdminRequest } from "@/lib/admin-api";
import connectDB from "@/lib/db/mongodb";
import { hashMcpToken } from "@/lib/mcp-auth";
import McpToken from "@/lib/models/McpToken";

export const dynamic = "force-dynamic";

const createTokenSchema = z.object({
  name: z.string().trim().min(2).max(80),
});

export async function GET(request: NextRequest) {
  if (!isAuthorizedAdminRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
    const tokens = await McpToken.find({})
      .select("name tokenPrefix lastUsedAt revokedAt createdAt")
      .sort({ createdAt: -1 })
      .lean();
    return NextResponse.json(
      { data: tokens },
      { headers: { "Cache-Control": "private, no-store" } },
    );
  } catch (error) {
    console.error("Admin MCP token list failed:", error);
    return NextResponse.json({ error: "Could not load MCP access tokens." }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  if (!canMutateAdminData(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const parsed = createTokenSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message || "Enter a valid token name." },
      { status: 400 },
    );
  }

  try {
    await connectDB();
    const token = `lcs_mcp_${randomBytes(32).toString("base64url")}`;
    const credential = await McpToken.create({
      name: parsed.data.name,
      tokenHash: hashMcpToken(token),
      tokenPrefix: `${token.slice(0, 16)}…`,
    });

    return NextResponse.json(
      {
        data: {
          _id: String(credential._id),
          name: credential.name,
          tokenPrefix: credential.tokenPrefix,
          createdAt: credential.createdAt,
          lastUsedAt: credential.lastUsedAt,
          revokedAt: credential.revokedAt,
        },
        token,
      },
      { status: 201, headers: { "Cache-Control": "private, no-store" } },
    );
  } catch (error) {
    console.error("Admin MCP token creation failed:", error);
    return NextResponse.json({ error: "Could not generate an MCP access token." }, { status: 500 });
  }
}
