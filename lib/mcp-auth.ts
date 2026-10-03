import { createHash, timingSafeEqual } from "crypto";
import connectDB from "@/lib/db/mongodb";
import McpToken from "@/lib/models/McpToken";

export function hashMcpToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

function secureEqual(left: string, right: string) {
  const leftBuffer = Buffer.from(left, "utf8");
  const rightBuffer = Buffer.from(right, "utf8");
  return leftBuffer.length === rightBuffer.length && timingSafeEqual(leftBuffer, rightBuffer);
}

export async function isAuthorizedMcpRequest(request: Request) {
  const authorization = request.headers.get("authorization") || "";
  if (!authorization.startsWith("Bearer ")) return false;

  const token = authorization.slice("Bearer ".length).trim();
  if (!token) return false;

  const environmentToken = process.env.BLOG_MCP_API_KEY?.trim();
  if (environmentToken && secureEqual(token, environmentToken)) return true;
  if (!token.startsWith("lcs_mcp_")) return false;

  try {
    await connectDB();
    const credential = await McpToken.findOne({
      tokenHash: hashMcpToken(token),
      revokedAt: null,
    }).select("_id");

    if (!credential) return false;
    await McpToken.updateOne({ _id: credential._id }, { $set: { lastUsedAt: new Date() } });
    return true;
  } catch (error) {
    console.error("MCP token authorization failed:", error);
    return false;
  }
}
