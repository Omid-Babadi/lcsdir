"use client";

import { ArrowUpRight, Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
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

const socialLinks: { name: string; href: string }[] = [];

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
    alt: "F-Gas certified logo",
  },
];

export function FooterSection() {
  return (
    <footer className="relative border-t border-border bg-foreground text-primary-foreground">
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* ── Certificates Strip ── */}
        <div className="py-8 border-b border-primary-foreground/10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            {/* Label */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="text-xs font-mono text-primary-foreground/40 uppercase tracking-widest whitespace-nowrap">
                Certifications
              </span>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-8 bg-primary-foreground/10 flex-shrink-0" />

            {/* Cert badges */}
            <div className="flex flex-wrap items-center gap-3">
              {certificates.map((cert) => (
                <div
                  key={cert.src}
                  className="flex h-12 w-[100px] items-center justify-center rounded-lg border border-primary-foreground/10 bg-white px-4 py-2 transition-all duration-200 hover:border-primary-foreground/20 hover:bg-primary-foreground/10"
                >
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    width={120}
                    height={40}
                    className="max-h-10 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Main Footer ── */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="/" className="inline-flex items-center gap-3 mb-6">
                <div className="relative w-10 h-10 rounded-lg bg-primary-foreground p-1 flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="London Climate Systems"
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <span className="text-xl font-display text-primary-foreground">
                  London Climate Systems LTD
                </span>
              </a>

              <p className="text-primary-foreground/60 leading-relaxed mb-6 max-w-xs text-sm">
                Professional heating, cooling, and plumbing services across
                Greater London. Expert engineers for your home comfort.
              </p>

              {/* Contact info */}
              <div className="flex flex-col gap-3 mb-8">
                <a
                  href="tel:07473423003"
                  className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  07473 423003
                </a>
                <a
                  href="mailto:londonclimatesystems@gmail.com"
                  className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  londonclimatesystems@gmail.com
                </a>
                <span className="inline-flex items-center gap-2 text-sm text-primary-foreground/60">
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
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-sm text-primary-foreground/40 hover:text-primary-foreground transition-colors flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium text-primary-foreground mb-6">
                  {title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
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
        <div className="py-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/40">
            &copy; 2026 London Climate Systems LTD. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-primary-foreground/40">
            <a href="/privacy" className="hover:text-primary-foreground transition-colors">
              Privacy
            </a>
            <a href="/terms" className="hover:text-primary-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
