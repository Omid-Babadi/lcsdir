"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  Clock3,
  Droplets,
  Flame,
  MapPin,
  Snowflake,
} from "lucide-react";

import { LondonScrollSequence } from "@/components/landing/london-scroll-sequence";
import { Reveal } from "@/components/landing/motion-primitives";

const stats = [
  { icon: Building2, value: "32+", label: "London boroughs" },
  { icon: Clock3, value: "Fast", label: "Local response" },
  { icon: MapPin, value: "Local", label: "London engineers" },
];

const coverage = [
  {
    icon: Droplets,
    label: "Plumbing",
    detail: "Leaks, pipework & bathrooms",
    color: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
  },
  {
    icon: Flame,
    label: "Heating",
    detail: "Boilers, radiators & controls",
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  },
  {
    icon: Snowflake,
    label: "Cooling",
    detail: "Installation, care & repairs",
    color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
  },
];

export function LondonMapSection() {
  return (
    <section
      id="service-area"
      className="relative bg-[#f5f6f3] pt-24 dark:bg-slate-950/40 sm:pt-28 lg:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-orange-300/15 blur-[110px]" />
        <div className="absolute -right-48 top-[28rem] h-[30rem] w-[30rem] rounded-full bg-cyan-300/10 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(currentColor_1px,transparent_1px),linear-gradient(90deg,currentColor_1px,transparent_1px)] [background-size:56px_56px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <div className="grid gap-9 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <Reveal>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/[0.08] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-700 dark:text-orange-300">
              <MapPin className="h-3.5 w-3.5" />
              Greater London coverage
            </span>
            <h2 className="max-w-4xl text-4xl font-display leading-[0.96] tracking-tight sm:text-5xl lg:text-7xl">
              London is always moving.
              <span className="text-orange-600"> So are we.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="lg:pb-1">
            <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              Local, certified engineers covering urgent repairs, planned
              installations, and dependable maintenance across Greater London.
              Scroll through the city to see our coverage story unfold.
            </p>
            <Link
              href="/contact"
              className="group mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 dark:bg-white dark:text-slate-950 dark:hover:bg-orange-400"
            >
              Check your postcode
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-3 lg:mt-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Reveal key={stat.label} delay={index * 0.05}>
                  <div className="h-full rounded-2xl border border-border/70 bg-background/80 p-4 shadow-sm backdrop-blur-sm sm:p-5">
                    <Icon className="mb-5 h-4 w-4 text-orange-500" />
                    <p className="text-xl font-display tracking-tight text-foreground sm:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[10px] leading-4 text-muted-foreground sm:text-xs">
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.12}>
            <div className="grid h-full gap-2 rounded-[1.5rem] border border-border/70 bg-background/75 p-3 shadow-sm backdrop-blur-sm sm:grid-cols-3">
              {coverage.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-2xl p-3 transition-colors duration-300 hover:bg-muted/70"
                  >
                    <span
                      className={
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl " +
                        item.color
                      }
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span>
                      <strong className="block text-sm font-semibold text-foreground">
                        {item.label}
                      </strong>
                      <span className="text-[10px] leading-4 text-muted-foreground">
                        {item.detail}
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative mt-10 sm:mt-14 lg:mt-16">
        <LondonScrollSequence />
      </div>
    </section>
  );
}
