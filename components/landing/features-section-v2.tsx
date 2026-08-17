"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Droplets,
  Flame,
  Snowflake,
} from "lucide-react";

import { Reveal, SoftFloat } from "@/components/landing/motion-primitives";
import { useLondonAvailability } from "@/components/landing/use-london-availability";

const services = [
  {
    number: "01",
    icon: Droplets,
    title: "Plumbing",
    description:
      "Fast, tidy solutions for leaks, pipework, bathrooms, pumps, and everyday plumbing problems.",
    highlights: ["Emergency repairs", "Bathrooms", "Pipework"],
    href: "/services/plumbing",
    iconClass: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
  },
  {
    number: "02",
    icon: Flame,
    title: "Heating & boilers",
    description:
      "Gas Safe boiler care and efficient heating systems, installed and maintained with precision.",
    highlights: ["Boiler care", "Radiators", "Underfloor heating"],
    href: "/services/heating",
    iconClass: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  },
  {
    number: "03",
    icon: Snowflake,
    title: "Air conditioning",
    description:
      "Quiet, energy-conscious cooling for London homes and businesses, backed by F-Gas expertise.",
    highlights: ["Installation", "Maintenance", "Emergency support"],
    href: "/services/air-conditioning",
    iconClass: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
  },
];

export function FeaturesSection() {
  const isAvailable = useLondonAvailability();

  return (
    <section id="services" className="relative overflow-hidden py-24 sm:py-28 lg:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-24 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="absolute right-[-6rem] top-1/2 h-72 w-72 rounded-full bg-orange-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <div className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/[0.07] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-700 dark:text-orange-300">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              What we do
            </span>
            <h2 className="max-w-2xl text-4xl font-display leading-[0.98] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              One expert team for a
              <span className="text-orange-600"> comfortable property.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="lg:justify-self-end">
            <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              From urgent fixes to carefully planned installations, our certified
              engineers keep London properties flowing, warm, and cool.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.02fr_0.98fr] lg:gap-6">
          <Reveal direction="left" className="relative min-h-[510px] overflow-hidden rounded-[2rem] border border-border/70 bg-muted lg:min-h-[680px]">
            <Image
              src="https://res.cloudinary.com/daucwpsi8/image/upload/v1781006179/b365e0c1-e13a-4a2c-b519-c2f2068607c4_tgfqx7.png"
              alt="London Climate Systems engineer at work"
              fill
              className="object-cover object-top transition-transform duration-1000 hover:scale-[1.025]"
              sizes="(max-width: 1024px) 100vw, 52vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/5 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
              <div className="max-w-md">
                <p className="mb-3 text-xs font-mono uppercase tracking-[0.22em] text-white/60">
                  Built around your day
                </p>
                <p className="text-2xl font-display leading-tight sm:text-3xl">
                  Clear advice, careful work, and a space left tidy.
                </p>
              </div>
            </div>

            <SoftFloat className="absolute right-4 top-4 sm:right-6 sm:top-6" distance={6}>
              <div className="rounded-2xl border border-white/40 bg-white/90 px-4 py-3 text-slate-950 shadow-xl backdrop-blur-xl dark:bg-slate-950/85 dark:text-white">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <span className="relative flex h-2.5 w-2.5">
                    {isAvailable && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    )}
                    <span
                      className={
                        "relative inline-flex h-2.5 w-2.5 rounded-full " +
                        (isAvailable ? "bg-emerald-500" : "bg-rose-500")
                      }
                    />
                  </span>
                  {isAvailable ? "Engineers available" : "Bookings open"}
                </div>
                <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                  London-wide appointments
                </p>
              </div>
            </SoftFloat>
          </Reveal>

          <div className="grid gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.title} direction="right" delay={index * 0.08}>
                  <Link
                    href={service.href}
                    className="group relative block overflow-hidden rounded-[1.75rem] border border-border/70 bg-card p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-950/[0.06] sm:p-7"
                  >
                    <div className="absolute right-0 top-0 h-28 w-28 translate-x-10 -translate-y-10 rounded-full bg-orange-400/0 blur-2xl transition-colors duration-500 group-hover:bg-orange-400/15" />
                    <div className="relative flex items-start gap-4 sm:gap-5">
                      <div className={"flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl " + service.iconClass}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="mb-2 flex items-start justify-between gap-4">
                          <div>
                            <span className="mb-1 block text-[10px] font-mono tracking-[0.2em] text-muted-foreground">
                              SERVICE / {service.number}
                            </span>
                            <h3 className="text-xl font-display text-foreground sm:text-2xl">
                              {service.title}
                            </h3>
                          </div>
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:rotate-12 group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-white">
                            <ArrowUpRight className="h-4 w-4" />
                          </span>
                        </div>
                        <p className="text-sm leading-6 text-muted-foreground">
                          {service.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                          {service.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="inline-flex items-center gap-1.5 text-xs text-foreground/70"
                            >
                              <Check className="h-3.5 w-3.5 text-orange-500" />
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
