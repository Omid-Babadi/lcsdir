# Daily Blog MCP Setup

This project exposes the same blog publisher in two MCP connection modes:

- Local stdio: `pnpm mcp:blog`
- Production Streamable HTTP: `https://londonclimatesystems.com/api/mcp`

The server provides these tools:

- `list_recent_blogs` — inspect recent topics before writing
- `get_blog` — read an article by slug
- `publish_daily_blog` — publish one article per Europe/London calendar date

It also provides the `daily_blog_workflow` prompt. Publishing is idempotent: if an automation retries for the same date, the existing daily article is returned and no duplicate is created.

## 1. Configure environment variables

Add these values to `.env` locally and to the production hosting environment:

```dotenv
MONGODB_URI=your-existing-mongodb-connection
NEXT_PUBLIC_SITE_URL=https://londonclimatesystems.com
BLOG_MCP_API_KEY=optional-emergency-or-static-token
BLOG_DEFAULT_AUTHOR=London Climate Systems
BLOG_TIME_ZONE=Europe/London
```

`BLOG_MCP_API_KEY` is an optional static fallback. For normal production use, generate revocable tokens from **Admin workspace → Blog MCP**. The full generated token is displayed only once; the database stores only its SHA-256 hash.

## 2. Connect an AI client

Open **Admin workspace → Blog MCP**, enter a connection name, and select **Generate token**. Copy the token or the ready-made JSON configuration before dismissing it. For a local connection, copy `mcp.example.json` and replace `cwd` with this repository's absolute path. The local server reads `.env` through the package script.

For Codex, a production HTTP connection can be placed in `~/.codex/config.toml`:

```toml
[mcp_servers.lcs_blog]
url = "https://londonclimatesystems.com/api/mcp"
bearer_token_env_var = "BLOG_MCP_API_KEY"
```

Set `BLOG_MCP_API_KEY` in the AI client's environment to the token generated in the admin panel. The variable name here belongs to the client and does not need to match a production hosting variable. Restart or open a new client session after changing MCP configuration, then confirm that all three tools are visible.

For an OpenAI Agents API HTTP connection, use the production endpoint and pass `Authorization: Bearer <BLOG_MCP_API_KEY>` through a secure credential or vault. Never put the token in agent instructions.

## 3. Create the daily schedule

MCP servers respond to tool calls; they do not wake themselves up. Create a recurring daily task in the connected AI host. Use this task instruction:

```text
Every day at 09:00 Europe/London, use the London Climate Systems blog MCP server.
Call list_recent_blogs first and choose a useful non-duplicate topic about heating,
boilers, plumbing, gas safety, underfloor heating, or air conditioning for London
homeowners or landlords. Write an accurate, practical article in British English
with Markdown headings, an SEO title no longer than 70 characters, and a meta
description no longer than 170 characters. Do not invent regulations, statistics,
prices, accreditations, or customer claims. Call publish_daily_blog exactly once
with today's Europe/London date. Report the published URL.
```

The schedule must run in an AI host that supports recurring tasks and MCP tool calls. Keep write-tool approval enabled while testing. After verifying several runs, adjust approval policy only if the host and account are appropriately secured.

## 4. Verify before enabling the schedule

1. Deploy the site with MongoDB configured.
2. Generate a token in **Admin workspace → Blog MCP**.
3. Connect the MCP client to `/api/mcp` using the bearer token.
4. Call `list_recent_blogs`.
5. Call `publish_daily_blog` with a test-quality complete article and today's date.
6. Repeat the same call and verify it returns `created: false` rather than creating another post.
7. Check the article at `/blog/<slug>`.

The HTTP endpoint returns `401 Unauthorized` when the bearer token is missing, invalid, or revoked. The local stdio mode is protected by local process and filesystem access rather than bearer authentication.
