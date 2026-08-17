"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Instagram,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Youtube,
} from "lucide-react";

import { Reveal } from "@/components/landing/motion-primitives";

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Plumbing", href: "/services/plumbing" },
      { name: "Heating & boilers", href: "/services/heating" },
      { name: "Air conditioning", href: "/services/air-conditioning" },
      { name: "Gas services", href: "/services/gas" },
      { name: "Underfloor heating", href: "/services/underfloor-heating" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About us", href: "/about" },
      { name: "Why choose us", href: "/#why-us" },
      { name: "Our work", href: "/#projects" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Emergency service", href: "/services/plumbing/emergency" },
      { name: "Book online", href: "/contact#booking" },
      { name: "FAQs", href: "/contact#faq" },
      { name: "Maintenance plans", href: "/contact#booking" },
      { name: "Service area", href: "/#service-area" },
    ],
  },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/londonclimatesystems/",
    Icon: Instagram,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@LondonClimateSystemsLTD",
    Icon: Youtube,
  },
];

const certificates = [
  {
    src: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780224348/download_9_fly9xv.png",
    alt: "Gas Safe",
  },
  {
    src: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780597445/G3-Unvented-certified-engineers_1_g63mew.webp",
    alt: "G3 Unvented",
  },
  {
    src: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780597445/45edf68c10-lcl-awards-logo_kxe4aq.webp",
    alt: "LCL Awards",
  },
  {
    src: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780597445/F-Gas-Certified-Logo-1-e1754335467963_1_rzpt43.webp",
    alt: "F-Gas certified",
  },
  {
    src: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780600149/city-guilds-logo-png_seeklogo-213843_x524ry.png",
    alt: "City & Guilds",
  },
  { src: "/MSC.png", alt: "MCS certified" },
];

export function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-[#060c16] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-sky-500/10 blur-[120px]" />
        <div className="absolute -right-32 top-0 h-[28rem] w-[28rem] rounded-full bg-orange-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-12">
        <Reveal>
          <div className="border-b border-white/[0.08] py-10 sm:py-12">
            <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-orange-400">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Certified workmanship</p>
                  <p className="text-xs text-white/40">
                    Trained, registered, and ready to help
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/30">
                Our accreditations
              </span>
            </div>

            <div className="relative overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#060c16] to-transparent sm:w-24" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#060c16] to-transparent sm:w-24" />
              <div className="marquee flex w-max items-center gap-3 hover:[animation-play-state:paused]">
                {[...certificates, ...certificates].map((certificate, index) => (
                  <div
                    key={certificate.src + index}
                    className="flex h-20 w-40 shrink-0 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.96] px-5 sm:h-24 sm:w-48"
                  >
                    <Image
                      src={certificate.src}
                      alt={certificate.alt}
                      width={160}
                      height={70}
                      className="max-h-14 w-auto max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-14 py-16 sm:py-20 lg:grid-cols-[1.15fr_1.85fr] lg:gap-20">
          <Reveal direction="left">
            <div>
              <Link href="/" className="group inline-flex items-center gap-3">
                <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white p-1.5 transition-transform duration-300 group-hover:rotate-3">
                  <Image
                    src="/logo.png"
                    alt="London Climate Systems"
                    width={42}
                    height={42}
                    className="object-contain"
                  />
                </span>
                <span>
                  <strong className="block text-base font-semibold tracking-tight">
                    London Climate Systems
                  </strong>
                  <span className="block text-[10px] font-mono uppercase tracking-[0.18em] text-white/35">
                    Heating · Cooling · Plumbing
                  </span>
                </span>
              </Link>

              <h2 className="mt-9 max-w-md text-3xl font-display leading-[1.05] text-white sm:text-4xl">
                Climate care for the city we call home.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-6 text-white/50">
                Professional heating, cooling, plumbing, gas, and boiler
                services for homes and businesses across Greater London.
              </p>

              <div className="mt-8 flex gap-2">
                {socialLinks.map(({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/55 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-400/50 hover:bg-orange-400 hover:text-slate-950"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
              {footerLinks.map((group, groupIndex) => (
                <Reveal key={group.title} delay={groupIndex * 0.06}>
                  <div>
                    <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                      {group.title}
                    </h3>
                    <ul className="space-y-3">
                      {group.links.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="group inline-flex items-center gap-1.5 text-sm text-white/45 transition-colors hover:text-white"
                          >
                            {link.name}
                            <ArrowUpRight className="h-3 w-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.16}>
              <div className="mt-12 grid gap-3 rounded-[1.5rem] border border-white/[0.08] bg-white/[0.035] p-4 sm:grid-cols-2 sm:p-5">
                <a
                  href="tel:07473423003"
                  className="group flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-white/[0.05]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-400/10 text-orange-300">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.15em] text-white/30">
                      Call us
                    </span>
                    <span className="text-sm text-white/70 group-hover:text-white">
                      07473 423003
                    </span>
                  </span>
                </a>
                <a
                  href="mailto:londonclimatesystems@gmail.com"
                  className="group flex min-w-0 items-center gap-3 rounded-xl p-2 transition-colors hover:bg-white/[0.05]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10px] uppercase tracking-[0.15em] text-white/30">
                      Email
                    </span>
                    <span className="block truncate text-sm text-white/70 group-hover:text-white">
                      londonclimatesystems@gmail.com
                    </span>
                  </span>
                </a>
                <div className="flex items-start gap-3 rounded-xl p-2 sm:col-span-2">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.15em] text-white/30">
                      Registered office
                    </span>
                    <span className="text-sm leading-6 text-white/60">
                      71–75 Shelton Street, Covent Garden, London, WC2H 9JQ
                    </span>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/[0.08] py-7 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 London Climate Systems LTD. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
