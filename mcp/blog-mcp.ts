import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { blogInputSchema, slugifyBlogTitle } from "@/lib/blog-validation";
import connectDB from "@/lib/db/mongodb";
import { markdownToPlainText } from "@/lib/markdown";
import Blog from "@/lib/models/Blog";

type BlogRecord = {
  _id: unknown;
  title: string;
  description: string;
  excerpt?: string;
  writtenBy: string;
  slug: string;
  seoTitle?: string;
  metaDescription?: string;
  published: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
};

function serializeBlog(blog: BlogRecord) {
  return {
    id: String(blog._id),
    title: blog.title,
    content: blog.description,
    excerpt: blog.excerpt ?? "",
    author: blog.writtenBy,
    slug: blog.slug,
    seoTitle: blog.seoTitle ?? "",
    metaDescription: blog.metaDescription ?? "",
    published: Boolean(blog.published),
    createdAt: new Date(blog.createdAt).toISOString(),
    updatedAt: new Date(blog.updatedAt).toISOString(),
  };
}

function getPublicationDate() {
  const timeZone = process.env.BLOG_TIME_ZONE || "Europe/London";
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

function isRealIsoDate(value: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return false;
  const [, year, month, day] = match;
  const date = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));
  return (
    date.getUTCFullYear() === Number(year) &&
    date.getUTCMonth() === Number(month) - 1 &&
    date.getUTCDate() === Number(day)
  );
}

function blogUrl(slug: string) {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://londonclimatesystems.com").replace(/\/$/, "");
  return `${siteUrl}/blog/${slug}`;
}

function errorResult(error: unknown) {
  console.error("Blog MCP operation failed:", error);
  const message = error instanceof z.ZodError
    ? error.issues[0]?.message || "The article data is invalid."
    : "The blog operation failed. Try again or ask the site administrator to check the server logs.";
  return {
    isError: true as const,
    content: [{ type: "text" as const, text: message }],
  };
}

async function findAvailableSlug(value: string) {
  const baseSlug = slugifyBlogTitle(value) || "article";
  let slug = baseSlug;
  let suffix = 2;

  while (await Blog.exists({ slug })) {
    slug = `${baseSlug}-${suffix}`;
    suffix += 1;
  }

  return slug;
}

export function createBlogMcpServer() {
  const server = new McpServer(
    { name: "london-climate-systems-blog", version: "1.0.0" },
    {
      instructions:
        "For a daily article, first call list_recent_blogs to avoid repeating a topic. Write accurate UK-focused home heating, plumbing, gas safety, underfloor heating, or air-conditioning guidance. Then call publish_daily_blog once. The publish tool is idempotent for each London calendar date.",
    },
  );

  server.registerTool(
    "list_recent_blogs",
    {
      title: "List recent blog articles",
      description:
        "Review recent London Climate Systems articles before choosing a new daily topic. Returns newest articles first.",
      inputSchema: {
        limit: z.number().int().min(1).max(30).optional().default(10),
        includeDrafts: z.boolean().optional().default(false),
      },
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        openWorldHint: false,
      },
    },
    async ({ limit, includeDrafts }) => {
      try {
        await connectDB();
        const query = includeDrafts ? {} : { published: true };
        const blogs = (await Blog.find(query)
          .sort({ createdAt: -1 })
          .limit(limit)
          .lean()) as unknown as BlogRecord[];
        const serialized = blogs.map(serializeBlog);

        return {
          structuredContent: { blogs: serialized },
          content: [
            {
              type: "text",
              text: serialized.length
                ? serialized.map((blog) => `${blog.createdAt.slice(0, 10)} — ${blog.title} (${blogUrl(blog.slug)})`).join("\n")
                : "No blog articles were found.",
            },
          ],
        };
      } catch (error) {
        return errorResult(error);
      }
    },
  );

  server.registerTool(
    "get_blog",
    {
      title: "Get a blog article",
      description: "Read an existing article by slug when checking facts, style, or topic overlap.",
      inputSchema: {
        slug: z.string().trim().min(1).max(220),
      },
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        openWorldHint: false,
      },
    },
    async ({ slug }) => {
      try {
        await connectDB();
        const blog = (await Blog.findOne({ slug }).lean()) as unknown as BlogRecord | null;
        if (!blog) {
          return {
            isError: true,
            content: [{ type: "text" as const, text: `No article exists with slug "${slug}".` }],
          };
        }

        const serialized = serializeBlog(blog);
        return {
          structuredContent: { blog: serialized },
          content: [{ type: "text", text: JSON.stringify(serialized, null, 2) }],
        };
      } catch (error) {
        return errorResult(error);
      }
    },
  );

  server.registerTool(
    "publish_daily_blog",
    {
      title: "Publish the daily blog article",
      description:
        "Publish one complete Markdown article for a London calendar date. Repeated calls for the same date safely return the existing article instead of creating a duplicate.",
      inputSchema: {
        title: z.string().trim().min(5).max(200),
        content: z.string().trim().min(500).max(50000).describe("The complete article in Markdown."),
        excerpt: z.string().trim().max(320).optional().default(""),
        author: z.string().trim().min(2).max(120).optional(),
        slug: z.string().trim().max(220).optional(),
        seoTitle: z.string().trim().max(70).optional().default(""),
        metaDescription: z.string().trim().max(170).optional().default(""),
        publicationDate: z
          .string()
          .refine(isRealIsoDate, "publicationDate must be a real date in YYYY-MM-DD format")
          .optional()
          .describe("Defaults to today's date in Europe/London."),
      },
      annotations: {
        readOnlyHint: false,
        destructiveHint: false,
        openWorldHint: false,
      },
    },
    async ({ title, content, excerpt, author, slug: requestedSlug, seoTitle, metaDescription, publicationDate }) => {
      try {
        await connectDB();
        const dailyDate = publicationDate || getPublicationDate();
        const automationKey = `mcp-daily:${dailyDate}`;
        const existing = (await Blog.findOne({ automationKey }).select("+automationKey").lean()) as unknown as BlogRecord | null;

        if (existing) {
          const serialized = serializeBlog(existing);
          return {
            structuredContent: { created: false, publicationDate: dailyDate, blog: serialized, url: blogUrl(serialized.slug) },
            content: [
              {
                type: "text",
                text: `The daily article for ${dailyDate} already exists: ${serialized.title} — ${blogUrl(serialized.slug)}`,
              },
            ],
          };
        }

        const parsed = blogInputSchema.parse({
          title,
          slug: requestedSlug,
          excerpt,
          description: content,
          writtenBy: author || process.env.BLOG_DEFAULT_AUTHOR || "London Climate Systems",
          seoTitle,
          metaDescription,
          published: true,
        });
        const slug = await findAvailableSlug(parsed.slug || parsed.title);
        const blog = await Blog.create({
          ...parsed,
          slug,
          excerpt: parsed.excerpt || markdownToPlainText(parsed.description).slice(0, 220),
          automationKey,
        });
        const serialized = serializeBlog(blog.toObject() as BlogRecord);

        return {
          structuredContent: { created: true, publicationDate: dailyDate, blog: serialized, url: blogUrl(slug) },
          content: [
            {
              type: "text",
              text: `Published "${serialized.title}" for ${dailyDate}: ${blogUrl(slug)}`,
            },
          ],
        };
      } catch (error) {
        if (
          typeof error === "object" &&
          error !== null &&
          "code" in error &&
          error.code === 11000
        ) {
          return {
            isError: true,
            content: [
              {
                type: "text",
                text: "A daily article or slug was created concurrently. Call list_recent_blogs before retrying.",
              },
            ],
          };
        }
        return errorResult(error);
      }
    },
  );

  server.registerPrompt(
    "daily_blog_workflow",
    {
      title: "Daily blog publishing workflow",
      description: "Instructions for researching, writing, and publishing today's LCS article.",
      argsSchema: {
        focus: z.string().trim().max(200).optional(),
      },
    },
    ({ focus }) => ({
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text: [
              "Create and publish today's London Climate Systems blog article.",
              "First call list_recent_blogs and select a useful topic that does not substantially overlap recent posts.",
              focus ? `Prefer this focus when it is suitable: ${focus}` : "",
              "Use British English and write practical, accurate advice for London homeowners or landlords.",
              "Use clear Markdown headings, provide safety caveats where relevant, and never invent statistics, regulations, certifications, prices, or customer claims.",
              "Create an SEO title of at most 70 characters and a meta description of at most 170 characters.",
              "Finally call publish_daily_blog exactly once for today's Europe/London date.",
            ]
              .filter(Boolean)
              .join("\n"),
          },
        },
      ],
    }),
  );

  return server;
}
