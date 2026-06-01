'use client';

import { BlogCard } from './blog-card';

interface BlogGridProps {
  blogs: Array<{
    _id: string;
    title: string;
    description: string;
    writtenBy: string;
    slug: string;
    createdAt: string;
  }>;
}

export function BlogGrid({ blogs }: BlogGridProps) {
  if (blogs.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-border bg-muted/20 px-6 py-12 text-center">
        <p className="text-sm text-muted-foreground">No additional articles yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
      {blogs.map((blog) => (
        <BlogCard key={blog._id} {...blog} />
      ))}
    </div>
  );
}
