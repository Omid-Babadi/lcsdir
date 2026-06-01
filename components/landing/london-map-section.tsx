"use client";

import { useState, useEffect, useRef } from "react";
import { MapPin, Droplets, Flame, Wind, Clock, Building2, Zap } from "lucide-react";

type ServiceCallout = {
  id: string;
  service: string;
  area: string;
  lat: number;
  lng: number;
  category: "plumbing" | "heating" | "ac";
};

const callouts: ServiceCallout[] = [
  { id: "c1", service: "Boiler Repair",      area: "Hampstead, NW3",    lat: 51.5559, lng: -0.1777, category: "heating"  },
  { id: "c2", service: "Emergency Plumbing", area: "Camden, NW1",       lat: 51.5390, lng: -0.1426, category: "plumbing" },
  { id: "c3", service: "AC Installation",    area: "Shoreditch, EC2",   lat: 51.5228, lng: -0.0790, category: "ac"       },
  { id: "c4", service: "Bathroom Refit",     area: "Clapham, SW4",      lat: 51.4618, lng: -0.1380, category: "plumbing" },
  { id: "c5", service: "Heating Service",    area: "Kensington, W8",    lat: 51.5000, lng: -0.1933, category: "heating"  },
  { id: "c6", service: "AC Maintenance",     area: "Canary Wharf, E14", lat: 51.5054, lng: -0.0235, category: "ac"       },
  { id: "c7", service: "Combi Install",      area: "Islington, N1",     lat: 51.5362, lng: -0.1033, category: "heating"  },
  { id: "c8", service: "Leak Detection",     area: "Greenwich, SE10",   lat: 51.4826, lng: -0.0077, category: "plumbing" },
];

const categoryStyles = {
  plumbing: {
    icon: Droplets,
    pinBg: "bg-blue-500",
    border: "border-blue-400",
    glow: "shadow-blue-500/60",
    pulse: "bg-blue-400",
    accent: "text-blue-400",
    badge: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    label: "Plumbing",
    dot: "#3b82f6",
  },
  heating: {
    icon: Flame,
    pinBg: "bg-orange-500",
    border: "border-orange-400",
    glow: "shadow-orange-500/60",
    pulse: "bg-orange-400",
    accent: "text-orange-400",
    badge: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    label: "Heating",
    dot: "#f97316",
  },
  ac: {
    icon: Wind,
    pinBg: "bg-cyan-500",
    border: "border-cyan-400",
    glow: "shadow-cyan-500/60",
    pulse: "bg-cyan-400",
    accent: "text-cyan-400",
    badge: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    label: "AC / Cooling",
    dot: "#06b6d4",
  },
};

const LONDON_CENTER = { lat: 51.505, lng: -0.09 };
const ZOOM = 11;

function latLngToPercent(lat: number, lng: number): { top: string; left: string } {
  const scale = Math.pow(2, ZOOM);
  const tileSize = 256;
  const toTileX = (lng: number) => ((lng + 180) / 360) * scale;
  const toTileY = (lat: number) => {
    const sinLat = Math.sin((lat * Math.PI) / 180);
    return ((1 - Math.log((1 + sinLat) / (1 - sinLat)) / (2 * Math.PI)) / 2) * scale;
  };
  const centerX = toTileX(LONDON_CENTER.lng);
  const centerY = toTileY(LONDON_CENTER.lat);
  const mapWidthTiles = 800 / tileSize;
  const mapHeightTiles = 500 / tileSize;
  const dx = (toTileX(lng) - centerX) / mapWidthTiles;
  const dy = (toTileY(lat) - centerY) / mapHeightTiles;
  return {
    top: `${((0.5 + dy) * 100).toFixed(2)}%`,
    left: `${((0.5 + dx) * 100).toFixed(2)}%`,
  };
}

export function LondonMapSection() {
  const [active, setActive] = useState<string | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<unknown>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const initMap = async () => {
      const L = (await import("leaflet")).default;
      if (!mapRef.current || leafletMapRef.current) return;
      const map = L.map(mapRef.current, {
        center: [LONDON_CENTER.lat, LONDON_CENTER.lng],
        zoom: ZOOM,
        zoomControl: false,
        scrollWheelZoom: false,
        dragging: false,
        touchZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        keyboard: false,
        attributionControl: false,
      });
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        { subdomains: "abcd", maxZoom: 19 }
      ).addTo(map);
      leafletMapRef.current = map;
      setMapLoaded(true);
    };
    initMap();
    return () => {
      if (leafletMapRef.current) {
        (leafletMapRef.current as { remove: () => void }).remove();
        leafletMapRef.current = null;
      }
    };
  }, [mounted]);

  const activeCallout = callouts.find((c) => c.id === active);

  return (
    <section
      id="service-area"
      className="relative py-20 lg:py-28 bg-primary overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-orange-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* Section header */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-xs font-semibold tracking-widest uppercase text-orange-300">Live Coverage</span>
            </div>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight"

            >
              Our Service Area
            </h2>
          </div>
          <p className="text-sm sm:text-base text-white/40 max-w-xs leading-relaxed">
            Engineers strategically positioned across all 32 London boroughs for rapid response.
          </p>
        </div>

        {/* Main 2-col layout */}
        <div className="grid lg:grid-cols-[380px_1fr] gap-6 items-stretch">

          {/* ── LEFT PANEL: Tower Bridge + info ── */}
          <div className="flex flex-col gap-4">

            {/* Tower Bridge photo card */}
            <div className="relative rounded-2xl overflow-hidden flex-1 min-h-[260px] border border-white/5 group">
              {/* Real Tower Bridge photo via Unsplash */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="image (30).jpg"
                alt="Tower Bridge London at dusk"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Deep gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/60 to-transparent" />

              {/* Content inside image */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span className="text-xs font-mono text-orange-300/80 tracking-widest uppercase">London, UK</span>
                </div>
                <h3
                  className="text-3xl font-black text-white leading-tight"
                >
                  
                </h3>
                <p className="text-xs text-white/40 mt-1">Serving Greater London since 2018</p>
              </div>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm border border-white/10 rounded-lg px-2.5 py-1.5">
                <span className="text-[10px] font-mono text-white/60 tracking-wider">EST. 2018</span>
              </div>
            </div>

            {/* Stats strip — vertical on left panel */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Building2, v: "32+",    l: "Boroughs"   },
                { icon: Zap,       v: "540",    l: "Jobs / yr"  },
                { icon: Clock,     v: "15 min", l: "Response"   },
              ].map(({ icon: Icon, v, l }) => (
                <div
                  key={l}
                  className="bg-white/[0.03] border border-white/5 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:bg-white/[0.06] hover:border-orange-500/20 transition-all duration-200"
                >
                  <Icon className="w-4 h-4 text-orange-400 mb-1.5" />
                  <div
                    className="text-xl font-black text-white"
                  >
                    {v}
                  </div>
                  <div className="text-[10px] font-mono text-white/35 mt-0.5 uppercase tracking-wider">{l}</div>
                </div>
              ))}
            </div>

            {/* Active callout detail */}
            <div
              className={`bg-white/[0.03] border rounded-xl p-4 transition-all duration-300 min-h-[90px] flex items-center ${
                activeCallout
                  ? "border-orange-500/30 bg-orange-500/5"
                  : "border-white/5"
              }`}
            >
              {activeCallout ? (() => {
                const st = categoryStyles[activeCallout.category];
                const Icon = st.icon;
                return (
                  <div className="flex items-start gap-3 w-full">
                    <div className={`w-10 h-10 rounded-xl ${st.pinBg} flex items-center justify-center flex-shrink-0 shadow-lg ${st.glow}`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-semibold text-sm truncate">{activeCallout.service}</div>
                      <div className="text-white/50 text-xs mt-0.5">{activeCallout.area}</div>
                      <div className={`inline-flex items-center gap-1 mt-2 px-2 py-0.5 rounded-full text-[10px] font-semibold border ${st.badge}`}>
                        <span className="w-1 h-1 rounded-full" style={{ backgroundColor: st.dot }} />
                        {st.label}
                      </div>
                    </div>
                  </div>
                );
              })() : (
                <p className="text-white/25 text-sm mx-auto text-center">
                  Click a pin on the map to see job details
                </p>
              )}
            </div>
          </div>

          {/* ── RIGHT: Full Map ── */}
          <div className="relative rounded-2xl border border-white/5 overflow-hidden" style={{ minHeight: "520px" }}>

            {/* Leaflet base layer */}
            <div ref={mapRef} className="absolute inset-0 w-full h-full z-0" />

            {/* Loading state */}
            {!mapLoaded && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#0f0f14]">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
                  <span className="text-xs font-mono text-white/30 tracking-widest uppercase">Loading map…</span>
                </div>
              </div>
            )}

            {/* Vignette */}
            <div className="absolute inset-0 z-10 pointer-events-none rounded-2xl shadow-[inset_0_0_100px_rgba(0,0,0,0.55)]" />

            {/* Pins */}
            {mapLoaded && callouts.map((c) => {
              const pos = latLngToPercent(c.lat, c.lng);
              const st = categoryStyles[c.category];
              const Icon = st.icon;
              const isActive = active === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setActive(isActive ? null : c.id)}
                  className="absolute z-30 -translate-x-1/2 -translate-y-1/2 group focus:outline-none"
                  style={{ top: pos.top, left: pos.left }}
                  aria-label={`${c.service} in ${c.area}`}
                >
                  {/* Pulse ring */}
                  <span
                    className={`absolute inset-0 rounded-full ${st.pulse} opacity-30 animate-ping`}
                    style={{ animationDuration: "2s", transform: "scale(1.6)" }}
                  />

                  {/* Pin body */}
                  <div
                    className={`relative w-9 h-9 rounded-full ${st.pinBg} border-2 ${st.border} flex items-center justify-center shadow-lg ${st.glow} transition-all duration-200 ${
                      isActive ? "scale-125 shadow-2xl" : "hover:scale-110"
                    }`}
                    style={{ boxShadow: isActive ? `0 0 20px 4px ${st.dot}55` : undefined }}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </div>

                  {/* Tooltip bubble */}
                  <div
                    className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 whitespace-nowrap pointer-events-none transition-all duration-200 ${
                      isActive ? "opacity-100 translate-y-0" : "opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0"
                    }`}
                  >
                    <div className="bg-[#0a0a0f]/95 backdrop-blur-sm border border-white/10 rounded-xl px-3 py-2 shadow-2xl">
                      <div className="text-white text-xs font-semibold">{c.service}</div>
                      <div className="text-white/45 text-[10px] mt-0.5 flex items-center gap-1">
                        <MapPin className="w-2.5 h-2.5" />
                        {c.area}
                      </div>
                    </div>
                    {/* Arrow */}
                    <div className="w-2 h-2 bg-[#0a0a0f]/95 border-r border-b border-white/10 absolute left-1/2 -translate-x-1/2 -bottom-1 rotate-45" />
                  </div>
                </button>
              );
            })}

            {/* Map label */}
            <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-orange-400" />
              <span className="text-xs font-mono text-white/80">Greater London</span>
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 z-20 bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl px-3.5 py-2.5 flex flex-col gap-2">
              {(["heating", "plumbing", "ac"] as const).map((cat) => {
                const st = categoryStyles[cat];
                const Icon = st.icon;
                return (
                  <div key={cat} className="flex items-center gap-2 text-xs text-white/70">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: st.dot }}>
                      <Icon className="w-2.5 h-2.5 text-white" />
                    </span>
                    {st.label}
                  </div>
                );
              })}
            </div>

            {/* Job count badge */}
            <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl px-3 py-2 text-center">
              <div className="text-orange-400 font-black text-lg" style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif" }}>
                {callouts.length}
              </div>
              <div className="text-[9px] font-mono text-white/40 uppercase tracking-wider mt-0.5">Active</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
