"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Droplets,
  Flame,
  Gauge,
  Menu,
  Percent,
  Phone,
  ShieldCheck,
  Snowflake,
  Wrench,
  X,
} from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const offers = [
  {
    icon: Percent,
    text: "10% off all services",
    cta: "Get a quote",
    href: "/contact",
  },
  {
    icon: ShieldCheck,
    text: "10-year boiler installation guarantee",
    cta: "Book now",
    href: "/contact",
  },
];

const serviceCategories = [
  {
    name: "Plumbing",
    eyebrow: "Flow & fixtures",
    href: "/services/plumbing",
    icon: Droplets,
    color: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
    items: [
      { name: "Plumbing installation", href: "/services/plumbing/installation" },
      { name: "Emergency service", href: "/services/plumbing/emergency" },
      { name: "Plumbing repairs", href: "/services/plumbing/repairs" },
    ],
  },
  {
    name: "Heating",
    eyebrow: "Warmth & comfort",
    href: "/services/heating",
    icon: Flame,
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    items: [
      { name: "Emergency heating", href: "/services/heating/emergency-heating" },
      { name: "Central heating installation", href: "/services/heating/installation" },
      { name: "Heating repairs", href: "/services/heating/repairs" },
    ],
  },
  {
    name: "Air conditioning",
    eyebrow: "Cooling & air",
    href: "/services/air-conditioning",
    icon: Snowflake,
    color: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    items: [
      { name: "AC maintenance", href: "/services/air-conditioning/maintenance" },
      { name: "AC installation", href: "/services/air-conditioning/installation" },
      { name: "AC repairs", href: "/services/air-conditioning/repairs" },
    ],
  },
  {
    name: "Gas",
    eyebrow: "Safe & certified",
    href: "/services/gas",
    icon: Flame,
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    items: [
      { name: "Boiler installation", href: "/services/gas/boiler-installation" },
      { name: "Gas safety certificates", href: "/services/gas/safety-certificates" },
      { name: "Leak detection & repair", href: "/services/gas/leak-detection" },
      { name: "Landlord certificates", href: "/services/gas/landlord-certificates" },
    ],
  },
  {
    name: "Boilers",
    eyebrow: "Heat, restored",
    href: "/services/boiler",
    icon: Gauge,
    color: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
    items: [
      { name: "Breakdown repairs", href: "/services/boiler/breakdown-repairs" },
      { name: "New boiler installation", href: "/services/boiler/new-installation" },
      { name: "Annual servicing", href: "/services/boiler/servicing" },
      { name: "Power flush", href: "/services/boiler/power-flush" },
    ],
  },
  {
    name: "Underfloor heating",
    eyebrow: "Comfort from below",
    href: "/services/underfloor-heating",
    icon: Wrench,
    color: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
    items: [
      { name: "Installation", href: "/services/underfloor-heating/installation" },
      { name: "Wet systems", href: "/services/underfloor-heating/wet-systems" },
      { name: "Repairs", href: "/services/underfloor-heating/repairs" },
      { name: "Smart thermostats", href: "/services/underfloor-heating/smart-thermostats" },
    ],
  },
];

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const [activeOffer, setActiveOffer] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!bannerVisible) return;
    const interval = window.setInterval(() => {
      setActiveOffer((current) => (current + 1) % offers.length);
    }, 5200);
    return () => window.clearInterval(interval);
  }, [bannerVisible]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const openServices = () => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    setIsServicesOpen(true);
  };

  const closeServicesSoon = () => {
    closeTimerRef.current = window.setTimeout(() => {
      setIsServicesOpen(false);
    }, 140);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const offer = offers[activeOffer];
  const OfferIcon = offer.icon;

  return (
    <>
      <div
        className={cn(
          "fixed inset-x-0 top-0 z-[70] overflow-hidden bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white transition-all duration-500",
          bannerVisible
            ? "h-9 opacity-100"
            : "pointer-events-none h-0 opacity-0"
        )}
      >
        <div className="mx-auto flex h-full max-w-[1400px] items-center px-3 sm:px-6 lg:px-12">
          <div className="w-8 sm:w-24">
            <div className="hidden items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/65 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              LCS offer
            </div>
          </div>

          <div className="flex min-w-0 flex-1 items-center justify-center gap-2 sm:gap-3">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeOffer}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.25 }}
                className="flex min-w-0 items-center gap-2"
              >
                <OfferIcon className="hidden h-3.5 w-3.5 shrink-0 sm:block" />
                <span className="truncate text-[11px] font-medium sm:text-xs">
                  {offer.text}
                </span>
                <Link
                  href={offer.href}
                  className="hidden shrink-0 items-center gap-1 rounded-full border border-white/25 bg-white/15 px-2.5 py-0.5 text-[10px] font-semibold transition-colors hover:bg-white/25 min-[430px]:inline-flex"
                >
                  {offer.cta}
                  <ArrowRight className="h-2.5 w-2.5" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex w-8 items-center justify-end gap-2 sm:w-24">
            <div className="hidden items-center gap-1 sm:flex">
              {offers.map((item, index) => (
                <button
                  key={item.text}
                  type="button"
                  aria-label={"Show offer " + (index + 1)}
                  onClick={() => setActiveOffer(index)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    index === activeOffer
                      ? "w-4 bg-white"
                      : "w-1.5 bg-white/35 hover:bg-white/60"
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setBannerVisible(false)}
              aria-label="Close offer banner"
              className="rounded-full p-1 text-white/65 transition-colors hover:bg-white/15 hover:text-white"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "fixed inset-x-0 z-[60] px-3 transition-all duration-500 sm:px-5",
          bannerVisible ? "top-9" : "top-0",
          isScrolled ? "pt-2" : "pt-0 sm:pt-2"
        )}
      >
        <nav
          className={cn(
            "mx-auto max-w-[1400px] border transition-all duration-500",
            isScrolled || isMobileMenuOpen
              ? "rounded-2xl border-border/70 bg-background/90 shadow-xl shadow-slate-950/[0.06] backdrop-blur-2xl"
              : "rounded-none border-transparent bg-background/75 backdrop-blur-xl sm:rounded-2xl"
          )}
        >
          <div
            className={cn(
              "flex items-center justify-between px-3 transition-all duration-500 sm:px-4 lg:px-5",
              isScrolled ? "h-14 sm:h-16" : "h-16 sm:h-[4.5rem]"
            )}
          >
            <Link
              href="/"
              aria-label="London Climate Systems home"
              className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
            >
              <span
                className={cn(
                  "relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1 shadow-sm ring-1 ring-black/5 transition-all duration-500 group-hover:rotate-2",
                  isScrolled ? "h-9 w-9" : "h-10 w-10 sm:h-11 sm:w-11"
                )}
              >
                <Image
                  src="/logo.png"
                  alt=""
                  width={42}
                  height={42}
                  className="object-contain"
                  priority
                />
              </span>
              <span className="min-w-0">
                <strong className="block truncate text-sm font-semibold tracking-tight text-foreground sm:text-[15px]">
                  London Climate Systems
                </strong>
                <span className="hidden text-[9px] font-mono uppercase tracking-[0.13em] text-muted-foreground sm:block">
                  Heating · Cooling · Plumbing
                </span>
              </span>
            </Link>

            <div className="hidden items-center gap-1 rounded-full border border-border/60 bg-muted/45 p-1 lg:flex">
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={openServices}
                onMouseLeave={closeServicesSoon}
              >
                <button
                  type="button"
                  onClick={() => setIsServicesOpen((open) => !open)}
                  onFocus={openServices}
                  aria-expanded={isServicesOpen}
                  className={cn(
                    "flex h-9 items-center gap-1.5 rounded-full px-4 text-sm font-medium transition-colors",
                    isServicesOpen
                      ? "bg-background text-foreground shadow-sm"
                      : "text-foreground/65 hover:bg-background/70 hover:text-foreground"
                  )}
                >
                  Services
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-300",
                      isServicesOpen && "rotate-180"
                    )}
                  />
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.99 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.99 }}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute left-1/2 top-full w-[min(970px,calc(100vw-3rem))] -translate-x-1/2 pt-4"
                    >
                      <div className="max-h-[calc(100vh-8rem)] overflow-y-auto rounded-[1.75rem] border border-border/70 bg-background/95 p-4 shadow-2xl shadow-slate-950/15 backdrop-blur-2xl">
                        <div className="mb-3 flex items-center justify-between px-2 py-1">
                          <div>
                            <p className="text-sm font-semibold text-foreground">
                              Everything your property needs
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Certified engineers across Greater London
                            </p>
                          </div>
                          <Link
                            href="/services"
                            onClick={() => setIsServicesOpen(false)}
                            className="group flex items-center gap-2 text-xs font-semibold text-orange-600"
                          >
                            All services
                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                          </Link>
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                          {serviceCategories.map((category) => {
                            const Icon = category.icon;
                            return (
                              <div
                                key={category.name}
                                className="group rounded-2xl border border-transparent p-3 transition-colors hover:border-border/70 hover:bg-muted/50"
                              >
                                <Link
                                  href={category.href}
                                  onClick={() => setIsServicesOpen(false)}
                                  className="flex items-center gap-3"
                                >
                                  <span
                                    className={
                                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl " +
                                      category.color
                                    }
                                  >
                                    <Icon className="h-4 w-4" />
                                  </span>
                                  <span>
                                    <strong className="block text-sm font-semibold text-foreground">
                                      {category.name}
                                    </strong>
                                    <span className="text-[10px] text-muted-foreground">
                                      {category.eyebrow}
                                    </span>
                                  </span>
                                </Link>
                                <div className="mt-3 space-y-1.5 pl-[3.25rem]">
                                  {category.items.map((item) => (
                                    <Link
                                      key={item.name}
                                      href={item.href}
                                      onClick={() => setIsServicesOpen(false)}
                                      className="block text-[11px] leading-4 text-muted-foreground transition-colors hover:text-orange-600"
                                    >
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        <div className="mt-3 flex items-center justify-between rounded-2xl bg-slate-950 px-5 py-3.5 text-white dark:bg-white dark:text-slate-950">
                          <div className="flex items-center gap-3">
                            <span className="relative flex h-2 w-2">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                            </span>
                            <p className="text-xs">
                              Need help choosing? Tell us what is happening.
                            </p>
                          </div>
                          <Link
                            href="/contact"
                            onClick={() => setIsServicesOpen(false)}
                            className="flex items-center gap-1.5 text-xs font-semibold text-orange-400"
                          >
                            Ask an expert
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-foreground/65 transition-colors hover:bg-background/70 hover:text-foreground"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="hidden items-center gap-2 lg:flex">
              <ThemeToggle />
              <a
                href="tel:07473423003"
                className="hidden h-10 items-center gap-2 rounded-full px-3 text-xs font-semibold text-foreground/65 transition-colors hover:text-orange-600 xl:flex"
              >
                <Phone className="h-3.5 w-3.5" />
                07473 423003
              </a>
              <Button
                asChild
                size="sm"
                className="h-10 rounded-full bg-orange-500 px-5 text-white shadow-md shadow-orange-950/10 transition-all hover:-translate-y-0.5 hover:bg-orange-600"
              >
                <Link href="/contact">
                  Get a quote
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-1.5 lg:hidden">
              <ThemeToggle />
              <button
                type="button"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((open) => !open)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 text-foreground transition-colors hover:bg-muted"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-background lg:hidden"
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
              <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
            </div>

            <div
              className={cn(
                "relative flex h-full flex-col overflow-y-auto px-5 pb-7 sm:px-8",
                bannerVisible ? "pt-32" : "pt-24"
              )}
            >
              <div className="flex-1">
                <p className="mb-5 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  Explore LCS
                </p>

                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((open) => !open)}
                  className="flex w-full items-center justify-between border-b border-border/70 py-4 text-left"
                >
                  <span className="text-3xl font-display sm:text-4xl">Services</span>
                  <span
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-full border border-border transition-transform duration-300",
                      mobileServicesOpen && "rotate-180"
                    )}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-2 py-4 sm:grid-cols-2">
                        {serviceCategories.map((category) => {
                          const Icon = category.icon;
                          return (
                            <Link
                              key={category.name}
                              href={category.href}
                              onClick={closeMobileMenu}
                              className="flex items-center gap-3 rounded-2xl border border-border/70 bg-card p-3"
                            >
                              <span
                                className={
                                  "flex h-10 w-10 items-center justify-center rounded-xl " +
                                  category.color
                                }
                              >
                                <Icon className="h-4 w-4" />
                              </span>
                              <span>
                                <strong className="block text-sm font-semibold">
                                  {category.name}
                                </strong>
                                <span className="text-[10px] text-muted-foreground">
                                  {category.eyebrow}
                                </span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="group flex items-center justify-between border-b border-border/70 py-4 text-3xl font-display sm:text-4xl"
                    >
                      {link.name}
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <Button
                  asChild
                  variant="outline"
                  className="h-13 rounded-full border-border text-sm"
                >
                  <a href="tel:07473423003" onClick={closeMobileMenu}>
                    <Phone className="mr-2 h-4 w-4" />
                    07473 423003
                  </a>
                </Button>
                <Button
                  asChild
                  className="h-13 rounded-full bg-orange-500 text-sm text-white hover:bg-orange-600"
                >
                  <Link href="/contact" onClick={closeMobileMenu}>
                    Get a free quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
