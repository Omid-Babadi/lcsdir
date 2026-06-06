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
  // Safely parse createdAt
  let createdAt = blog.createdAt ? new Date(blog.createdAt) : new Date();
  if (isNaN(createdAt.getTime())) {
    console.warn(`Invalid createdAt for blog ${blog._id}, using current date`);
    createdAt = new Date();
  }

  // Safely parse updatedAt, fallback to createdAt
  let updatedAt = blog.updatedAt ? new Date(blog.updatedAt) : createdAt;
  if (isNaN(updatedAt.getTime())) {
    console.warn(`Invalid updatedAt for blog ${blog._id}, using createdAt`);
    updatedAt = createdAt;
  }

  return {
    _id: String(blog._id),
    title: blog.title,
    description: blog.description,
    writtenBy: blog.writtenBy,
    slug: blog.slug,
    createdAt: createdAt.toISOString(),
    updatedAt: updatedAt.toISOString(),
  };
}

export async function getPublishedBlogs(limit?: number): Promise<PublishedBlog[]> {
  try {
    await connectDB();
    let query = Blog.find({ published: true }).sort({ createdAt: -1 });
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
