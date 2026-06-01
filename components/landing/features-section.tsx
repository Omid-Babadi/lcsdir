"use client";

import { useEffect, useRef, useState } from "react";
import { Droplets, Flame, Zap } from "lucide-react";
import Image from "next/image";
import featuresImage from "../../public/61940140-5a44-4fb5-ad08-08b4dbc86e8b.png";

const services = [
  {
    icon: Droplets,
    title: "Plumbing",
    description:
      "Burst pipes, blocked drains, leak repairs, bathroom installations and full plumbing system overhauls. Gas Safe registered engineers.",
    highlights: ["Emergency leak repair", "Bathroom fitting", "Drain unblocking", "Pipe replacement"],
  },
  {
    icon: Flame,
    title: "Heating & Boilers",
    description:
      "Boiler installations, servicing and emergency repairs for all major brands. Central heating power-flushing, radiator upgrades and underfloor heating.",
    highlights: ["Boiler installation", "Annual servicing", "Central heating", "Underfloor heating"],
  },
  {
    icon: Zap,
    title: "Air Conditioning",
    description:
      "Professional air conditioning installation, maintenance and emergency repairs. F-Gas certified engineers ensuring optimal performance and energy efficiency.",
    highlights: ["AC installation", "Regular maintenance", "Emergency repairs", "Energy efficient"],
  },
];

function ServiceCard({
  service,
  index,
  isVisible,
}: {
  service: (typeof services)[0];
  index: number;
  isVisible: boolean;
}) {
  const [isActive, setIsActive] = useState(index === 0);
  const Icon = service.icon;

  return (
    <div
      className={`group relative p-6 border-l-2 cursor-pointer transition-all duration-500 ${
        isActive
          ? "border-l-blue-500 bg-blue-500/[0.04]"
          : "border-l-border hover:border-l-blue-400/50 hover:bg-blue-500/[0.02]"
      } ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onClick={() => setIsActive(!isActive)}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg transition-colors duration-300 ${
            isActive
              ? "bg-blue-500 text-white"
              : "bg-blue-500/10 text-blue-600 group-hover:bg-blue-500/20"
          }`}
        >
          <Icon className="w-5 h-5" />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-display text-foreground mb-1">{service.title}</h3>
          <p className="text-sm text-foreground/60 leading-relaxed">{service.description}</p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2 mt-4">
            {service.highlights.map((item) => (
              <span
                key={item}
                className="text-xs font-mono px-2.5 py-1 bg-blue-500/5 text-blue-600 rounded-full border border-blue-200/30"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section id="services" ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT — Header + Service Cards */}
          <div>
            {/* Header */}
            <div className="mb-10">
              <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                <span className="w-8 h-px bg-gradient-to-r from-blue-500 to-blue-400" />
                Our services
              </span>
              <h2
                className={`text-4xl lg:text-5xl font-display tracking-tight text-foreground transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Complete property care
                <br />
                <span className="text-primary">under one roof.</span>
              </h2>
              <p
                className={`mt-4 text-base text-foreground/70 leading-relaxed transition-all duration-700 delay-100 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                From a dripping tap to a full renovation, our qualified engineers and
                tradespeople deliver reliable results with transparent pricing.
              </p>
            </div>

            {/* Service Cards */}
            <div className="flex flex-col gap-3">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  service={service}
                  index={index}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>

          {/* RIGHT — Image */}
          <div
            className={`relative transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Decorative background accent */}
            <div className="absolute -inset-4 rounded-2xl bg-blue-500/5 -z-10" />
            <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl -z-10" />

            {/* Image container */}
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl aspect-[4/5] lg:aspect-[2.5/4]">
              <Image
                src="/61940140-5a44-4fb5-ad08-08b4dbc86e8b.png" // ← replace with your actual image path
                alt="Our engineers at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw h-auto"
              />

              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />

              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-background/90 backdrop-blur-sm border border-border/50 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium text-foreground">Available for emergencies</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
