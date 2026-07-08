"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, Home, RefreshCcw, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 square-pattern opacity-70" />
      <div className="absolute inset-x-0 top-0 h-px bg-destructive" />
      <section className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-16">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_420px]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-destructive/20 bg-destructive/10 px-4 py-1.5">
              <AlertTriangle className="size-4 text-destructive" />
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-destructive">
                System interrupted
              </span>
            </div>
            <h1 className="font-display text-5xl leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
              Something needs a quick reset.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
              The page hit an unexpected problem. Try again, return home, or call us directly if you need urgent help.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button onClick={reset} className="gradient-flame h-12 rounded-full px-6 text-white">
                <RefreshCcw className="size-4" />
                Try again
              </Button>
              <Button variant="outline" className="h-12 rounded-full px-6" asChild>
                <Link href="/">
                  <Home className="size-4" />
                  Back home
                </Link>
              </Button>
              <Button variant="outline" className="h-12 rounded-full px-6" asChild>
                <a href="tel:07473423003">
                  <Phone className="size-4" />
                  Call us
                </a>
              </Button>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-background/85 p-6 shadow-xl backdrop-blur">
            <div className="relative mb-6 size-16 overflow-hidden rounded-2xl border border-border bg-background dark:bg-white">
              <Image src="/logo.png" alt="London Climate Systems" fill className="object-contain p-2" />
            </div>
            <div className="space-y-4">
              {[
                ["Status", "Page recovery available"],
                ["Support", "07473 423003"],
                ["Coverage", "Greater London"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
                  <span className="text-sm font-semibold text-foreground">{value}</span>
                </div>
              ))}
            </div>
            {error.digest ? (
              <p className="mt-6 rounded-md bg-muted px-3 py-2 font-mono text-[11px] text-muted-foreground">
                Error reference: {error.digest}
              </p>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
