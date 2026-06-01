'use client';

import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { ArrowUpRight, CalendarDays, UserRound } from 'lucide-react';

interface BlogCardProps {
  _id: string;
  title: string;
  description: string;
  writtenBy: string;
  slug: string;
  createdAt: string;
}

function fallbackSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export function BlogCard({ title, description, writtenBy, slug, createdAt }: BlogCardProps) {
  const timeAgo = formatDistanceToNow(new Date(createdAt), { addSuffix: true });

  return (
    <Link
      href={`/blog/${slug || fallbackSlug(title)}`}
      className="group flex min-h-[310px] flex-col rounded-lg border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <CalendarDays className="h-5 w-5" />
        </div>
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/50 transition-colors group-hover:border-primary/40 group-hover:text-primary">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <div className="mt-8 flex-1">
        <h3 className="text-2xl font-display leading-tight text-foreground transition-colors group-hover:text-primary line-clamp-2">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-foreground/60 line-clamp-4">
          {description}
        </p>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-5 text-xs font-mono text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <UserRound className="h-3.5 w-3.5 text-primary" />
          {writtenBy}
        </span>
        <span>{timeAgo}</span>
      </div>
    </Link>
  );
}
