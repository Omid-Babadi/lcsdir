"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, Phone, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal, SoftFloat } from "@/components/landing/motion-primitives";
import { useLondonAvailability } from "@/components/landing/use-london-availability";

export function CtaSection() {
  const isAvailable = useLondonAvailability();

  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400/10 blur-[100px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#0a1220] text-white shadow-2xl shadow-slate-950/20 sm:rounded-[2.75rem]">
            <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:48px_48px]" />
            <div className="grid min-h-[650px] lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative z-10 flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
                <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-300">
                  <span className="relative flex h-1.5 w-1.5">
                    {isAvailable && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400" />
                    )}
                    <span
                      className={
                        "relative inline-flex h-1.5 w-1.5 rounded-full " +
                        (isAvailable ? "bg-emerald-400" : "bg-orange-400")
                      }
                    />
                  </span>
                  {isAvailable ? "Engineers available now" : "Appointments available"}
                </span>

                <h2 className="max-w-2xl text-4xl font-display leading-[0.96] tracking-tight sm:text-5xl lg:text-7xl">
                  Let&apos;s make your property
                  <span className="text-orange-400"> feel right again.</span>
                </h2>

                <p className="mt-6 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
                  Tell us what is happening and we will help you find the right
                  next step—whether it is an urgent repair or a planned upgrade.
                </p>

                <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs text-white/55 sm:text-sm">
                  <span className="inline-flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    Clear upfront pricing
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-sky-400" />
                    Certified engineers
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock3 className="h-4 w-4 text-orange-400" />
                    Fast London response
                  </span>
                </div>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="h-14 rounded-full bg-orange-500 px-7 text-base font-semibold text-white shadow-lg shadow-orange-950/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-400"
                  >
                    <Link href="/contact">
                      Book an engineer
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-14 rounded-full border-white/15 bg-white/[0.04] px-7 text-base text-white hover:bg-white/10 hover:text-white"
                  >
                    <a href="tel:07473423003">
                      <Phone className="mr-2 h-4 w-4" />
                      07473 423003
                    </a>
                  </Button>
                </div>

                <p className="mt-7 text-xs font-mono text-white/35">
                  No hidden fees. We agree the work before we begin.
                </p>
              </div>

              <div className="relative min-h-[440px] overflow-hidden lg:min-h-full">
                <Image
                  src="/0da77d91-da19-48b6-8765-a8db8e3b79dd.jpg"
                  alt="London Climate Systems engineer carrying out a service"
                  fill
                  className="object-cover object-center transition-transform duration-[1400ms] hover:scale-[1.035]"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a1220]/10 via-transparent to-[#0a1220]/55 lg:bg-gradient-to-r lg:from-[#0a1220] lg:via-[#0a1220]/15 lg:to-transparent" />

                <SoftFloat className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8" distance={6}>
                  <div className="rounded-2xl border border-white/15 bg-black/40 px-5 py-4 shadow-2xl backdrop-blur-xl">
                    <div className="flex items-center gap-3">
                      <span
                        className={
                          "h-2.5 w-2.5 rounded-full " +
                          (isAvailable ? "bg-emerald-400" : "bg-orange-400")
                        }
                      />
                      <div>
                        <p className="text-sm font-semibold">
                          {isAvailable ? "Available today" : "Book your next visit"}
                        </p>
                        <p className="mt-0.5 text-[11px] text-white/50">
                          Mon–Fri 8am–6pm · Sat 8am–3pm
                        </p>
                      </div>
                    </div>
                  </div>
                </SoftFloat>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
