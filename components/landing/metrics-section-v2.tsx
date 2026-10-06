import { ArrowUpRight, Sparkles } from "lucide-react";

import { Reveal } from "@/components/landing/motion-primitives";

const metrics = [
  { value: "Greater London", label: "Service coverage" },
  { value: "Mon–Sat", label: "Appointment availability" },
  { value: "5", label: "Core service categories" },
  { value: "2026", label: "Company incorporated" },
];

export function MetricsSection() {
  return (
    <section className="relative px-3 py-10 sm:px-5 lg:px-8 lg:py-14">
      <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[2rem] bg-orange-500 px-5 py-16 text-slate-950 shadow-2xl shadow-orange-950/15 sm:rounded-[2.75rem] sm:px-8 lg:px-12 lg:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 -top-40 h-96 w-96 rounded-full bg-yellow-200/35 blur-[90px]" />
          <div className="absolute -bottom-48 -left-32 h-[28rem] w-[28rem] rounded-full bg-red-600/20 blur-[110px]" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_center,black_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        <div className="relative mx-auto max-w-[1300px]">
          <div className="mb-12 flex flex-col gap-7 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/20 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em]">
                <Sparkles className="h-3.5 w-3.5" />
                At a glance
              </span>
              <h2 className="max-w-3xl text-4xl font-display leading-[0.96] tracking-tight sm:text-5xl lg:text-6xl">
                Clear facts.
                <span className="text-white"> Local service.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="max-w-sm text-sm leading-6 text-slate-900/65 sm:text-base">
                Practical heating, cooling, plumbing, boiler and gas support for
                homes, landlords and businesses across Greater London.
              </p>
            </Reveal>
          </div>

          <div className="grid overflow-hidden rounded-[1.75rem] border border-black/10 bg-white/15 backdrop-blur-sm sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <Reveal
                key={metric.label}
                delay={index * 0.07}
                className="h-full border-b border-black/10 last:border-b-0 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(3)]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <div className="group flex h-full min-h-52 flex-col justify-between p-6 transition-colors duration-500 hover:bg-white/20 sm:p-7">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-slate-900/55 transition-transform duration-300 group-hover:-rotate-12">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-3xl font-display tracking-tight sm:text-4xl">
                      {metric.value}
                    </p>
                    <p className="mt-3 max-w-[12rem] text-sm leading-5 text-slate-900/60">
                      {metric.label}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
