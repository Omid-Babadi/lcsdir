'use client';

import { ReactNode, useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';

interface BlogDetail {
  _id: string;
  title: string;
  description: string;
  writtenBy: string;
  createdAt: string;
}

interface BlogDetailLoaderState {
  blog: BlogDetail | null;
  isLoading: boolean;
  error: string | null;
}

interface BlogDetailLoaderProps {
  slug: string;
  children: (state: BlogDetailLoaderState) => ReactNode;
}

export function BlogDetailLoader({ slug, children }: BlogDetailLoaderProps) {
  const [blog, setBlog] = useState<BlogDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setIsLoading(true);
        setError(null);

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

  return children({ blog, isLoading, error });
}

export function BlogDetailSkeleton() {
  return (
    <article className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Skeleton className="h-12 w-3/4 mb-4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
      <div className="space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </article>
  );
}
