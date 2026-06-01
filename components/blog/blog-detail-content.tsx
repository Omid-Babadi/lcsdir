'use client';

import { useEffect, useState } from 'react';
import { formatDistanceToNow, format } from 'date-fns';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { BlogDetailSkeleton } from './blog-detail-loader';

interface BlogData {
  _id: string;
  title: string;
  description: string;
  writtenBy: string;
  createdAt: string;
}

interface BlogDetailContentProps {
  slug: string;
}

export function BlogDetailContent({ slug }: BlogDetailContentProps) {
  const [blog, setBlog] = useState<BlogData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setIsLoading(true);
        setError(null);

        if (!slug) {
          setError('Invalid blog slug');
          setIsLoading(false);
          return;
        }

        const response = await fetch(`/api/blogs/${slug}`);

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Blog not found');
          }
          throw new Error('Failed to fetch blog');
        }

        const data = await response.json();

        if (data.success) {
          setBlog(data.data);
        } else {
          setError('Failed to load blog');
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error';
        setError(errorMessage);
        toast({
          title: 'Error',
          description: errorMessage,
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [slug, toast]);

  if (error) {
    return (
      <div className="bg-destructive/10 text-destructive px-4 py-3 rounded-lg">
        <p className="text-sm">{error}</p>
      </div>
    );
  }

  if (isLoading) {
    return <BlogDetailSkeleton />;
  }

  if (!blog) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">Blog not found.</p>
      </div>
    );
  }

  const publishDate = new Date(blog.createdAt);
  const timeAgo = formatDistanceToNow(publishDate, { addSuffix: true });
  const formattedDate = format(publishDate, 'MMMM d, yyyy');

  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8 md:mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-instrument-serif">
          {blog.title}
        </h1>
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-muted-foreground">
          <span className="font-medium text-foreground/80">{blog.writtenBy}</span>
          <span className="hidden sm:inline">•</span>
          <time dateTime={blog.createdAt} className="text-sm">
            {formattedDate} ({timeAgo})
          </time>
        </div>
      </header>

      <div className="prose prose-invert max-w-none">
        <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-wrap">
          {blog.description}
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-border/50">
        <Link href="/blog">
          <Button variant="outline" className="gap-2">
            <ChevronLeft className="w-4 h-4" />
            Back to Blogs
          </Button>
        </Link>
      </div>
    </article>
  );
}
