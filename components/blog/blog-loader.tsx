'use client';

import { ReactNode, useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface BlogData {
  _id: string;
  title: string;
  description: string;
  writtenBy: string;
  slug: string;
  createdAt: string;
}

interface BlogLoaderState {
  blogs: BlogData[];
  isLoading: boolean;
  error: string | null;
}

interface BlogLoaderProps {
  children: (state: BlogLoaderState) => ReactNode;
  page?: number;
  limit?: number;
}

export function BlogLoader({ children, page = 1, limit = 9 }: BlogLoaderProps) {
  const [blogs, setBlogs] = useState<BlogData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(`/api/blogs?page=${page}&limit=${limit}`);

        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }

        const data = await response.json();

        if (data.success) {
          setBlogs(data.data);
        } else {
          setError('Failed to load blogs');
          toast({
            title: 'Error',
            description: 'Failed to load blogs. Please try again later.',
            variant: 'destructive',
          });
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

    fetchBlogs();
  }, [page, limit, toast]);

  return children({ blogs, isLoading, error });
}
