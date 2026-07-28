"use client";

import { MouseDotConstellation } from "@/components/landing/mouse-dot-constellation";
import { Building2, Clock, Droplets, Flame, MapPin, Wind, Zap } from "lucide-react";

const coverageStats = [
  { icon: Building2, value: "32+", label: "London boroughs" },
  { icon: Zap, value: "540+", label: "Jobs yearly" },
  { icon: Clock, value: "Fast", label: "Local response" },
];

const serviceDetails = [
  {
    icon: Droplets,
    title: "Plumbing",
    description: "Leak tracing, pipe repairs, taps, toilets, pumps, bathrooms, and emergency call-outs.",
  },
  {
    icon: Flame,
    title: "Heating & boilers",
    description: "Gas Safe repairs, servicing, installations, power flushing, radiators, and controls.",
  },
  {
    icon: Wind,
    title: "Air conditioning",
    description: "F-Gas certified installation, maintenance, repairs, refrigerant checks, and support.",
  },
];

export function LondonMapSection() {
  return (
    <section id="service-area" className="relative overflow-hidden bg-[#f7f5ef] px-4 py-20 dark:bg-background sm:px-6 lg:px-12 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_24%,rgba(249,115,22,0.13),transparent_36%),linear-gradient(135deg,#ffffff_0%,#f3eee3_52%,#e5edf1_100%)] dark:bg-[radial-gradient(ellipse_at_72%_24%,rgba(249,115,22,0.16),transparent_36%),linear-gradient(135deg,rgba(15,23,42,0.96)_0%,rgba(20,28,42,0.98)_52%,rgba(8,13,23,1)_100%)]" />

      <div className="relative z-10 mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <div className="relative">
          <div className="absolute -left-16 top-16 h-56 w-56 rounded-full bg-orange-400/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/65 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl sm:p-8 dark:border-white/10 dark:bg-slate-950/45">
            <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="relative">
              <div className="mb-7 flex items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-orange-700 dark:text-orange-300">
                  <MapPin className="h-3.5 w-3.5" />
                  Greater London coverage
                </div>
                <div className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                  Live
                </div>
              </div>

              <div className="max-w-xl">
                <p className="mb-3 text-xs font-mono uppercase tracking-[0.28em] text-muted-foreground">LCS / Coverage matrix</p>
                <h2 className="text-4xl font-black leading-[0.98] tracking-tight text-foreground sm:text-5xl">
                  London coverage that <span className="text-orange-600">moves with you.</span>
                </h2>
                <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
                  Gas Safe and F-Gas registered engineers for urgent repairs, planned installations, and practical maintenance across Greater London.
                </p>
              </div>

              <div className="mt-7 grid grid-cols-3 gap-2">
                {coverageStats.map(({ icon: Icon, value, label }) => (
                  <div key={label} className="rounded-2xl border border-border/70 bg-background/70 p-3 shadow-sm">
                    <Icon className="mb-3 h-4 w-4 text-orange-600" />
                    <div className="text-xl font-black tracking-tight text-foreground">{value}</div>
                    <div className="mt-1 text-[9px] font-bold uppercase leading-4 tracking-wide text-muted-foreground">{label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-7">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">What we cover</span>
                  <span className="text-[10px] font-mono text-muted-foreground">03 SYSTEMS</span>
                </div>
                <div className="grid gap-2">
                  {serviceDetails.map(({ icon: Icon, title, description }) => (
                    <article key={title} className="group flex min-w-0 items-center gap-3 rounded-2xl border border-border/70 bg-background/60 p-3 transition-colors hover:border-orange-500/40 hover:bg-orange-500/5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm font-bold text-foreground">{title}</h3>
                        <p className="truncate text-xs leading-5 text-muted-foreground">{description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border/70 pt-4 text-[10px] font-mono uppercase tracking-[0.16em] text-muted-foreground">
                <span>Gas Safe + F-Gas registered</span>
                <span className="text-orange-600">32+ boroughs online</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[760px]">
          <div className="absolute -inset-6 rounded-[44px] bg-gradient-to-br from-orange-500/20 via-cyan-500/10 to-transparent blur-2xl" />
          <div className="relative h-[440px] overflow-hidden rounded-[36px] border border-border bg-black shadow-2xl sm:h-[560px] lg:h-[680px]">
            <MouseDotConstellation />
          </div>
        </div>
      </div>
    </section>
  );
}