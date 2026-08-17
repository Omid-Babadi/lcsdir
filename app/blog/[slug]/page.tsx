import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Navigation } from '@/components/landing/navigation-v2';
import { FooterSection } from '@/components/landing/footer-section-v2';
import { absoluteUrl, createSeoMetadata, siteConfig } from '@/lib/seo';
import { getPublishedBlogBySlug } from '@/lib/blogs';
import { DEFAULT_BLOG_COVER } from '@/lib/blog-images';
import { BlogCover } from '@/components/blog/blog-cover';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CalendarDays, Clock, Phone, UserRound } from 'lucide-react';
import { format } from 'date-fns';

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({ 
  params 
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getPublishedBlogBySlug(slug);
  const title = blog?.title || titleFromSlug(slug);
  const description =
    blog?.metaDescription || blog?.excerpt || blog?.description?.replace(/\s+/g, " ").slice(0, 155) ||
    `Read London Climate Systems guidance about ${title.toLowerCase()}.`;
  
  return createSeoMetadata({
    title: blog?.seoTitle || title,
    description,
    path: `/blog/${slug}`,
    type: "article",
    keywords: [title, "London Climate Systems blog"],
    image: blog?.coverImage || DEFAULT_BLOG_COVER,
    imageAlt: blog?.coverImageAlt || title,
  });
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const blog = await getPublishedBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const publishDate = new Date(blog.createdAt);
  const formattedDate = format(publishDate, 'MMMM d, yyyy');
  const readTime = Math.max(2, Math.ceil(blog.description.split(/\s+/).length / 180));
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.metaDescription || blog.excerpt,
    image: absoluteUrl(blog.coverImage || DEFAULT_BLOG_COVER),
    datePublished: blog.createdAt,
    dateModified: blog.updatedAt,
    mainEntityOfPage: absoluteUrl(`/blog/${blog.slug}`),
    author: { "@type": "Person", name: blog.writtenBy },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      logo: { "@type": "ImageObject", url: absoluteUrl(siteConfig.logo) },
    },
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }}
      />
      <Navigation />
      
      <section className="relative pt-28 pb-12 lg:pt-36 lg:pb-16 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-primary/10 via-secondary/5 to-transparent" />
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 relative">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to journal
          </Link>

          <article>
            <header className="max-w-4xl">
              <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                <span className="w-8 h-px gradient-flame" />
                Field Notes
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display text-foreground leading-[0.95] mb-8">
                {blog.title}
              </h1>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm text-foreground/70">
                  <UserRound className="w-4 h-4 text-primary" />
                  {blog.writtenBy}
                </span>
                <time
                  dateTime={blog.createdAt}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm text-foreground/70"
                >
                  <CalendarDays className="w-4 h-4 text-primary" />
                  {formattedDate}
                </time>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm text-foreground/70">
                  <Clock className="w-4 h-4 text-primary" />
                  {readTime} min read
                </span>
              </div>
            </header>
          </article>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-4 pb-12 sm:px-6 lg:px-12 lg:pb-16">
        <div className="aspect-[16/8] overflow-hidden rounded-[2rem] border border-border bg-muted shadow-[0_30px_80px_-50px_rgba(15,23,42,0.55)]">
          <BlogCover
            src={blog.coverImage}
            alt={blog.coverImageAlt || blog.title}
            priority
          />
        </div>
      </div>

      <section className="pb-20 lg:pb-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 lg:gap-16 items-start">
            <article className="min-w-0">
              <div className="border-y border-border py-10 lg:py-12">
                <p className="text-lg sm:text-xl leading-8 sm:leading-9 text-foreground/75 whitespace-pre-wrap">
                  {blog.description}
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Button asChild variant="outline" className="rounded-full gap-2">
                  <Link href="/blog">
                    <ArrowLeft className="w-4 h-4" />
                    All articles
                  </Link>
                </Button>
                <Button asChild className="rounded-full gradient-flame text-white gap-2">
                  <Link href="/contact">
                    Ask an engineer
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </article>

            <aside className="lg:sticky lg:top-28">
              <div className="rounded-lg border border-border bg-muted/20 p-6">
                <p className="text-sm font-mono text-muted-foreground mb-4">Need help now?</p>
                <h2 className="text-2xl font-display text-foreground mb-3">
                  Speak with London Climate Systems
                </h2>
                <p className="text-sm leading-relaxed text-foreground/65 mb-6">
                  Get practical advice for repairs, safety checks, maintenance, or new installations.
                </p>
                <div className="space-y-3">
                  <Button asChild className="w-full rounded-full gradient-flame text-white">
                    <Link href="/contact">
                      Book a visit
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full rounded-full">
                    <a href="tel:07473423003">
                      <Phone className="w-4 h-4 mr-2" />
                      07473 423003
                    </a>
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      
      <FooterSection />
    </main>
  );
}
