import Link from 'next/link';
import { ArrowRight, BookOpen, Clock, ShieldCheck } from 'lucide-react';
import { Navigation } from '@/components/landing/navigation-v2';
import { FooterSection } from '@/components/landing/footer-section-v2';
import { BlogGrid } from '@/components/blog/blog-grid';
import { getPublishedBlogs } from '@/lib/blogs';

export default async function BlogPage() {
  const blogs = await getPublishedBlogs();
  const featuredBlog = blogs[0];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <Navigation />

      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),_transparent_34%)]" />
        <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(14,165,233,0.12),_transparent_56%)] blur-3xl" />
        <div className="pointer-events-none absolute left-0 bottom-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(255,152,0,0.10),_transparent_58%)] blur-3xl" />

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_440px] lg:items-end">
            <div className="max-w-3xl">
              <span className="mb-6 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-primary/90">
                <span className="inline-block h-px w-12 rounded-full bg-primary" />
                Expert Advice
              </span>
              <h1 className="mb-6 text-5xl sm:text-6xl lg:text-7xl font-display tracking-tight text-foreground leading-[0.98]">
                Practical insight for London homes and workplaces
              </h1>
              <p className="max-w-2xl text-lg sm:text-xl text-foreground/70 leading-8">
                Clear guidance from engineers on heating, cooling, plumbing, gas safety,
                and keeping your property running without surprises.
              </p>
            </div>

            <div className="rounded-[2rem] border border-border/70 bg-card/90 p-4 shadow-[0_30px_70px_-48px_rgba(15,23,42,0.35)] backdrop-blur-xl">
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {[
                { icon: ShieldCheck, label: 'Certified guidance' },
                { icon: Clock, label: 'Fast reads' },
                { icon: BookOpen, label: `${blogs.length || 0} articles` },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-[1.35rem] border border-border bg-background px-4 py-4"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="text-sm font-medium text-foreground leading-tight">{label}</p>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {featuredBlog && (
        <section className="pb-12 lg:pb-16">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <Link
              href={`/blog/${featuredBlog.slug}`}
              className="group block overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-[0_32px_80px_-54px_rgba(15,23,42,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
            >
              <div className="p-7 sm:p-9 lg:p-12">
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                    Featured
                  </span>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                    <span>{featuredBlog.writtenBy}</span>
                    <span aria-hidden="true">·</span>
                    <span>
                      {new Date(featuredBlog.createdAt).toLocaleDateString('en-GB', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                </div>
                <h2 className="max-w-5xl text-3xl font-display leading-tight text-foreground transition-colors group-hover:text-primary sm:text-4xl lg:text-5xl">
                  {featuredBlog.title}
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-relaxed text-foreground/65 line-clamp-3 sm:text-lg">
                  {featuredBlog.excerpt || featuredBlog.description}
                </p>
                <div className="mt-8 border-t border-border/70 pt-6">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
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
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 lg:mb-10">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">Latest Posts</span>
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
            <div className="rounded-[2rem] border border-dashed border-border bg-card/80 py-16 px-6 text-center shadow-sm">
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
