"use client";

import { useEffect, useRef, useState } from "react";
import { Clock, ShieldCheck, BadgePoundSterling, Award, HeadphonesIcon, CalendarCheck } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "15-Minute Response",
    description:
      "Emergency? Our engineers are dispatched within 15 minutes. Swift response to get your property back to comfort.",
  },
  {
    icon: BadgePoundSterling,
    title: "Fixed Upfront Pricing",
    description:
      "No call-out charges, no hidden fees. We quote before we start so you know exactly what you are paying.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Certified",
    description:
      "Gas Safe, NICEIC, and CIPHE registered. Every engineer carries identification and proof of qualifications.",
  },
  {
    icon: Award,
    title: "Installation Workmanship",
    description:
      "Installation work is completed with careful commissioning, clear sign-off, and written aftercare details.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description:
      "A named project coordinator for every job. One point of contact from booking to completion.",
  },
  {
    icon: CalendarCheck,
    title: "Same-Day Availability",
    description:
      "Book online or call us and we will get an engineer to you today. Evening and weekend slots available.",
  },
];

export function WhyUsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-primary text-primary-foreground overflow-hidden"
    >
      {/* Diagonal pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            currentColor 40px,
            currentColor 41px
          )`,
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-primary-foreground/60 mb-6">
            <span className="w-8 h-px bg-primary-foreground/30" />
            Why choose us
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Trusted by thousands
            <br />
            <span className="text-primary-foreground/60">of London homeowners.</span>
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className={`group p-8 border border-primary-foreground/10 hover:border-primary-foreground/25 hover:bg-primary-foreground/5 transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg border border-primary-foreground/15 mb-6 group-hover:bg-primary-foreground group-hover:text-primary transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-display mb-2">{reason.title}</h3>
                <p className="text-primary-foreground/70 leading-relaxed text-sm">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Certifications bar */}
        <div className="mt-16 pt-12 border-t border-primary-foreground/10 flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {["Gas Safe Registered", "NICEIC Approved", "Valuable Member", "TrustMark", "Which? Trusted Trader"].map(
            (cert) => (
              <span
                key={cert}
                className="font-mono text-xs tracking-widest text-primary-foreground/40 uppercase"
              >
                {cert}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
