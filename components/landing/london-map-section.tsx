"use client";

import { useEffect, useRef } from "react";
import { Building2, Clock, Droplets, Flame, MapPin, ShieldCheck, Wind, Zap } from "lucide-react";

const coverageStats = [
  { icon: Building2, value: "32+", label: "London boroughs" },
  { icon: Zap, value: "540+", label: "Jobs yearly" },
  { icon: Clock, value: "Fast", label: "Local response" },
];

const serviceDetails = [
  {
    icon: Droplets,
    title: "Plumbing",
    description: "Leak tracing, pipe repairs, taps, toilets, pumps, bathrooms, and emergency plumbing call-outs.",
  },
  {
    icon: Flame,
    title: "Heating & boilers",
    description: "Gas Safe boiler repairs, servicing, installations, power flushing, radiators, and heating controls.",
  },
  {
    icon: Wind,
    title: "Air conditioning",
    description: "F-Gas certified AC installation, maintenance, repairs, refrigerant checks, and cooling support.",
  },
];

function usePlayOnceOnView() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    video.loop = false;
    video.muted = true;
    video.playsInline = true;
    video.pause();
    video.currentTime = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasPlayedRef.current) return;

        hasPlayedRef.current = true;
        video.currentTime = 0;
        void video.play().catch(() => undefined);
        observer.disconnect();
      },
      { threshold: 0.45 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return { sectionRef, videoRef };
}

export function LondonMapSection() {
  const { sectionRef, videoRef } = usePlayOnceOnView();

  return (
    <section ref={sectionRef} id="service-area" className="relative overflow-hidden bg-[#f7f5ef] px-4 py-20 dark:bg-background sm:px-6 lg:px-12 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_24%,rgba(249,115,22,0.13),transparent_36%),linear-gradient(135deg,#ffffff_0%,#f3eee3_52%,#e5edf1_100%)] dark:bg-[radial-gradient(ellipse_at_72%_24%,rgba(249,115,22,0.16),transparent_36%),linear-gradient(135deg,rgba(15,23,42,0.96)_0%,rgba(20,28,42,0.98)_52%,rgba(8,13,23,1)_100%)]" />

      <div className="relative z-10 mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-card/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary shadow-sm backdrop-blur">
            <MapPin className="h-3.5 w-3.5" />
            Greater London coverage
          </div>

          <h2 className="max-w-xl text-4xl font-black leading-[1.02] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Local engineers across London, ready when your property needs them.
          </h2>

          <div className="mt-6 max-w-2xl space-y-4 text-base leading-8 text-muted-foreground">
            <p>
              London Climate Systems supports homes, landlords, and businesses with heating, plumbing, boiler, gas, and air conditioning services across Greater London. From urgent leaks and no-heating calls to planned installations and maintenance, our engineers keep the work clear, tidy, and practical.
            </p>
            <p>
              We combine Gas Safe and F-Gas registered expertise with straightforward communication, fair pricing, and careful workmanship, so you know what is happening before work begins and what has been completed before we leave.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {coverageStats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="rounded-2xl border border-border/70 bg-card/80 p-4 text-center shadow-sm backdrop-blur">
                <Icon className="mx-auto mb-2 h-4 w-4 text-orange-600" />
                <div className="text-xl font-black text-foreground">{value}</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {serviceDetails.map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-2xl border border-border/70 bg-card/75 p-5 shadow-sm backdrop-blur">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-medium text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[760px]">
          <div className="absolute -inset-6 rounded-[44px] bg-gradient-to-br from-orange-500/20 via-cyan-500/10 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[36px] border border-border bg-black shadow-2xl">
            <video
              ref={videoRef}
              className="aspect-[4/5] h-auto w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
              src="/animation.mp4"
              muted
              playsInline
              preload="metadata"
              aria-label="London Climate Systems service coverage video"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <ShieldCheck className="h-4 w-4 text-orange-400" />
                Certified engineers for London homes and businesses
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}