import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import { revalidatePath } from "next/cache";
import { isAuthorizedMcpRequest } from "@/lib/mcp-auth";
import { createBlogMcpServer } from "@/mcp/blog-mcp";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
  "Access-Control-Allow-Headers":
    "Authorization, Content-Type, Last-Event-ID, MCP-Protocol-Version, MCP-Session-Id",
  "Access-Control-Expose-Headers": "MCP-Protocol-Version, MCP-Session-Id",
};

function withCors(response: Response) {
  const headers = new Headers(response.headers);
  Object.entries(corsHeaders).forEach(([name, value]) => headers.set(name, value));
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

async function handleMcpRequest(request: Request) {
  if (!(await isAuthorizedMcpRequest(request))) {
    return Response.json(
      { error: "Unauthorized" },
      { status: 401, headers: { ...corsHeaders, "WWW-Authenticate": "Bearer" } },
    );
  }

  const server = createBlogMcpServer({
    onPublished: (slug) => {
      revalidatePath("/blog");
      revalidatePath(`/blog/${slug}`);
      revalidatePath("/sitemap.xml");
    },
  });
  const transport = new WebStandardStreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
    enableJsonResponse: true,
    maxRequestBodySize: 1024 * 1024,
  });

  try {
    await server.connect(transport);
    return withCors(await transport.handleRequest(request));
  } catch (error) {
    console.error("MCP request failed:", error);
    return Response.json(
      {
        jsonrpc: "2.0",
        error: { code: -32603, message: "Internal MCP server error" },
        id: null,
      },
      { status: 500, headers: corsHeaders },
    );
  }
}

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders });
}

export const GET = handleMcpRequest;
export const POST = handleMcpRequest;
export const DELETE = handleMcpRequest;
