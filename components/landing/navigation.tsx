"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown, Droplets, Flame, Wind, Wrench, Gauge, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const offers = [
  { text: "💧 10% off for all services", cta: "Get Quote", href: "/contact" },
  { text: "🛡️ 1 year guarantee for all installation services", cta: "Book Now", href: "/contact" },
];

const serviceCategories = [
  {
    name: "Plumbing",
    href: "/services/plumbing",
    icon: Droplets,
    color: "text-blue-500",
    items: [
      { name: "Plumbing Installation", href: "/services/plumbing/installation" },
      { name: "Plumbing Emergency Service", href: "/services/plumbing/emergency" },
      { name: "Plumbing Repair", href: "/services/plumbing/repairs" },
    ],
  },
  {
    name: "Heating",
    href: "/services/heating",
    icon: Flame,
    color: "text-[#FF6A00]",
    items: [
      { name: "Emergency Heating Engineers", href: "/services/heating/emergency-heating" },
      { name: "Emergency Boiler Repairs", href: "/services/heating/emergency-boiler" },
      { name: "Central Heating Installation", href: "/services/heating/installation" },
      { name: "Central Heating Service", href: "/services/heating/service" },
      { name: "Central Heating Repairs", href: "/services/heating/repairs" },
    ],
  },
  {
    name: "Air Conditioning",
    href: "/services/air-conditioning",
    icon: Wind,
    color: "text-cyan-500",
    items: [
      { name: "Air Conditioning Maintenance", href: "/services/air-conditioning/maintenance" },
      { name: "Air Conditioning Installations", href: "/services/air-conditioning/installation" },
      { name: "Air Conditioning Repair Services", href: "/services/air-conditioning/repairs" },
    ],
  },
  {
    name: "Gas",
    href: "/services/gas",
    icon: Flame,
    color: "text-orange-500",
    items: [
      { name: "Gas Boiler Installation", href: "/services/gas/boiler-installation" },
      { name: "Gas Cooker and Hob Installation", href: "/services/gas/cooker-installation" },
      { name: "Gas Fire Installation", href: "/services/gas/fire-installation" },
      { name: "Gas Safety Certificates", href: "/services/gas/safety-certificates" },
      { name: "Gas Leak Detection and Repair", href: "/services/gas/leak-detection" },
      { name: "Gas Pipe Installation", href: "/services/gas/pipe-installation" },
      { name: "Annual Gas Safety Checks", href: "/services/gas/annual-checks" },
      { name: "Landlord Gas Certificates", href: "/services/gas/landlord-certificates" },
    ],
  },
  {
    name: "Boiler",
    href: "/services/boiler",
    icon: Gauge,
    color: "text-red-500",
    items: [
      { name: "Boiler Breakdown Repairs", href: "/services/boiler/breakdown-repairs" },
      { name: "New Boiler Installation", href: "/services/boiler/new-installation" },
      { name: "Boiler Replacement and Upgrades", href: "/services/boiler/replacement" },
      { name: "Annual Boiler Servicing", href: "/services/boiler/servicing" },
      { name: "System and Combi Boiler Fitting", href: "/services/boiler/system-combi-fitting" },
      { name: "Boiler Pressure Issues", href: "/services/boiler/pressure-issues" },
      { name: "Pilot Light Repairs", href: "/services/boiler/pilot-light" },
      { name: "Boiler Warranty Work", href: "/services/boiler/warranty" },
      { name: "Power Flush", href: "/services/boiler/power-flush" },
    ],
  },
  {
    name: "Underfloor Heating",
    href: "/services/underfloor-heating",
    icon: Wrench,
    color: "text-amber-500",
    items: [
      { name: "Underfloor Heating Installation", href: "/services/underfloor-heating/installation" },
      { name: "Electric Underfloor Heating", href: "/services/underfloor-heating/electric" },
      { name: "Wet Underfloor Heating Systems", href: "/services/underfloor-heating/wet-systems" },
      { name: "Underfloor Heating Repairs", href: "/services/underfloor-heating/repairs" },
      { name: "Underfloor Heating Controls & Thermostats", href: "/services/underfloor-heating/controls" },
      { name: "Smart Thermostat Integration", href: "/services/underfloor-heating/smart-thermostats" },
      { name: "System Design & Consultation", href: "/services/underfloor-heating/design-consultation" },
    ],
  },
  // Power Flush moved under Boiler category (see Boiler.items)
];

const navLinks = [
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // Offer banner state
  const [bannerVisible, setBannerVisible] = useState(true);
  const [activeOffer, setActiveOffer] = useState(0);
  const [animating, setAnimating] = useState(false);
  const autoRef = useRef<NodeJS.Timeout | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotate offers every 5s
  useEffect(() => {
    if (!bannerVisible) return;
    autoRef.current = setInterval(() => {
      goTo((prev) => (prev + 1) % offers.length);
    }, 5000);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [bannerVisible, activeOffer]);

  const goTo = (indexOrUpdater: number | ((prev: number) => number)) => {
    setAnimating(true);
    setTimeout(() => {
      setActiveOffer(typeof indexOrUpdater === "function" ? indexOrUpdater(activeOffer) : indexOrUpdater);
      setAnimating(false);
    }, 220);
  };

  const prev = () => {
    if (autoRef.current) clearInterval(autoRef.current);
    goTo((i) => (i - 1 + offers.length) % offers.length);
  };

  const next = () => {
    if (autoRef.current) clearInterval(autoRef.current);
    goTo((i) => (i + 1) % offers.length);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsServicesOpen(false), 150);
  };

  const offer = offers[activeOffer];

  return (
    <>
      {/* ── Offer Banner ── */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 overflow-hidden ${
          bannerVisible ? "h-9 opacity-100" : "h-0 opacity-0 pointer-events-none"
        }`}
        style={{ background: "linear-gradient(90deg, #FF6A00 0%, #FF9800 100%)" }}
      >
        <div className="h-full max-w-[1400px] mx-auto px-4 flex items-center justify-between gap-3">
          {/* Prev */}
          <button
            onClick={prev}
            className="text-white/70 hover:text-white transition-colors flex-shrink-0"
            aria-label="Previous offer"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>

          {/* Text + CTA */}
          <div className="flex-1 flex items-center justify-center gap-3 min-w-0 overflow-hidden">
            <p
              className={`text-[11px] sm:text-xs font-medium text-white truncate transition-all duration-220 ${
                animating ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"
              }`}
            >
              {offer.text}
            </p>
            <Link
              href={offer.href}
              className={`flex-shrink-0 text-[10px] font-semibold bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-full px-2.5 py-0.5 transition-all duration-220 ${
                animating ? "opacity-0" : "opacity-100"
              }`}
            >
              {offer.cta} →
            </Link>
          </div>

          {/* Dots */}
          <div className="hidden sm:flex items-center gap-1 flex-shrink-0">
            {offers.map((_, i) => (
              <button
                key={i}
                onClick={() => { if (autoRef.current) clearInterval(autoRef.current); goTo(i); }}
                className={`rounded-full transition-all duration-300 ${
                  i === activeOffer ? "w-3 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to offer ${i + 1}`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            className="text-white/70 hover:text-white transition-colors flex-shrink-0"
            aria-label="Next offer"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          {/* Close */}
          <button
            onClick={() => setBannerVisible(false)}
            className="ml-1 text-white/60 hover:text-white transition-colors flex-shrink-0"
            aria-label="Close banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* ── Header — offset by banner height ── */}
      <header
        className={`fixed z-40 transition-all duration-500 ${
          bannerVisible ? "top-9" : "top-0"
        } ${
          isScrolled ? "left-4 right-4" : "left-0 right-0"
        }`}
      >
        <nav
          className={`mx-auto transition-all duration-500 ${
            isScrolled || isMobileMenuOpen
              ? "bg-background/95 backdrop-blur-xl border border-border rounded-2xl shadow-lg max-w-[1200px]"
              : "bg-background/80 backdrop-blur-sm max-w-[1400px]"
          }`}
        >
          <div
            className={`flex items-center justify-between transition-all duration-500 px-4 sm:px-6 lg:px-8 ${
              isScrolled ? "h-14 sm:h-16" : "h-16 sm:h-20"
            }`}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
              <div className={`relative transition-all duration-500 ${isScrolled ? "w-8 h-8 sm:w-10 sm:h-10" : "w-10 h-10 sm:w-12 sm:h-12"}`}>
                <Image src="/logo.png" alt="London Climate Systems" fill className="object-contain" priority />
              </div>
              <div className="flex flex-col">
                <span className={`font-bold tracking-tight text-foreground transition-all duration-500 ${isScrolled ? "text-xs sm:text-sm" : "text-sm sm:text-base lg:text-lg"}`}>
                  London Climate Systems
                </span>
                <span className={`font-mono text-muted-foreground transition-all duration-500 hidden sm:block ${isScrolled ? "text-[8px]" : "text-[10px] lg:text-xs"}`}>
                      Heating | Cooling | Plumbing | Gas | Boiler
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1 text-sm text-foreground/70 hover:text-[#FF6A00] transition-colors duration-300">
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${
                    isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <div className="bg-background border border-border rounded-2xl shadow-2xl p-6 min-w-[900px]">
                    <div className="grid grid-cols-3 gap-6">
                      {serviceCategories.map((category) => {
                        const Icon = category.icon;
                        return (
                          <div key={category.name} className="space-y-3">
                            <Link href={category.href} className="flex items-center gap-2 font-semibold text-foreground hover:text-[#FF6A00] transition-colors group">
                              <Icon className={`w-5 h-5 ${category.color}`} />
                              {category.name}
                            </Link>
                            <div className="space-y-2 pl-7">
                              {category.items.map((item) => (
                                <Link key={item.name} href={item.href} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="mt-6 pt-4 border-t border-border">
                      <Link href="/services" className="flex items-center gap-2 text-sm font-medium text-[#FF6A00] hover:text-[#FF9800] transition-colors">
                        All Services
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4">
              <a
                href="tel:07473423003"
                className={`flex items-center gap-1.5 text-foreground/70 hover:text-[#FF6A00] transition-all duration-500 ${isScrolled ? "text-xs" : "text-sm"}`}
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">07473 423003</span>
              </a>
              <Button
                size="sm"
                className={`gradient-flame hover:opacity-90 text-white rounded-full transition-all duration-500 ${isScrolled ? "px-4 h-8 text-xs" : "px-5 xl:px-6"}`}
                asChild
              >
                <Link href="/contact">Get Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 bg-background z-40 transition-all duration-500 ${
            isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          style={{ top: 0 }}
        >
          <div className="flex flex-col h-full px-6 sm:px-8 pt-24 sm:pt-28 pb-8 overflow-y-auto">
            <div className="flex-1 flex flex-col gap-4">
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full text-3xl sm:text-4xl font-display text-foreground"
                >
                  Services
                  <ChevronDown className={`w-6 h-6 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-[800px] mt-4" : "max-h-0"}`}>
                  <div className="space-y-4 pl-4">
                    {serviceCategories.map((category) => {
                      const Icon = category.icon;
                      return (
                        <div key={category.name}>
                          <Link href={category.href} onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 text-xl font-semibold text-foreground">
                            <Icon className={`w-5 h-5 ${category.color}`} />
                            {category.name}
                          </Link>
                          <div className="mt-2 space-y-2 pl-7">
                            {category.items.map((item) => (
                              <Link key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-base text-muted-foreground">
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {navLinks.map((link, i) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-3xl sm:text-4xl font-display text-foreground hover:text-[#FF6A00] transition-all duration-500 ${
                    isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: isMobileMenuOpen ? `${(i + 1) * 75}ms` : "0ms" }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-3 pt-6 border-t border-border transition-all duration-500 ${
                isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? "300ms" : "0ms" }}
            >
              <a href="tel:07473423003" className="flex-1" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full rounded-full h-12 sm:h-14 text-sm sm:text-base border-[#FF6A00] text-[#FF6A00]">
                  <Phone className="w-4 h-4 mr-2" />
                  07473 423003
                </Button>
              </a>
              <Link href="/contact" className="flex-1" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full gradient-flame text-white rounded-full h-12 sm:h-14 text-sm sm:text-base">
                  Get Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
