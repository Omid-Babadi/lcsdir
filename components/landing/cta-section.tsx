"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Clock,
  Star,
} from "lucide-react";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);

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

  useEffect(() => {
    const checkAvailability = () => {
      const londonTime = new Date(
        new Date().toLocaleString("en-GB", {
          timeZone: "Europe/London",
        })
      );

      const day = londonTime.getDay(); // 0=Sun, 1=Mon ... 6=Sat
      const hours = londonTime.getHours();
      const minutes = londonTime.getMinutes();

      const currentMinutes = hours * 60 + minutes;

      let available = false;

      // Monday-Friday 08:00-18:00
      if (day >= 1 && day <= 5) {
        available =
          currentMinutes >= 8 * 60 &&
          currentMinutes < 18 * 60;
      }

      // Saturday 08:00-15:00
      if (day === 6) {
        available =
          currentMinutes >= 8 * 60 &&
          currentMinutes < 15 * 60;
      }

      setIsAvailable(available);
    };

    checkAvailability();

    const interval = setInterval(checkAvailability, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`relative border-2 border-primary bg-primary/[0.02] transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Accent corners */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-secondary -translate-x-px -translate-y-px z-10" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-secondary translate-x-px -translate-y-px z-10" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-secondary -translate-x-px translate-y-px z-10" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-secondary translate-x-px translate-y-px z-10" />

          <div className="grid lg:grid-cols-2 items-stretch">
            {/* LEFT */}
            <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-24 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 border border-secondary/30 bg-secondary/5 rounded-full px-3 py-1.5 mb-8 self-start">
                <Star className="w-3.5 h-3.5 text-secondary fill-secondary" />
                <span className="text-xs font-mono text-secondary/80 tracking-wide">
                  4.9 · 500+ reviews
                </span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-display tracking-tight text-foreground mb-6 leading-[0.95]">
                Need help with your
                <br />
                <span className="text-primary">
                  property today?
                </span>
              </h2>

              <p className="text-lg text-foreground/70 mb-8 leading-relaxed max-w-xl">
                Whether it's an emergency repair or a planned renovation,
                our team is ready. Book online or call us directly for
                immediate assistance.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  {
                    icon: Clock,
                    label: "15 min response",
                  },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-1.5 bg-foreground/[0.04] border border-border rounded-full px-3 py-1.5"
                  >
                    <Icon className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs font-mono text-foreground/60">
                      {label}
                    </span>
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
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-base rounded-full border-secondary text-secondary hover:bg-secondary/5"
                >
                  <a href="tel:07473423003">
                    <Phone className="w-4 h-4 mr-2" />
                    07473 423003
                  </a>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-8 font-mono">
                No hidden fees. Clear pricing before work
                starts.
              </p>
            </div>

            {/* RIGHT */}
            <div className="relative hidden lg:block overflow-hidden">
              <img
                src="0da77d91-da19-48b6-8765-a8db8e3b79dd.jpg"
                alt="Professional engineer at work"
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

              {/* Availability Card */}
              <div className="absolute bottom-8 right-8 bg-background/90 backdrop-blur-md border border-border rounded-2xl px-5 py-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        isAvailable
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    />

                    {isAvailable && (
                      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-40" />
                    )}
                  </div>

                  <div>
                    <p
                      className={`text-sm font-semibold ${
                        isAvailable
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {isAvailable
                        ? "Available Now"
                        : "Currently Unavailable"}
                    </p>

                    <p className="text-xs text-muted-foreground font-mono">
                      Mon–Fri 8am–6pm • Sat 8am–3pm
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* END RIGHT */}
          </div>
        </div>
      </div>
    </section>
  );
}