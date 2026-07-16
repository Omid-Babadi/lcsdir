"use client";

import { ArrowUpRight, Instagram, Mail, MapPin, Phone, ShieldCheck, Youtube } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  Services: [
  { name: "All Services", href: "/services" },
  { name: "Plumbing", href: "/services/plumbing" },
  { name: "Heating & Boilers", href: "/services/heating" },
  { name: "Air Conditioning", href: "/services/air-conditioning" },
  { name: "Gas Services", href: "/services/gas" },
  { name: "Boiler Services", href: "/services/boiler" },
  { name: "Underfloor Heating", href: "/services/underfloor-heating" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Why Choose Us", href: "/#why-us" },
    { name: "Reviews", href: "/#reviews" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  Support: [
    { name: "Emergency Service", href: "/services/plumbing/emergency" },
    { name: "Book Online", href: "/contact#booking" },
    { name: "FAQ", href: "/contact#faq" },
    { name: "Maintenance Plans", href: "/contact#booking" },
  ],
};

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
    alt: "Gas Safe logo",
  },
  {
    src: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780597445/G3-Unvented-certified-engineers_1_g63mew.webp",
    alt: "G3 Unvented certified engineers logo",
  },
  {
    src: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780597445/45edf68c10-lcl-awards-logo_kxe4aq.webp",
    alt: "LCL Awards logo",
  },
  {
    src: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780597445/F-Gas-Certified-Logo-1-e1754335467963_1_rzpt43.webp",
    alt: "F-Gas certified logo",
  },
  {
    src: "https://res.cloudinary.com/daucwpsi8/image/upload/v1780600149/city-guilds-logo-png_seeklogo-213843_x524ry.png",
    alt: "City & Guilds logo",
  },
  {
    src: "/MSC.png",
    alt: "MSC certified logo",
  },
];

export function FooterSection() {
  return (
    <footer className="relative border-t border-border bg-slate-950 text-white">
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* ── Certificates Strip ── */}
        <div className="my-6 overflow-hidden rounded-[2.5rem] border-2 border-orange-300/50 bg-orange-500 px-4 py-8 shadow-2xl shadow-orange-950/25 sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-6">
            {/* Label */}
            <div className="flex flex-shrink-0 items-center justify-center gap-2">
              <ShieldCheck className="w-5 h-5 text-white" />
              <span className="text-xs font-mono text-white/90 uppercase tracking-widest whitespace-nowrap">
                Certifications
              </span>
            </div>

            {/* Divider */}
            <div className="h-px w-full max-w-24 bg-white/35" />

            {/* Cert badges */}
            <div className="relative w-full overflow-hidden py-3 sm:py-4">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-orange-500/95 to-transparent sm:w-20" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-orange-500/95 to-transparent sm:w-20" />
              <div className="marquee flex w-max items-center gap-8 sm:gap-12">
                {[...certificates, ...certificates].map((cert, index) => (
                  <div
                    key={`${cert.src}-${index}`}
                    className="flex h-20 w-40 shrink-0 items-center justify-center sm:h-24 sm:w-52 lg:h-24 lg:w-56"
                  >
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      width={220}
                      height={90}
                      className="max-h-16 w-auto max-w-full object-contain drop-shadow-sm sm:max-h-20"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Main Footer ── */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="/" className="inline-flex items-center gap-3 mb-6">
                <div className="relative w-10 h-10 rounded-lg bg-white p-1 flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="London Climate Systems"
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <span className="text-xl font-display text-white">
                  London Climate Systems LTD
                </span>
              </a>

              <p className="text-white/60 leading-relaxed mb-6 max-w-xs text-sm">
                Professional heating, cooling, and plumbing services across
                Greater London. Expert engineers for your home comfort.
              </p>

              {/* Contact info */}
              <div className="flex flex-col gap-3 mb-8">
                <a
                  href="tel:07473423003"
                  className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  07473 423003
                </a>
                <a
                  href="mailto:londonclimatesystems@gmail.com"
                  className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  londonclimatesystems@gmail.com
                </a>
                <span className="inline-flex items-center gap-2 text-sm text-white/60">
                  <MapPin className="w-3.5 h-3.5" />
                  71-75 Shelton Street
                  Covent Garden
                  London
                  WC2H 9JQ
                  United Kingdom
                </span>
              </div>

              {socialLinks.length > 0 && (
                <div className="flex gap-6">
                  {socialLinks.map(({ name, href, Icon }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/40 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <Icon className="w-4 h-4" />
                      {name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium text-white mb-6">
                  {title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-white/50 hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; 2026 London Climate Systems LTD. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
