"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, ShieldCheck, Clock, Star } from "lucide-react";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`relative border-2 border-primary bg-primary/[0.02] transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Accent corners */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-secondary -translate-x-px -translate-y-px z-10" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-secondary translate-x-px -translate-y-px z-10" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-secondary -translate-x-px translate-y-px z-10" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-secondary translate-x-px translate-y-px z-10" />

          {/* Two-col grid: text left, image right */}
          <div className="grid lg:grid-cols-2 items-stretch">

            {/* Left: text content */}
            <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-24 flex flex-col justify-center">
              {/* Trust badge */}
              <div className="inline-flex items-center gap-2 border border-secondary/30 bg-secondary/5 rounded-full px-3 py-1.5 mb-8 self-start">
                <Star className="w-3.5 h-3.5 text-secondary fill-secondary" />
                <span className="text-xs font-mono text-secondary/80 tracking-wide">4.9 · 1,200+ reviews</span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-display tracking-tight text-foreground mb-6 leading-[0.95]">
                Need help with your
                <br />
                <span className="text-primary">property today?</span>
              </h2>

              <p className="text-lg text-foreground/70 mb-8 leading-relaxed max-w-xl">
                Whether it is an emergency repair or a planned renovation, our
                team is ready. Book online or call us directly for immediate
                assistance.
              </p>

              {/* Trust micro-badges */}
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  { icon: ShieldCheck, label: "No call-out charges" },
                  { icon: Clock,       label: "15 min response"     },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-1.5 bg-foreground/[0.04] border border-border rounded-full px-3 py-1.5"
                  >
                    <Icon className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs font-mono text-foreground/60">{label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-base rounded-full group"
                >
                  <Link href="/contact">
                    Book Appointment
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-base rounded-full border-secondary text-secondary hover:bg-secondary/5"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +44 (0) 20 1234 5678
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-8 font-mono">
                No call-out charges. No hidden fees. Clear pricing before work starts.
              </p>
            </div>

            {/* Right: image panel */}
            <div className="relative hidden lg:block overflow-hidden">
              {/* Photo — London engineer / plumber at work */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="0da77d91-da19-48b6-8765-a8db8e3b79dd.jpg"
                alt="Professional engineer at work"
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="lazy"
              />

              {/* Gradient fade into section bg on the left edge */}
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/10 to-transparent" />
              {/* Subtle bottom fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

              {/* Floating availability card */}
              <div className="absolute bottom-8 right-8 bg-background/90 backdrop-blur-md border border-border rounded-2xl px-5 py-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-40" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Available Now</p>
                    <p className="text-xs text-muted-foreground font-mono">Engineers nearby</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
