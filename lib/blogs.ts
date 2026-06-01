import Blog from "@/lib/models/Blog";
import connectDB from "@/lib/db/mongodb";

export type PublishedBlog = {
  _id: string;
  title: string;
  description: string;
  writtenBy: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
};

function serializeBlog(blog: any): PublishedBlog {
  return {
    _id: String(blog._id),
    title: blog.title,
    description: blog.description,
    writtenBy: blog.writtenBy,
    slug: blog.slug,
    createdAt: new Date(blog.createdAt).toISOString(),
    updatedAt: new Date(blog.updatedAt || blog.createdAt).toISOString(),
  };
}

export async function getPublishedBlogs(limit = 50): Promise<PublishedBlog[]> {
  try {
    await connectDB();

    const blogs = await Blog.find({ published: true })
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean();

    return blogs.map(serializeBlog);
  } catch (error) {
    console.error("Error loading published blogs:", error);
    return [];
  }
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
