import Link from 'next/link';
import { ArrowRight, BookOpen, Clock, ShieldCheck } from 'lucide-react';
import { Navigation } from '@/components/landing/navigation';
import { FooterSection } from '@/components/landing/footer-section';
import { BlogGrid } from '@/components/blog/blog-grid';
import { getPublishedBlogs } from '@/lib/blogs';

export default async function BlogPage() {
  const blogs = await getPublishedBlogs(9);
  const featuredBlog = blogs[0];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <Navigation />

      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-primary/10 via-secondary/5 to-transparent" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative">
          <div className="grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-end">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                <span className="w-8 h-px gradient-flame" />
                Expert Advice
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display text-foreground mb-6 leading-[0.95]">
                Practical insight for London homes and workplaces
              </h1>
              <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed max-w-2xl">
                Clear guidance from engineers on heating, cooling, plumbing, gas safety,
                and keeping your property running without surprises.
              </p>
            </div>

            <div className="grid grid-cols-3 lg:grid-cols-1 gap-3">
              {[
                { icon: ShieldCheck, label: 'Certified guidance' },
                { icon: Clock, label: 'Fast reads' },
                { icon: BookOpen, label: `${blogs.length || 0} articles` },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="border border-border bg-background/80 backdrop-blur-sm rounded-lg px-3 py-4 lg:px-5 lg:py-4"
                >
                  <Icon className="w-5 h-5 text-primary mb-3" />
                  <p className="text-sm font-medium text-foreground leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {featuredBlog && (
        <section className="pb-12 lg:pb-16">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
            <Link
              href={`/blog/${featuredBlog.slug}`}
              className="group grid lg:grid-cols-[1.1fr_0.9fr] border border-border rounded-lg overflow-hidden bg-muted/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6 sm:p-8 lg:p-10">
                <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-mono mb-8">
                  Featured
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground leading-tight mb-5 group-hover:text-primary transition-colors">
                  {featuredBlog.title}
                </h2>
                <p className="text-foreground/65 leading-relaxed text-base sm:text-lg max-w-2xl line-clamp-3">
                  {featuredBlog.description}
                </p>
              </div>
              <div className="relative min-h-64 border-t lg:border-t-0 lg:border-l border-border bg-foreground text-background p-6 sm:p-8 lg:p-10 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 square-pattern opacity-20 invert" />
                <div className="relative flex items-center justify-between gap-4 text-sm font-mono text-background/70">
                  <span>{featuredBlog.writtenBy}</span>
                  <span>
                    {new Date(featuredBlog.createdAt).toLocaleDateString('en-GB', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <div className="relative mt-16">
                  <span className="inline-flex items-center gap-2 text-sm font-medium">
                    Read article
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="pb-20 lg:pb-28">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 lg:mb-10">
            <div>
              <span className="text-sm font-mono text-muted-foreground">Latest Posts</span>
              <h2 className="text-3xl sm:text-4xl font-display text-foreground mt-2">
                More from the journal
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Advice written for quick decisions, planned upgrades, and emergency moments.
            </p>
          </div>

          {blogs.length > 0 ? (
            <BlogGrid blogs={blogs.slice(featuredBlog ? 1 : 0)} />
          ) : (
            <div className="border border-dashed border-border rounded-lg py-16 px-6 text-center bg-muted/20">
              <p className="text-foreground font-medium text-lg">No blogs found yet.</p>
              <p className="text-muted-foreground mt-2">Fresh guidance will appear here soon.</p>
            </div>
          )}
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
