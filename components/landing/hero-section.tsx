"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

// ─── Brand data ──────────────────────────────────────────────────────────────

const sharpen = (url: string) =>
  url.replace("/image/upload/", "/image/upload/f_auto,q_auto,dpr_2.0,w_640/");

const boilerBrands = [
  { name: "Alpha Heating Innovation", logo: sharpen("https://res.cloudinary.com/daucwpsi8/image/upload/v1780416308/images__7_-removebg-preview_ejlfny.png") },
  { name: "Keston",                   logo: sharpen("https://res.cloudinary.com/daucwpsi8/image/upload/v1780224347/download_14_gkkr45.png") },
  { name: "Worcester Bosch",          logo: sharpen("https://res.cloudinary.com/daucwpsi8/image/upload/v1780416108/images__6_-removebg-preview_ngevl5.png") },
  { name: "Vaillant",                 logo: sharpen("https://res.cloudinary.com/daucwpsi8/image/upload/v1780415900/vaillant-logo-aw-2104046-e1754335523397-removebg-preview_qfa7kp.png") },
  { name: "Ideal Boilers",            logo: sharpen("https://res.cloudinary.com/daucwpsi8/image/upload/v1780224347/download_13_dypydk.png") },
  { name: "Glow-worm",                logo: sharpen("https://res.cloudinary.com/daucwpsi8/image/upload/v1780416616/Glow-worm.svg_wniboh.png") },
  { name: "Baxi",                     logo: sharpen("https://res.cloudinary.com/daucwpsi8/image/upload/v1780415770/imgbin-logo-baxi-boiler-brand-product-boiler-8rLhDb7VgAxeeb3DYSKvS7fFJ-removebg-preview_m2dvks.png") },
  { name: "Viessmann",                logo: sharpen("https://res.cloudinary.com/daucwpsi8/image/upload/v1780416374/viessmann_wordmark_rgb_1_vitorange_m0qaxn.png") },
];

const acBrands = [
  { name: "LG",        logo: sharpen("https://res.cloudinary.com/daucwpsi8/image/upload/v1780346343/LG_logo__2014.svg_nu8jfy.png") },
  { name: "Samsung",   logo: sharpen("https://res.cloudinary.com/daucwpsi8/image/upload/v1780346467/kisspng-samsung-galaxy-j2-samsung-electronics-harman-inter-5b028f05a6eae0.9040984915268943416837-removebg-preview_zb9jsk.png") },
  { name: "Panasonic", logo: sharpen("https://res.cloudinary.com/daucwpsi8/image/upload/v1780416686/images__8_-removebg-preview_oecmex.png") },
  { name: "Hitachi",   logo: sharpen("https://res.cloudinary.com/daucwpsi8/image/upload/v1780416374/png-transparent-hitachi-logo-thumbnail-removebg-preview_ipquaa.png") },
  { name: "Daikin",    logo: sharpen("https://res.cloudinary.com/daucwpsi8/image/upload/v1780416373/png-clipart-daikin-applied-americas-business-air-conditioning-heat-pump-business-blue-text-removebg-preview_wnubsj.png") },
];

// ─── Service word cycling ─────────────────────────────────────────────────────

const services: { word: string; color: string }[] = [
  { word: "heating",  color: "#FF6A00" },
  { word: "cooling",  color: "#38bdf8" },
  { word: "plumbing", color: "#22c55e" },
  { word: "boilers",  color: "#f59e0b" },
];

// ─── Orbit node definitions ───────────────────────────────────────────────────

interface OrbitNode {
  /** SVG path or simple JSX icon string. We inline SVGs for zero-dep. */
  label: string;
  color: string;
  bg: string;
  border: string;
  /** Angle in degrees (0 = top) */
  angle: number;
  /** Which orbit ring (1 | 2 | 3) */
  ring: 1 | 2 | 3;
}

const orbitNodes: OrbitNode[] = [
  // Ring 1 – innermost
  { label: "Heating",     color: "#FF6A00", bg: "rgba(255,106,0,0.09)",   border: "rgba(255,106,0,0.35)",   angle: 0,   ring: 1 },
  { label: "Radiators",   color: "#FF6A00", bg: "rgba(255,106,0,0.09)",   border: "rgba(255,106,0,0.35)",   angle: 180, ring: 1 },
  // Ring 2 – middle
  { label: "Cooling",     color: "#38bdf8", bg: "rgba(56,189,248,0.09)",  border: "rgba(56,189,248,0.35)",  angle: 0,   ring: 2 },
  { label: "Plumbing",    color: "#22c55e", bg: "rgba(34,197,94,0.09)",   border: "rgba(34,197,94,0.35)",   angle: 180, ring: 2 },
  { label: "Boilers",     color: "#f59e0b", bg: "rgba(245,158,11,0.09)",  border: "rgba(245,158,11,0.35)",  angle: 90,  ring: 2 },
  { label: "Air-con",     color: "#38bdf8", bg: "rgba(56,189,248,0.09)",  border: "rgba(56,189,248,0.35)",  angle: 270, ring: 2 },
  // Ring 3 – outer
  { label: "Repairs",     color: "#a78bfa", bg: "rgba(167,139,250,0.09)", border: "rgba(167,139,250,0.35)", angle: 0,   ring: 3 },
  { label: "Service",     color: "#38bdf8", bg: "rgba(56,189,248,0.09)",  border: "rgba(56,189,248,0.35)",  angle: 180, ring: 3 },
  { label: "Maintenance", color: "#f59e0b", bg: "rgba(245,158,11,0.09)",  border: "rgba(245,158,11,0.35)",  angle: 90,  ring: 3 },
  { label: "Domestic",    color: "#FF6A00", bg: "rgba(255,106,0,0.09)",   border: "rgba(255,106,0,0.35)",   angle: 270, ring: 3 },
];

// ─── Icon SVGs (inline, no dep) ───────────────────────────────────────────────

function IconFlame({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2c0 6-6 6-6 12a6 6 0 0 0 12 0c0-4-2-6-2-9-1.5 2-2 3.5-2 5-1-1.5-2-3-2-8z"/>
    </svg>
  );
}
function IconSnowflake({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/>
      <path d="m20 16-4-4 4-4M4 8l4 4-4 4M16 4l-4 4-4-4M8 20l4-4 4 4"/>
    </svg>
  );
}
function IconDroplet({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
    </svg>
  );
}
function IconBoiler({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3"/>
    </svg>
  );
}
function IconWind({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9.59 4.59A2 2 0 1 1 11 8H2"/><path d="M12.59 19.41A2 2 0 1 0 14 16H2"/>
      <path d="M6.8 13.8A2 2 0 1 0 8 17H2M15 8h7"/>
    </svg>
  );
}
function IconTool({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  );
}
function IconCheck({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}
function IconCalendar({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  );
}
function IconHome({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  );
}
function IconTemperature({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>
    </svg>
  );
}
function IconCenter() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      <path d="M12 2.69l3 3-3 1.5-3-1.5z" fill="#FF6A00" fillOpacity=".2"/>
    </svg>
  );
}

function nodeIcon(label: string, color: string) {
  switch (label) {
    case "Heating":     return <IconFlame color={color} />;
    case "Radiators":   return <IconTemperature color={color} />;
    case "Cooling":     return <IconSnowflake color={color} />;
    case "Plumbing":    return <IconDroplet color={color} />;
    case "Boilers":     return <IconBoiler color={color} />;
    case "Air-con":     return <IconWind color={color} />;
    case "Repairs":     return <IconTool color={color} />;
    case "Service":     return <IconCheck color={color} />;
    case "Maintenance": return <IconCalendar color={color} />;
    case "Domestic":    return <IconHome color={color} />;
    default:            return <IconHome color={color} />;
  }
}

// ─── Orbit sizes ──────────────────────────────────────────────────────────────

const RING_RADIUS: Record<1 | 2 | 3, number> = { 1: 100, 2: 160, 3: 210 };
const RING_DURATION: Record<1 | 2 | 3, number> = { 1: 20, 2: 30, 3: 45 };
// rings 1 and 3 go CW, ring 2 goes CCW
const RING_DIR: Record<1 | 2 | 3, 1 | -1> = { 1: 1, 2: -1, 3: 1 };

// ─── Marquee strip ────────────────────────────────────────────────────────────

function MarqueeStrip({ brands, reverse }: { brands: { name: string; logo: string }[]; reverse?: boolean }) {
  const doubled = [...brands, ...brands, ...brands, ...brands];
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white to-transparent" />
      <div
        className={`flex w-max items-center gap-3 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {doubled.map((b, i) => (
          <div
            key={`${b.name}-${i}`}
            className="flex h-11 min-w-[110px] shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white px-4 transition-all duration-200 hover:border-gray-300 hover:shadow-sm"
          >
            <img
              src={b.logo}
              alt={b.name}
              className="max-h-7 max-w-[80px] object-contain opacity-60 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Animated word ────────────────────────────────────────────────────────────

function AnimatedWord() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((p) => (p + 1) % services.length);
        setAnimating(false);
      }, 300);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const { word, color } = services[index];

  return (
    <span
      className="inline-block transition-all duration-300"
      style={{
        color,
        opacity: animating ? 0 : 1,
        transform: animating ? "translateY(8px)" : "translateY(0)",
      }}
    >
      {word}
    </span>
  );
}

// ─── Pulse rings ──────────────────────────────────────────────────────────────

function PulseRings() {
  return (
    <>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-300/30 animate-pulse-ring"
          style={{ animationDelay: `${i * 1}s` }}
        />
      ))}
    </>
  );
}

// ─── Single orbit node ────────────────────────────────────────────────────────

function OrbitNode({ node, elapsed }: { node: OrbitNode; elapsed: number }) {
  const r = RING_RADIUS[node.ring];
  const dir = RING_DIR[node.ring];
  const dur = RING_DURATION[node.ring];
  const baseAngle = node.angle * (Math.PI / 180);
  const rotation = ((elapsed / dur) * Math.PI * 2 * dir) % (Math.PI * 2);
  const angle = baseAngle + rotation;

  const x = Math.sin(angle) * r;
  const y = -Math.cos(angle) * r;

  return (
    <div
      className="absolute flex flex-col items-center gap-1"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: "translate(-50%, -50%)",
        zIndex: 10,
      }}
    >
      <div
        className="flex h-11 w-11 items-center justify-center rounded-full shadow-sm transition-transform duration-200 hover:scale-110"
        style={{
          background: node.bg,
          border: `1px solid ${node.border}`,
        }}
      >
        {nodeIcon(node.label, node.color)}
      </div>
      <span
        className="whitespace-nowrap rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider"
        style={{
          background: node.bg,
          color: node.color,
          border: `0.5px solid ${node.border}`,
        }}
      >
        {node.label}
      </span>
    </div>
  );
}

// ─── Main orbital scene ───────────────────────────────────────────────────────

function OrbitalScene() {
  const [elapsed, setElapsed] = useState(0);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    const tick = (ts: number) => {
      if (startRef.current === null) startRef.current = ts;
      setElapsed((ts - startRef.current) / 1000);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="relative mx-auto" style={{ width: 460, height: 460 }}>
      {/* Pulse rings */}
      <PulseRings />

      {/* Orbit dashes */}
      {([1, 2, 3] as const).map((ring) => {
        const d = RING_RADIUS[ring] * 2;
        return (
          <div
            key={ring}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: d,
              height: d,
              border: "0.5px dashed rgba(0,0,0,0.1)",
            }}
          />
        );
      })}

      {/* Nodes */}
      {orbitNodes.map((node) => (
        <OrbitNode key={`${node.ring}-${node.label}`} node={node} elapsed={elapsed} />
      ))}

      {/* Center hub */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div
          className="flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full bg-white shadow-lg"
          style={{ border: "1px solid rgba(255,106,0,0.2)", boxShadow: "0 0 0 16px rgba(255,106,0,0.04), 0 8px 32px rgba(255,106,0,0.12)" }}
        >
          <IconCenter />
          <span className="mt-1 text-[9px] font-bold uppercase tracking-widest text-orange-500">London</span>
        </div>
      </div>

      {/* Floating stat – top right */}
      <div
        className="absolute right-2 top-10 z-30 rounded-2xl bg-white px-4 py-3 shadow-md"
        style={{ border: "0.5px solid rgba(0,0,0,0.08)" }}
      >
        <p className="text-xl font-bold text-orange-500">500+</p>
        <p className="text-[10px] font-medium uppercase tracking-wide text-gray-400">Jobs Monthly</p>
      </div>

      {/* Floating stat – bottom left */}
      <div
        className="absolute bottom-10 left-2 z-30 rounded-2xl bg-white px-4 py-3 shadow-md"
        style={{ border: "0.5px solid rgba(0,0,0,0.08)" }}
      >
        <p className="text-xl font-bold text-gray-800">4.9/5</p>
        <p className="text-[10px] font-medium uppercase tracking-wide text-gray-400">Customer Rating</p>
      </div>
    </div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

export function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  const fadeIn = (delay: number) =>
    `transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} [transition-delay:${delay}ms]`;

  return (
    <>
      {/* ── Keyframes injected once ── */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0) }
          to   { transform: translateX(-50%) }
        }
        @keyframes marqueeReverse {
          from { transform: translateX(-50%) }
          to   { transform: translateX(0) }
        }
        @keyframes pulseRing {
          0%   { width:90px;  height:90px;  opacity:0.5 }
          100% { width:360px; height:360px; opacity:0   }
        }
        .animate-marquee         { animation: marquee        28s linear infinite }
        .animate-marquee-reverse { animation: marqueeReverse 24s linear infinite }
        .animate-pulse-ring      { animation: pulseRing       3s ease-out  infinite }
      `}</style>

      <section className="relative min-h-screen overflow-hidden bg-white pt-20 lg:pt-0">
        {/* Subtle warm radial wash on right */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 60% at 75% 45%, rgba(255,106,0,0.05) 0%, transparent 70%)",
          }}
        />

        {/* Fine dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0,0,0,0.12) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-12">
          {/* ── Main grid ── */}
          <div className="grid min-h-screen items-center gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Left */}
            <div className="py-24 lg:py-0">
              {/* Eyebrow */}
              <div className={`mb-6 ${fadeIn(0)}`}>
                <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-gray-400">
                  <span className="h-px w-8 bg-gradient-to-r from-orange-500 to-amber-400" />
                  London's Trusted Climate Experts Since 2018
                </span>
              </div>

              {/* Headline */}
              <h1
                className={`mb-6 font-extrabold leading-[1.06] tracking-tight text-gray-900 ${fadeIn(80)}`}
                style={{ fontSize: "clamp(2.4rem, 4.5vw, 4rem)" }}
              >
                Expert solutions
                <br />
                for your{" "}
                <AnimatedWord />
              </h1>

              {/* Description */}
              <p className={`mb-8 max-w-lg text-[1.05rem] leading-relaxed text-gray-500 ${fadeIn(160)}`}>
                Gas Safe and F-Gas registered engineers delivering premium plumbing,
                heating, and air conditioning services across London. Fast response,
                fair pricing, and careful workmanship.
              </p>

              {/* Trust badges */}
              <div className={`mb-8 flex flex-wrap gap-3 ${fadeIn(240)}`}>
                {[
                  { icon: <IconCheck color="#FF6A00" />, text: "Gas Safe Registered" },
                  { icon: <IconCheck color="#FF6A00" />, text: "F-Gas Certified" },
                  { icon: <IconCheck color="#FF6A00" />, text: "Same-day Response" },
                ].map((b) => (
                  <span
                    key={b.text}
                    className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 shadow-sm"
                  >
                    {b.icon}
                    {b.text}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className={`mb-8 flex flex-wrap gap-3 ${fadeIn(320)}`}>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-orange-200 transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-orange-300"
                >
                  Get Free Quote
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </Link>
                <a
                  href="tel:07473423003"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-orange-500 px-7 py-3.5 text-sm font-semibold text-orange-500 transition-all duration-200 hover:bg-orange-50 hover:-translate-y-0.5"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  07473 423003
                </a>
              </div>

              {/* Emergency bar */}
              <div
                className={`rounded-xl border border-blue-100 bg-blue-50/60 px-4 py-3 text-sm text-gray-700 ${fadeIn(400)}`}
              >
                <span className="font-semibold text-blue-600">Fast Response: </span>
                Our engineers are spread across London ready to help. No call-out fees.
              </div>
            </div>

            {/* Right – orbital */}
            <div
              className={`flex items-center justify-center transition-all duration-1000 ${
                visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              } [transition-delay:200ms]`}
            >
              <OrbitalScene />
            </div>
          </div>

          {/* ── Brand strips ── */}
          <div className="border-t border-gray-100 py-10">
            {/* Boiler brands */}
            <div className="mb-8">
              <p className="mb-3 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.14em] text-gray-400">
                <span className="h-px w-7 bg-gradient-to-r from-orange-500 to-amber-400" />
                Boiler Brands We Work With
              </p>
              <MarqueeStrip brands={boilerBrands} />
            </div>

            {/* AC brands */}
            <div>
              <p className="mb-3 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.14em] text-gray-400">
                <span className="h-px w-7 bg-gradient-to-r from-sky-400 to-blue-500" />
                Air Conditioning Brands We Work With
              </p>
              <MarqueeStrip brands={acBrands} reverse />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}