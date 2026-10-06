import Blog from "@/lib/models/Blog";
import connectDB from "@/lib/db/mongodb";
import { markdownToPlainText } from "@/lib/markdown";

export type PublishedBlog = {
  _id: string;
  title: string;
  description: string;
  excerpt: string;
  writtenBy: string;
  slug: string;
  seoTitle: string;
  metaDescription: string;
  createdAt: string;
  updatedAt: string;
};

// Exact-content duplicates retained in the database for redirect purposes.
// Excluding them from listings and the sitemap consolidates search signals on
// the original URLs instead of making two pages compete for the same query.
const duplicateBlogSlugs = [
  "air-conditioning-not-cooling-london-2",
  "do-you-need-a-power-flush-london-2",
  "low-water-pressure-london-home-2",
  "why-is-my-radiator-not-heating-up-2",
];

function parseDate(value: unknown) {
  if (!value) return null;
  const date = new Date(value as string | number | Date);
  return Number.isNaN(date.getTime()) ? null : date;
}

function objectIdDate(blog: any) {
  if (blog._id && typeof blog._id.getTimestamp === "function") {
    return blog._id.getTimestamp() as Date;
  }
  return new Date(0);
}

function serializeBlog(blog: any): PublishedBlog {
  // Legacy imported posts do not all have Mongoose timestamps. Mongo ObjectIds
  // contain their creation time, providing a stable fallback instead of making
  // an old post look newly published on every request.
  const createdAt =
    parseDate(blog.createdAt) ??
    objectIdDate(blog);
  const updatedAt = parseDate(blog.updatedAt) ?? createdAt;

  return {
    _id: String(blog._id),
    title: blog.title,
    description: blog.description,
    excerpt: blog.excerpt ? blog.excerpt : markdownToPlainText(String(blog.description)).slice(0, 220),
    writtenBy: blog.writtenBy,
    slug: blog.slug,
    seoTitle: blog.seoTitle ? blog.seoTitle : "",
    metaDescription: blog.metaDescription ? blog.metaDescription : "",
    createdAt: createdAt.toISOString(),
    updatedAt: updatedAt.toISOString(),
  };
}

export async function getPublishedBlogs(limit?: number): Promise<PublishedBlog[]> {
  try {
    await connectDB();
    let query = Blog.find({
      published: true,
      slug: { $nin: duplicateBlogSlugs },
    }).sort({ createdAt: -1, _id: -1 });
    if (limit && limit > 0) {
      query = query.limit(limit);
    }
    const blogs = await query.lean();
    return blogs.map(serializeBlog);
  } catch (error) {
    console.error("Error loading published blogs:", error);
    return [];
  }
}

const relatedStopWords = new Set([
  "about", "after", "before", "complete", "does", "from", "guide",
  "home", "homes", "london", "should", "that", "their", "this", "what",
  "when", "with", "your",
]);

function titleTokens(title: string) {
  return new Set(
    title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter((word) => word.length > 3 && !relatedStopWords.has(word)),
  );
}

export async function getRelatedBlogs(
  current: PublishedBlog,
  limit = 3,
): Promise<PublishedBlog[]> {
  const currentTokens = titleTokens(current.title);
  const blogs = await getPublishedBlogs(100);

  return blogs
    .filter((blog) => blog.slug !== current.slug)
    .map((blog) => ({
      blog,
      overlap: [...titleTokens(blog.title)].filter((token) =>
        currentTokens.has(token),
      ).length,
    }))
    .sort(
      (a, b) =>
        b.overlap - a.overlap ||
        new Date(b.blog.createdAt).getTime() -
          new Date(a.blog.createdAt).getTime(),
    )
    .slice(0, limit)
    .map(({ blog }) => blog);
}

export async function getPublishedBlogBySlug(slug: string): Promise<PublishedBlog | null> {
  try {
    await connectDB();

    const blog = await Blog.findOne({ slug, published: true }).lean();
    return blog ? serializeBlog(blog) : null;
  } catch (error) {
    console.error(`Error loading blog "${slug}":`, error);
    return null;
  }
}
