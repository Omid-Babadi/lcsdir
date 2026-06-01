"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "Our boiler broke down on Christmas Eve. LCS had an engineer at our door within 30 minutes and had us up and running by lunchtime. Absolute lifesavers.",
    author: "Sarah M.",
    role: "Homeowner",
    area: "Islington, N1",
    metric: "30 min response",
  },
  {
    quote:
      "The air conditioning installation in our office was perfectly executed. The team was professional, clean, and the system works flawlessly. Highly recommend their AC services.",
    author: "Emma & David K.",
    role: "Business Owners",
    area: "Shoreditch, EC2",
    metric: "AC Installation",
  },
  {
    quote:
      "As a letting agent I need reliable engineers I can trust. LCS handle all our boiler maintenance and heating service across 40+ properties without a single complaint.",
    author: "Michael Chen",
    role: "Property Manager",
    area: "Kensington, W8",
    metric: "40+ properties managed",
  },
  {
    quote:
      "Our heating system needed a complete overhaul. Their Gas Safe engineers explained everything clearly, finished on time, and our new boiler is running perfectly. Excellent service.",
    author: "Robert P.",
    role: "Homeowner",
    area: "Finchley, N3",
    metric: "Boiler replacement",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const active = testimonials[activeIndex];

  return (
    <section id="reviews" className="relative py-32 lg:py-40 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Customer reviews
          </span>
          <div className="flex-1 h-px bg-border" />
          <span className="font-mono text-xs text-muted-foreground">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(testimonials.length).padStart(2, "0")}
          </span>
        </div>

        {/* Main Quote */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-8">
            <blockquote
              className={`transition-all duration-300 ${
                isAnimating
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <p className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight text-foreground">
                &ldquo;{active.quote}&rdquo;
              </p>
            </blockquote>

            {/* Author */}
            <div
              className={`mt-12 flex items-center gap-6 transition-all duration-300 delay-100 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="font-display text-xl text-primary">
                  {active.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-base font-medium text-foreground">
                  {active.author}
                </p>
                <p className="text-sm text-foreground/60">
                  {active.role}, {active.area}
                </p>
              </div>
            </div>
          </div>

          {/* Metric Highlight */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div
              className={`p-8 border border-border transition-all duration-300 ${
                isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-4">
                Key Result
              </span>
              <p className="font-display text-2xl md:text-3xl text-primary">
                {active.metric}
              </p>
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setActiveIndex(idx);
                      setIsAnimating(false);
                    }, 300);
                  }}
                  className={`h-2 transition-all duration-300 rounded-full ${
                    idx === activeIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-primary/20 hover:bg-primary/40"
                  }`}
                  aria-label={`View testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
