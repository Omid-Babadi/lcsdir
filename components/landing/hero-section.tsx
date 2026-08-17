"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Shield, CheckCircle } from "lucide-react";
import Link from "next/link";
import { HeroVideoModal } from "@/components/landing/hero-video-modal";
import { WhatsappChatLink } from "@/components/landing/whatsapp-chat-link";

const services = ["heating", "cooling", "plumbing", "boilers"];

const trustBadges = [
  { icon: Shield, text: "Gas Safe Registered" },
  { icon: CheckCircle, text: "F-Gas Certified" },
];

const sharpenCloudinaryLogo = (url: string) =>
  url.replace("/image/upload/", "/image/upload/f_auto,q_auto,dpr_2.0,w_640/");

const boilerPartners = [
  { name: "Alpha Heating Innovation", logo: sharpenCloudinaryLogo("https://res.cloudinary.com/daucwpsi8/image/upload/v1780416308/images__7_-removebg-preview_ejlfny.png") },
  { name: "Keston",                   logo: sharpenCloudinaryLogo("https://res.cloudinary.com/daucwpsi8/image/upload/v1780224347/download_14_gkkr45.png") },
  { name: "Worcester Bosch",          logo: sharpenCloudinaryLogo("https://res.cloudinary.com/daucwpsi8/image/upload/v1780416108/images__6_-removebg-preview_ngevl5.png") },
  { name: "Vaillant",                 logo: sharpenCloudinaryLogo("https://res.cloudinary.com/daucwpsi8/image/upload/v1780415900/vaillant-logo-aw-2104046-e1754335523397-removebg-preview_qfa7kp.png") },
  { name: "Ideal Boilers",            logo: sharpenCloudinaryLogo("https://res.cloudinary.com/daucwpsi8/image/upload/v1780224347/download_13_dypydk.png") },
  { name: "Glow-worm",                logo: sharpenCloudinaryLogo("https://res.cloudinary.com/daucwpsi8/image/upload/v1780416616/Glow-worm.svg_wniboh.png") },
  { name: "Baxi",                     logo: sharpenCloudinaryLogo("https://res.cloudinary.com/daucwpsi8/image/upload/v1780415770/imgbin-logo-baxi-boiler-brand-product-boiler-8rLhDb7VgAxeeb3DYSKvS7fFJ-removebg-preview_m2dvks.png") },
  { name: "Viseman",                  logo: sharpenCloudinaryLogo("https://res.cloudinary.com/daucwpsi8/image/upload/v1780416374/viessmann_wordmark_rgb_1_vitorange_m0qaxn.png") },
];

const acPartners = [
  { name: "LG",        logo: sharpenCloudinaryLogo("https://res.cloudinary.com/daucwpsi8/image/upload/v1780346343/LG_logo__2014.svg_nu8jfy.png") },
  { name: "Samsung",   logo: sharpenCloudinaryLogo("https://res.cloudinary.com/daucwpsi8/image/upload/v1780346467/kisspng-samsung-galaxy-j2-samsung-electronics-harman-inter-5b028f05a6eae0.9040984915268943416837-removebg-preview_zb9jsk.png") },
  { name: "Panasonic", logo: sharpenCloudinaryLogo("https://res.cloudinary.com/daucwpsi8/image/upload/v1780416686/images__8_-removebg-preview_oecmex.png") },
  { name: "Hitachi",   logo: sharpenCloudinaryLogo("https://res.cloudinary.com/daucwpsi8/image/upload/v1780416374/png-transparent-hitachi-logo-thumbnail-removebg-preview_ipquaa.png") },
  { name: "Daikin",    logo: sharpenCloudinaryLogo("https://res.cloudinary.com/daucwpsi8/image/upload/v1780416373/png-clipart-daikin-applied-americas-business-air-conditioning-heat-pump-business-blue-text-removebg-preview_wnubsj.png") },
  { name: "Mitsubishi",    logo: sharpenCloudinaryLogo("https://res.cloudinary.com/daucwpsi8/image/upload/v1781306375/Mitsubishi_Electric_logo_l4birt.png") },
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
    <section className="relative min-h-[auto] flex items-center pt-20 lg:min-h-screen lg:pt-0 overflow-hidden bg-background mt-0 lg:mt-30">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 w-full py-8 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Content */}
          <div className="order-1 lg:order-1 mt-5">
            <div className={`mb-4 sm:mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <span className="inline-flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-muted-foreground">
                <span className="w-6 sm:w-8 h-px gradient-flame" />
                London&apos;s Trusted Climate Experts · 22 April 2026
              </span>
            </div>

            <div className="mb-6 sm:mb-8">
              <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display leading-[1.1] tracking-tight transition-all duration-1000 text-foreground ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
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

            <p className={`text-base sm:text-lg lg:text-xl text-foreground/70 leading-relaxed max-w-xl mb-6 sm:mb-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Gas Safe and F-Gas registered engineers delivering premium plumbing, 
              heating, and air conditioning services across London. Fast response, 
              fair pricing, and careful workmanship.
            </p>

            <div className={`flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              {trustBadges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <div key={index} className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-foreground/60">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF6A00]" />
                    <span>{badge.text}</span>
                  </div>
                );
              })}
            </div>

            <div className={`flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
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


          </div>

          {/* Right Content: autoplay hero video */}
          <div
            className={`order-2 mt-0 mb-10 lg:mt-0 lg:order-2 relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="w-full max-w-[420px] sm:max-w-[560px] lg:max-w-[680px] mx-auto lg:ml-auto h-[340px] sm:h-[460px] lg:h-[580px] mb-8 overflow-hidden rounded-[36px] border border-border bg-black shadow-2xl">
              <video
                className="h-full w-full object-cover"
                src="/hero-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label="London Climate Systems service video"
              />
            </div>
          </div>
        </div>

        <div className={`mt-8 sm:mt-10 border-y border-border/70 py-5 transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="mb-6">
            <div className="mb-3 flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              <span className="h-px w-8 gradient-flame" />
              Boiler Brands We Work With
            </div>
            <div className="relative overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent" />
              <div className="marquee flex w-max items-center gap-3">
                {[...boilerPartners, ...boilerPartners].map((brand, index) => (
                  <div key={`${brand.name}-${index}`} className="flex h-16 min-w-40 shrink-0 items-center justify-center rounded-lg border border-border bg-white px-4">
                    <img src={brand.logo} alt={`${brand.name} logo`} className="max-h-10 max-w-32 object-contain" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="mb-3 flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              <span className="h-px w-8 gradient-cool" />
              Air Conditioning Brands We Work With
            </div>
            <div className="relative overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent" />
              <div className="marquee-reverse flex w-max items-center gap-3">
                {[...acPartners, ...acPartners].map((brand, index) => (
                  <div key={`${brand.name}-${index}`} className="flex h-16 min-w-40 shrink-0 items-center justify-center rounded-lg border border-border bg-white px-4">
                    <img src={brand.logo} alt={`${brand.name} logo`} className="max-h-10 max-w-32 object-contain" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>      </div>

      <HeroVideoModal />
      <WhatsappChatLink />
    </section>
  );
}
