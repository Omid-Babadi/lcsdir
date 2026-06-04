"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const gallery = [
  {
    title: "Professional Plumbing",
    description: "Expert pipe installation and repairs",
    tag: "Plumbing",
    href: "/services/plumbing",
    image: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780152596/f45630b6-40eb-4159-a07a-fc92a3c150ca_lzsr9l.png",
  },
  {
    title: "Heating Solutions",
    description: "Boiler servicing and maintenance",
    tag: "Heating",
    href: "/services/heating",
    image: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780596428/778fe9d6-3e3c-44ad-97be-8ea81bc5c207_1_tlfl7g.png",
  },
  {
    title: "Air Conditioning",
    description: "AC installation and support",
    tag: "AC / Cooling",
    href: "/services/air-conditioning",
    image: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780152492/34099101-d86a-4df8-8407-80a982a4bfd7_olrfal.png",
  },
  {
    title: "Boiler repairs",
    description: "boiler breakdown repairs and emergency service",
    tag: "Boiler",
    href: "/services/boiler/breakdown-repairs",
    image: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780152492/d33b7dda-c697-41fe-91a6-e7b5f553262d_jbtmt6.png",
  },
];

export function GallerySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 px-6 lg:px-12 bg-background border-t border-border"
    >
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <div className="mb-16 lg:mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-foreground/60 mb-6">
              <span className="w-8 h-px gradient-flame" />
              Our Work
            </span>
            <h2
              className={`text-4xl lg:text-6xl font-display tracking-tight leading-[0.95] transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Trusted by thousands of
              <br />
              London homeowners.
            </h2>
          </div>
          <p
            className={`text-foreground/50 text-sm max-w-xs leading-relaxed transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Every project completed to the highest standard — browse a selection of our recent work across London.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {gallery.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3] transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className={`object-cover transition-transform duration-700 ease-out ${
                  hovered === index ? "scale-110" : "scale-100"
                }`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Always-on dark base gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Hover overlay */}
              <div
                className={`absolute inset-0 bg-primary/20 transition-opacity duration-300 ${
                  hovered === index ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Tag — top left */}
              <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center bg-black/50 backdrop-blur-sm border border-white/10 text-white/80 text-[10px] font-mono tracking-widest uppercase rounded-full px-2.5 py-1">
                  {item.tag}
                </span>
              </div>

              {/* Arrow icon — top right, appears on hover */}
              <div
                className={`absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-primary flex items-center justify-center transition-all duration-300 ${
                  hovered === index ? "opacity-100 scale-100" : "opacity-0 scale-75"
                }`}
              >
                <ArrowUpRight className="w-4 h-4 text-primary-foreground" />
              </div>

              {/* Bottom text */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <h3 className="text-xl font-display text-white leading-tight mb-1">
                  {item.title}
                </h3>
                <p
                  className={`text-white/60 text-sm font-mono transition-all duration-300 ${
                    hovered === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
