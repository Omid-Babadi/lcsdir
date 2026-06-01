"use client";

import "./globals.css";

import { RefreshCcw, Phone } from "lucide-react";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
          <div className="absolute inset-0 square-pattern opacity-70" />
          <div className="absolute inset-x-0 top-0 h-px bg-destructive" />
          <section className="relative mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center px-6 py-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-destructive/20 bg-destructive/10 px-4 py-1.5">
              <span className="size-1.5 rounded-full bg-destructive" />
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-destructive">
                Critical page error
              </span>
            </div>
            <h1 className="font-display text-5xl leading-[1.05] text-foreground sm:text-6xl">
              The page could not load cleanly.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
              Try refreshing the page. If you need immediate service support, call London Climate Systems directly.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={reset}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white transition-opacity hover:opacity-90 gradient-flame"
              >
                <RefreshCcw className="size-4" />
                Try again
              </button>
              <a
                href="tel:07473423003"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-background px-6 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                <Phone className="size-4" />
                Call us
              </a>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
