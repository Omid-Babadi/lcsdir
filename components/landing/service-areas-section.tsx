"use client";

import { useEffect, useState, useRef } from "react";
import { MapPin } from "lucide-react";

const areas = [
  { name: "Central London", boroughs: "Westminster, City, Kensington & Chelsea" },
  { name: "North London", boroughs: "Camden, Islington, Haringey, Barnet" },
  { name: "South London", boroughs: "Lambeth, Southwark, Lewisham, Croydon" },
  { name: "East London", boroughs: "Tower Hamlets, Hackney, Newham, Barking" },
  { name: "West London", boroughs: "Hammersmith, Ealing, Hounslow, Richmond" },
  { name: "Greater London", boroughs: "Hertfordshire, Surrey, Essex borders" },
];

export function ServiceAreasSection() {
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
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 lg:mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-primary" />
            Coverage
            <span className="w-8 h-px bg-primary" />
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight text-foreground mb-6">
            Serving all of
            <br />
            <span className="text-primary">Greater London.</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Our engineers are based across the city for fast local response.
            Same-day service available in all areas listed below.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <div
              key={area.name}
              className={`group p-8 border border-border hover:border-primary/30 hover:bg-primary/[0.02] transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-display text-foreground mb-1 group-hover:translate-x-1 transition-transform duration-300">
                    {area.name}
                  </h3>
                  <p className="text-sm text-foreground/60">{area.boroughs}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-12 text-center text-sm text-muted-foreground">
          Don&apos;t see your area?{" "}
          <a
            href="/contact"
            className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
          >
            Get in touch
          </a>{" "}
          &mdash; we may still be able to help.
        </p>
      </div>
    </section>
  );
}
