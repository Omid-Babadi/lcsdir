"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Shield, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { HeroVideoModal } from "@/components/landing/hero-video-modal";
import { AiSupportChat } from "@/components/landing/ai-support-chat";

const services = ["heating", "cooling", "plumbing", "boilers"];

const trustBadges = [
  { icon: Shield, text: "Gas Safe Registered" },
  { icon: CheckCircle, text: "F-Gas Certified" },
];

const sharpenCloudinaryLogo = (url: string) =>
  url.replace("/image/upload/", "/image/upload/f_auto,q_auto,dpr_2.0,w_640/");

const brandPartners = [
  {
    name: "Alpha Heating Innovation",
    logo: sharpenCloudinaryLogo(
      "https://res.cloudinary.com/daucwpsi8/image/upload/v1780224348/download_12_zm6ei3.png"
    ),
    sizeClass: "max-h-16 max-w-44 sm:max-h-16 sm:max-w-56",
  },
  {
    name: "Worcester Bosch",
    logo: sharpenCloudinaryLogo(
      "https://res.cloudinary.com/daucwpsi8/image/upload/v1780224347/download_10_eqh5nv.png"
    ),
    sizeClass: "max-h-16 max-w-44 sm:max-h-16 sm:max-w-56",
  },
  {
    name: "Vaillant",
    logo: sharpenCloudinaryLogo(
      "https://res.cloudinary.com/daucwpsi8/image/upload/v1780224347/download_11_rmi8gq.png"
    ),
    sizeClass: "max-h-16 max-w-44 sm:max-h-16 sm:max-w-56",
  },
  {
    name: "Ideal Boilers",
    logo: sharpenCloudinaryLogo(
      "https://res.cloudinary.com/daucwpsi8/image/upload/v1780224347/download_13_dypydk.png"
    ),
  },
  {
    name: "Glow-worm",
    logo: sharpenCloudinaryLogo(
      "https://res.cloudinary.com/daucwpsi8/image/upload/v1780224345/download_15_g5uhrn.png"
    ),
    sizeClass: "max-h-16 max-w-44 sm:max-h-16 sm:max-w-56",
  },
  {
    name: "LG",
    logo: sharpenCloudinaryLogo(
      "https://res.cloudinary.com/daucwpsi8/image/upload/v1780346343/LG_logo__2014.svg_nu8jfy.png"
    ),
  },
  {
    name: "Samsung",
    logo: sharpenCloudinaryLogo(
      "https://res.cloudinary.com/daucwpsi8/image/upload/v1780346467/kisspng-samsung-galaxy-j2-samsung-electronics-harman-inter-5b028f05a6eae0.9040984915268943416837-removebg-preview_zb9jsk.png"
    ),
  },
];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden bg-background mt-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 w-full py-8 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Eyebrow */}
            <div
              className={`mb-4 sm:mb-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="inline-flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-muted-foreground">
                <span className="w-6 sm:w-8 h-px gradient-flame" />
                London&apos;s Trusted Climate Experts Since 2018
              </span>
            </div>

            {/* Main headline */}
            <div className="mb-6 sm:mb-8">
              <h1
                className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display leading-[1.1] tracking-tight transition-all duration-1000 text-foreground ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <span className="block">Expert solutions</span>
                <span className="block">
                  for your{" "}
                  <span className="relative inline-block">
                    <span key={wordIndex} className="inline-flex text-orange-600">
                      {services[wordIndex].split("").map((char, i) => (
                        <span
                          key={`${wordIndex}-${i}`}
                          className="inline-block animate-char-in"
                          style={{ animationDelay: `${i * 50}ms` }}
                        >
                          {char}
                        </span>
                      ))}
                    </span>
                  </span>
                </span>
              </h1>
            </div>

            {/* Description */}
            <p
              className={`text-base sm:text-lg lg:text-xl text-foreground/70 leading-relaxed max-w-xl mb-6 sm:mb-8 transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Gas Safe and F-Gas registered engineers delivering premium plumbing, 
              heating, and air conditioning services across London. Fast response, 
              fair pricing, and careful workmanship.
            </p>

            {/* Trust Badges */}
            <div
              className={`flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {trustBadges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-foreground/60"
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF6A00]" />
                    <span>{badge.text}</span>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Button
                size="lg"
                className="gradient-flame hover:opacity-90 text-white px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base rounded-full group w-full sm:w-auto"
                asChild
              >
                <Link href="/contact">
                  Get Free Quote
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <a href="tel:07473423003" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base rounded-full border-[#FF6A00] text-[#FF6A00] hover:bg-[#FF6A00]/10 w-full"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  07473 423003
                </Button>
              </a>
            </div>

            {/* Emergency Banner */}
            <div
              className={`mt-6 sm:mt-8 p-3 sm:p-4 bg-blue-500/5 border border-blue-400/20 rounded-xl transition-all duration-700 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <p className="text-xs sm:text-sm text-foreground">
                <span className="font-semibold text-blue-600">Fast Response:</span>{" "}
                Our engineers are spread across London ready to help. No call-out fees.
              </p>
            </div>
          </div>

          {/* Right Content - Square Pattern Background with Image */}
          <div
            className={`order-1 lg:order-2 relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative aspect-square max-w-[350px] sm:max-w-[450px] lg:max-w-[500px] mx-auto lg:ml-auto">
              {/* Square Pattern Background */}
              <div className="absolute inset-0 square-pattern rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[#FF6A00]/5" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 gradient-flame rounded-2xl opacity-20 blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 gradient-cool rounded-2xl opacity-20 blur-xl" />

              {/* Floating Stats */}
              <div className="absolute top-2 sm:top-4 lg:top-8 right-2 sm:right-4 lg:right-8 bg-background/90 backdrop-blur-sm border border-border rounded-xl p-2 sm:p-3 lg:p-4 shadow-lg z-10">
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-[#FF6A00]">500+</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Jobs Monthly</p>
              </div>

              <div className="absolute bottom-2 sm:bottom-4 lg:bottom-8 left-2 sm:left-4 lg:left-8 bg-background/90 backdrop-blur-sm border border-border rounded-xl p-2 sm:p-3 lg:p-4 shadow-lg z-10">
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">4.9/5</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground">Customer Rating</p>
              </div>

              {/* Hero Image */}
              <div className="relative z-5 p-4 sm:p-6 lg:p-8">
                <Image
                  src="/67ac8e79-dfc0-4357-951a-73b5da85f2c6.png"
                  alt="Professional London Climate Systems Engineer"
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-10 sm:mt-12 border-y border-border/70 py-5 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          aria-label="Brands we work with"
        >
          <div className="mb-4 flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <span className="h-px w-8 gradient-flame" />
            Brands we work with
          </div>
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent" />
            <div className="marquee flex w-max items-center gap-4">
              {[...brandPartners, ...brandPartners].map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="flex h-20 min-w-48 shrink-0 items-center justify-center rounded-lg border border-border bg-white px-5 sm:h-20 sm:min-w-64"
                >
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={224}
                    height={96}
                    className={`h-auto object-contain ${
                      brand.sizeClass ?? "max-h-12 max-w-36 sm:max-h-12 sm:max-w-44"
                    }`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}

      {/* Auto-opening YouTube intro modal */}
      <HeroVideoModal />
      <AiSupportChat />
    </section>
  );
}
