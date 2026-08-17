"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/landing/motion-primitives";
import { cn } from "@/lib/utils";

const enhanceProjectImage = (url: string) =>
  url.replace(
    "/image/upload/",
    "/image/upload/f_auto,q_auto:best,dpr_auto,w_1800/"
  );

const projects = [
  {
    title: "Professional plumbing",
    description: "Precise pipework, repairs, and installations made to perform.",
    tag: "Plumbing",
    href: "/services/plumbing",
    image: enhanceProjectImage(
      "https://res.cloudinary.com/daucwpsi8/image/upload/v1780152596/f45630b6-40eb-4159-a07a-fc92a3c150ca_lzsr9l.png"
    ),
    layout: "min-h-[420px] lg:col-span-7 lg:row-span-2 lg:min-h-[600px]",
    imagePosition: "object-[center_42%]",
    sizes: "(max-width: 1024px) 100vw, 58vw",
    fit: "cover",
  },
  {
    title: "Heating solutions",
    description: "Reliable comfort through every London winter.",
    tag: "Heating",
    href: "/services/heating",
    image: enhanceProjectImage(
      "https://res.cloudinary.com/daucwpsi8/image/upload/v1780596428/778fe9d6-3e3c-44ad-97be-8ea81bc5c207_1_tlfl7g.png"
    ),
    layout: "min-h-[360px] lg:col-span-5 lg:min-h-0",
    imagePosition: "object-[center_38%]",
    sizes: "(max-width: 1024px) 100vw, 42vw",
    fit: "cover",
  },
  {
    title: "Air conditioning",
    description: "Quiet cooling, designed around the way you use your space.",
    tag: "Cooling",
    href: "/services/air-conditioning",
    image: enhanceProjectImage(
      "https://res.cloudinary.com/daucwpsi8/image/upload/v1780152492/34099101-d86a-4df8-8407-80a982a4bfd7_olrfal.png"
    ),
    layout: "min-h-[360px] lg:col-span-5 lg:min-h-0",
    imagePosition: "object-[center_32%]",
    sizes: "(max-width: 1024px) 100vw, 42vw",
    fit: "cover",
  },
  {
    title: "Boiler care",
    description: "Diagnostics and repairs that bring the heat back quickly.",
    tag: "Boilers",
    href: "/services/boiler/breakdown-repairs",
    image: enhanceProjectImage(
      "https://res.cloudinary.com/daucwpsi8/image/upload/v1780152492/d33b7dda-c697-41fe-91a6-e7b5f553262d_jbtmt6.png"
    ),
    layout: "min-h-[460px] lg:col-span-12 lg:row-span-2 lg:min-h-0",
    imagePosition: "object-[center_30%]",
    sizes: "(max-width: 1024px) 100vw, 92vw",
    fit: "cover",
  },
];

export function GallerySection() {
  return (
    <section id="projects" className="relative overflow-hidden py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <div className="mb-12 flex flex-col gap-7 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/[0.07] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-700 dark:text-sky-300">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
              Recent work
            </span>
            <h2 className="max-w-3xl text-4xl font-display leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl">
              Craft you can see.
              <span className="text-muted-foreground"> Comfort you can feel.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 text-sm font-semibold text-foreground"
            >
              Plan your project
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-white">
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-4 lg:grid-cols-12 lg:auto-rows-[292px]">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 0.06}
              className={project.layout}
            >
              <Link
                href={project.href}
                className="group relative block h-full overflow-hidden rounded-[1.75rem] bg-slate-900"
              >
                {project.fit === "contain" && (
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    aria-hidden="true"
                    className="scale-110 object-cover opacity-45 blur-2xl"
                    sizes={project.sizes}
                  />
                )}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={cn(
                    "transition-transform duration-[1200ms] ease-out",
                    project.fit === "contain"
                      ? "object-contain group-hover:scale-[1.015]"
                      : "object-cover group-hover:scale-[1.04]",
                    project.imagePosition
                  )}
                  sizes={project.sizes}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-black/5 transition-opacity duration-500 group-hover:opacity-90" />
                <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.18em] text-white/80 backdrop-blur-md sm:left-6 sm:top-6">
                  {project.tag}
                </div>
                <span className="absolute right-5 top-5 flex h-10 w-10 -rotate-12 scale-90 items-center justify-center rounded-full bg-white text-slate-950 opacity-0 shadow-lg transition-all duration-300 group-hover:rotate-0 group-hover:scale-100 group-hover:opacity-100 sm:right-6 sm:top-6">
                  <ArrowUpRight className="h-4 w-4" />
                </span>

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <span className="mb-3 block font-mono text-[10px] uppercase tracking-[0.2em] text-orange-300">
                    Project / 0{index + 1}
                  </span>
                  <h3 className="text-3xl font-display leading-none text-white sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-lg translate-y-2 text-sm leading-6 text-white/60 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {project.description}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
