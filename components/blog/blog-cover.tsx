import { DEFAULT_BLOG_COVER } from "@/lib/blog-images";
import { cn } from "@/lib/utils";

export function BlogCover({
  src,
  alt,
  className,
  priority = false,
}: {
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    // Blog images are admin-controlled HTTPS URLs and may use different CDNs.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src || DEFAULT_BLOG_COVER}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      className={cn("h-full w-full object-cover object-center", className)}
    />
  );
}
