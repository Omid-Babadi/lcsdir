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

import { MouseDotConstellation } from "@/components/landing/mouse-dot-constellation";
import { Reveal, SoftFloat } from "@/components/landing/motion-primitives";

const stats = [
  { value: "32+", label: "boroughs covered" },
  { value: "540+", label: "jobs each year" },
  { value: "Local", label: "London engineers" },
];

const coverage = [
  { icon: Droplets, label: "Plumbing", color: "text-sky-500 bg-sky-500/10" },
  { icon: Flame, label: "Heating", color: "text-orange-500 bg-orange-500/10" },
  { icon: Snowflake, label: "Cooling", color: "text-cyan-500 bg-cyan-500/10" },
];

export function LondonMapSection() {
  return (
    <section
      id="service-area"
      className="relative overflow-hidden bg-[#f5f6f3] py-24 dark:bg-slate-950/40 sm:py-28 lg:py-36"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-300/15 blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(currentColor_1px,transparent_1px),linear-gradient(90deg,currentColor_1px,transparent_1px)] [background-size:56px_56px]" />
      </div>

      <div className="relative mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-16 lg:px-12">
        <div>
          <Reveal>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/[0.08] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-700 dark:text-orange-300">
              <MapPin className="h-3.5 w-3.5" />
              Greater London coverage
            </span>
            <h2 className="max-w-2xl text-4xl font-display leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl">
              Your comfort team,
              <span className="text-orange-600"> just around the corner.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              Our local engineers cover homes and businesses across Greater
              London for urgent repairs, planned installations, and dependable
              maintenance.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-3">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={0.08 + index * 0.06}>
                <div className="h-full rounded-2xl border border-border/70 bg-background/80 p-4 shadow-sm backdrop-blur-sm sm:p-5">
                  <p className="text-xl font-display tracking-tight text-foreground sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[10px] leading-4 text-muted-foreground sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.18}>
            <div className="mt-8 rounded-[1.5rem] border border-border/70 bg-background/75 p-3 shadow-sm backdrop-blur-sm">
              <div className="grid gap-2 sm:grid-cols-3">
                {coverage.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium text-foreground"
                    >
                      <span
                        className={
                          "flex h-8 w-8 items-center justify-center rounded-xl " +
                          item.color
                        }
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      {item.label}
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 dark:bg-white dark:text-slate-950 dark:hover:bg-orange-400"
              >
                Check your postcode
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                <Clock3 className="h-4 w-4 text-emerald-500" />
                Fast local response, subject to availability
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal direction="right" className="relative">
          <div className="absolute -inset-5 rounded-[3rem] bg-gradient-to-br from-orange-500/15 via-sky-500/10 to-transparent blur-2xl" />
          <div className="relative h-[470px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#050b14] shadow-2xl shadow-slate-950/25 sm:h-[600px] lg:h-[680px]">
            <MouseDotConstellation />

            <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-5 sm:p-7">
              <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.18em] text-white/60 backdrop-blur-md">
                London service network
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.16em] text-emerald-300 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Live
              </div>
            </div>

            <SoftFloat className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7" distance={5}>
              <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-black/45 p-3 pr-5 text-white shadow-xl backdrop-blur-xl">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white">
                  <Building2 className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Homes & businesses</p>
                  <p className="text-[11px] text-white/50">Across Greater London</p>
                </div>
              </div>
            </SoftFloat>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
