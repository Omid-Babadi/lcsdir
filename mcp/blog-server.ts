import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createBlogMcpServer } from "./blog-mcp";

async function main() {
  const server = createBlogMcpServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("London Climate Systems blog MCP server is running over stdio.");
}

main().catch((error) => {
  console.error("Blog MCP server failed to start:", error);
  process.exit(1);
});
