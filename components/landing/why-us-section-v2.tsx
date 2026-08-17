"use client";

import {
  Award,
  BadgePoundSterling,
  CalendarCheck,
  Clock3,
  Headphones,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Reveal } from "@/components/landing/motion-primitives";

const reasons = [
  {
    icon: Clock3,
    title: "Rapid response",
    description:
      "When something goes wrong, we move quickly and keep you informed from the first call.",
    accent: "text-orange-300 bg-orange-400/10",
  },
  {
    icon: BadgePoundSterling,
    title: "Clear pricing",
    description:
      "You approve the price before work begins, with no surprise call-out charges added later.",
    accent: "text-emerald-300 bg-emerald-400/10",
  },
  {
    icon: ShieldCheck,
    title: "Certified expertise",
    description:
      "Qualified engineers, careful diagnostics, and work completed to the relevant safety standards.",
    accent: "text-sky-300 bg-sky-400/10",
  },
  {
    icon: Award,
    title: "Work built to last",
    description:
      "Thoughtful installation, proper commissioning, and practical aftercare for long-term confidence.",
    accent: "text-violet-300 bg-violet-400/10",
  },
  {
    icon: Headphones,
    title: "Human support",
    description:
      "A helpful point of contact from booking through completion, without the runaround.",
    accent: "text-rose-300 bg-rose-400/10",
  },
  {
    icon: CalendarCheck,
    title: "Flexible appointments",
    description:
      "Convenient weekday and weekend options designed around busy London homes and businesses.",
    accent: "text-cyan-300 bg-cyan-400/10",
  },
];

const credentials = [
  "Gas Safe registered",
  "F-Gas certified",
  "City & Guilds",
  "G3 qualified",
  "MCS certified",
];

export function WhyUsSection() {
  return (
    <section id="why-us" className="relative px-3 py-8 sm:px-5 lg:px-8 lg:py-12">
      <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[2rem] bg-[#09111f] px-5 py-20 text-white shadow-2xl shadow-slate-950/15 sm:rounded-[2.75rem] sm:px-8 lg:px-12 lg:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-[-8rem] h-96 w-96 rounded-full bg-orange-500/20 blur-[110px]" />
          <div className="absolute -right-20 bottom-[-10rem] h-[28rem] w-[28rem] rounded-full bg-sky-500/15 blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:48px_48px]" />
        </div>

        <div className="relative mx-auto max-w-[1300px]">
          <div className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <Reveal>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-300">
                <Sparkles className="h-3.5 w-3.5" />
                The LCS difference
              </span>
              <h2 className="max-w-3xl text-4xl font-display leading-[0.98] tracking-tight sm:text-5xl lg:text-7xl">
                Good service should feel
                <span className="text-orange-400"> refreshingly simple.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.12} className="lg:pb-1">
              <p className="max-w-xl text-base leading-7 text-white/60 sm:text-lg">
                Skilled people, straightforward communication, and respect for
                your property. That is how we approach every visit.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <Reveal key={reason.title} delay={index * 0.06}>
                  <article className="group relative h-full overflow-hidden rounded-[1.6rem] border border-white/[0.08] bg-white/[0.045] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.075] sm:p-7">
                    <span className="absolute right-5 top-5 font-mono text-[10px] tracking-[0.2em] text-white/25">
                      0{index + 1}
                    </span>
                    <div
                      className={
                        "mb-8 flex h-11 w-11 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105 " +
                        reason.accent
                      }
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 text-xl font-display">{reason.title}</h3>
                    <p className="text-sm leading-6 text-white/55">
                      {reason.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.18}>
            <div className="mt-12 flex flex-col gap-5 rounded-[1.5rem] border border-white/[0.08] bg-white/[0.04] px-5 py-5 sm:flex-row sm:items-center sm:justify-between lg:mt-16 lg:px-7">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Qualified and accountable</p>
                  <p className="text-xs text-white/45">Credentials you can verify</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {credentials.map((credential) => (
                  <span
                    key={credential}
                    className="text-[10px] font-mono uppercase tracking-[0.16em] text-white/45"
                  >
                    {credential}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
