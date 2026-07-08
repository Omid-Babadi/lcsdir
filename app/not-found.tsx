import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home, Search, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const helpfulLinks = [
  { label: "Heating", href: "/services/heating" },
  { label: "Boiler repairs", href: "/services/boiler/breakdown-repairs" },
  { label: "Plumbing", href: "/services/plumbing" },
  { label: "Air conditioning", href: "/services/air-conditioning" },
  { label: "Gas services", href: "/services/gas" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 square-pattern opacity-70" />
      <div className="absolute inset-x-0 top-0 h-px gradient-flame" />
      <section className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-16">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1fr_420px]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5">
              <Search className="size-4 text-orange-600" />
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-orange-600">
                404 not found
              </span>
            </div>
            <h1 className="font-display text-5xl leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
              This page is off the service map.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
              The page may have moved, but our heating, cooling, plumbing, gas, and boiler services are still right where you need them.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="gradient-flame h-12 rounded-full px-6 text-white" asChild>
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
            <div className="mb-6 flex items-center gap-3">
              <div className="relative size-12 overflow-hidden rounded-xl border border-border bg-background dark:bg-white">
                <Image src="/logo.png" alt="London Climate Systems" fill className="object-contain p-2" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">London Climate Systems</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Service shortcuts
                </p>
              </div>
            </div>
            <div className="grid gap-2">
              {helpfulLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between rounded-md border border-border px-4 py-3 text-sm font-medium transition-colors hover:border-orange-500/40 hover:bg-orange-500/5"
                >
                  {link.label}
                  <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-orange-600" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
