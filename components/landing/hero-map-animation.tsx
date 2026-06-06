"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Landmark {
  id: string;
  name: string;
  x: number;
  y: number;
  service: string;
  icon: string;
  color: string;
}

interface Notification {
  id: string;
  landmark: Landmark;
  visible: boolean;
}

interface FloatState {
  x: number;
  y: number;
  scale: number;
  rotation: number;
}

// ─── Landmarks ──────────────────────────────────────────────────────────────

const LANDMARKS: Landmark[] = [
  { id: "bigben",     name: "Alex",    x: 40, y: 52,  service: "Heating & Boiler Service",   icon: "🏠", color: "#EF4444" },
  { id: "tower",      name: "Emma",    x: 64, y: 44,  service: "Plumbing & Pipe Works",      icon: "🏠", color: "#3B82F6" },
  { id: "bridge",     name: "Liam",    x: 68, y: 54,  service: "Emergency Plumbing",         icon: "🏠", color: "#8B5CF6" },
  { id: "eye",        name: "Olivia",  x: 36, y: 60,  service: "Air Conditioning Install",   icon: "🏠", color: "#10B981" },
  { id: "st_pauls",   name: "Noah",    x: 52, y: 44,  service: "Central Heating Systems",    icon: "🏠", color: "#F59E0B" },
  { id: "canary",     name: "Sophia",  x: 76, y: 42,  service: "Commercial HVAC",            icon: "🏠", color: "#EF4444" },
  { id: "buckingham", name: "Jackson", x: 30, y: 48,  service: "Luxury Boiler Installation", icon: "🏠", color: "#FF6A00" },
  { id: "greenwich",  name: "Mia",     x: 74, y: 62,  service: "Heat Pump Systems",          icon: "🏠", color: "#06B6D4" },
  { id: "hampstead",  name: "Lucas",   x: 42, y: 22,  service: "Underfloor Heating",         icon: "🏠", color: "#10B981" },
  { id: "richmond",   name: "Ava",     x: 20, y: 68,  service: "Smart Thermostat Setup",     icon: "🏠", color: "#8B5CF6" },
  { id: "shoreditch", name: "Oliver",  x: 58, y: 32,  service: "Boiler Repair & Service",    icon: "🏠", color: "#F59E0B" },
  { id: "chelsea",    name: "Isabella",x: 28, y: 62,  service: "Bathroom Renovation",        icon: "🏠", color: "#EC4899" },
];

// ─── Service Icons – Placed around the map with background #35464D ──────────

const SERVICES = [
  {
    label: "Plumbing",
    color: "#3B82F6",
    px: 40, py: 120,
    floatAmpX: 4, floatAmpY: 6, floatAmpScale: 0.04, floatAmpRot: 2,
    floatSpeedX: 0.0008, floatSpeedY: 0.0011, floatSpeedScale: 0.0014, floatSpeedRot: 0.0006,
    floatPhaseX: 0,   floatPhaseY: 0.5,  floatPhaseScale: 1.0, floatPhaseRot: 0.2,
    iconPath: "M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z",
  },
  {
    label: "Heating",
    color: "#EF4444",
    px: 640, py: 150,
    floatAmpX: 5, floatAmpY: 5, floatAmpScale: 0.03, floatAmpRot: -3,
    floatSpeedX: 0.0012, floatSpeedY: 0.0009, floatSpeedScale: 0.0010, floatSpeedRot: 0.0007,
    floatPhaseX: 1.2, floatPhaseY: 0.3,  floatPhaseScale: 0.6, floatPhaseRot: 2.1,
    iconPath: "M12 2c0 0-4 4-4 8a4 4 0 008 0c0-2-1-4-1-4s-1 2-3 2c-1 0-2-1-2-2 0-2 2-4 2-4z",
  },
  {
    label: "Air Condition",
    color: "#06B6D4",
    px: 340, py: 30,
    floatAmpX: 6, floatAmpY: 4, floatAmpScale: 0.05, floatAmpRot: 1,
    floatSpeedX: 0.0007, floatSpeedY: 0.0013, floatSpeedScale: 0.0009, floatSpeedRot: 0.0011,
    floatPhaseX: 2.0, floatPhaseY: 1.8,  floatPhaseScale: 0.3, floatPhaseRot: 0.9,
    iconPath: "M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2 2 0 1119 12H2",
  },
  {
    label: "Gas",
    color: "#F59E0B",
    px: 600, py: 460,
    floatAmpX: 7, floatAmpY: 5, floatAmpScale: 0.06, floatAmpRot: -2,
    floatSpeedX: 0.0010, floatSpeedY: 0.0008, floatSpeedScale: 0.0013, floatSpeedRot: 0.0008,
    floatPhaseX: 0.7, floatPhaseY: 2.5,  floatPhaseScale: 1.8, floatPhaseRot: 1.5,
    iconPath: "M12 2S7 6 7 12a5 5 0 0010 0c0-6-5-10-5-10z M12 10a2 2 0 100 4 2 2 0 000-4z",
  },
  {
    label: "Boiler",
    color: "#8B5CF6",
    px: 80, py: 440,
    floatAmpX: 5, floatAmpY: 7, floatAmpScale: 0.03, floatAmpRot: 4,
    floatSpeedX: 0.0009, floatSpeedY: 0.0012, floatSpeedScale: 0.0011, floatSpeedRot: 0.0005,
    floatPhaseX: 1.5, floatPhaseY: 0.8,  floatPhaseScale: 2.2, floatPhaseRot: 0.4,
    iconPath: "M6 4h12v16H6z M10 8h4 M10 12h4 M12 16v2",
  },
  {
    label: "Underfloor Htg",
    color: "#10B981",
    px: 520, py: 30,
    floatAmpX: 8, floatAmpY: 3, floatAmpScale: 0.04, floatAmpRot: -5,
    floatSpeedX: 0.0014, floatSpeedY: 0.0007, floatSpeedScale: 0.0016, floatSpeedRot: 0.0013,
    floatPhaseX: 3.0, floatPhaseY: 1.2,  floatPhaseScale: 0.5, floatPhaseRot: 2.8,
    iconPath: "M4 20h16 M4 16h16 M7 16v4 M17 16v4 M8 12c0-2 2-2 2-4s2 2 2 4 M12 12c0-2 2-2 2-4s2 2 2 4 M16 12c0-2 2-2 2-4s2 2 2 4",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

interface LondonMapAnimationProps {
  backgroundImage?: string;
}

export function LondonMapAnimation({ backgroundImage }: LondonMapAnimationProps) {
  const [activeId, setActiveId]         = useState<string | null>(null);
  const [notification, setNotification] = useState<Notification | null>(null);
  const [floatStates, setFloatStates]   = useState<FloatState[]>(
    SERVICES.map(() => ({ x: 0, y: 0, scale: 1, rotation: 0 }))
  );
  const [pulsePhase, setPulsePhase]     = useState(0);
  const [mapVisible, setMapVisible]     = useState(false);
  const notifTimeout                    = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef                          = useRef<number>(0);

  useEffect(() => {
    setMapVisible(true);
    const startTime = performance.now();
    const animate = (now: number) => {
      const t = now - startTime;
      setFloatStates(
        SERVICES.map((svc) => ({
          x:        Math.sin(t * svc.floatSpeedX + svc.floatPhaseX) * svc.floatAmpX,
          y:        Math.sin(t * svc.floatSpeedY + svc.floatPhaseY) * svc.floatAmpY,
          scale:    1 + Math.sin(t * svc.floatSpeedScale + svc.floatPhaseScale) * svc.floatAmpScale,
          rotation: Math.sin(t * svc.floatSpeedRot + svc.floatPhaseRot) * svc.floatAmpRot,
        }))
      );
      setPulsePhase(t * 0.003);
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  useEffect(() => {
    let idx = 0;
    const cycle = () => {
      showNotification(LANDMARKS[idx % LANDMARKS.length]);
      idx++;
    };
    const interval = setInterval(cycle, 3500);
    cycle();
    return () => clearInterval(interval);
  }, []);

  const showNotification = useCallback((lm: Landmark) => {
    if (notifTimeout.current) clearTimeout(notifTimeout.current);
    setActiveId(lm.id);
    setNotification({ id: lm.id, landmark: lm, visible: true });
    notifTimeout.current = setTimeout(() => {
      setNotification(null);
      setActiveId(null);
    }, 2800);
  }, []);

  const ICON_R = 24;

  return (
    <div
      className="relative w-full h-full flex items-center justify-center select-none overflow-hidden"
      style={{ minHeight: "320px" }}
    >
      {backgroundImage && (
        <div 
          className="absolute inset-0 z-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-100"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      <svg
        viewBox="0 0 680 500"
        className="w-full h-auto max-h-[85vh] sm:max-h-[600px] relative z-10 p-2 sm:p-0"
        style={{ overflow: "visible", opacity: mapVisible ? 1 : 0, transition: "opacity 0.8s ease" }}
        aria-label="Service coverage map"
      >
        <defs>
          <filter id="notif-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="rgba(0,0,0,0.6)" />
          </filter>
          <filter id="marker-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="icon-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="text-bg-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Floating Service Icons with background #35464D */}
        {SERVICES.map((svc, i) => {
          const fs = floatStates[i];
          const ox = svc.px + fs.x;
          const oy = svc.py + fs.y;
          const iconScale = (ICON_R * 1.2) / 24;

          return (
            <g
              key={svc.label}
              transform={`translate(${ox}, ${oy}) rotate(${fs.rotation}) scale(${fs.scale})`}
              style={{ willChange: "transform" }}
            >
              <circle r={ICON_R + 8} fill="none" stroke={svc.color} opacity="0.2" strokeWidth="1" />
              <circle r={ICON_R} fill="#35464D" stroke={svc.color} strokeWidth="2.5" />
              <g transform={`translate(${-ICON_R * 0.7}, ${-ICON_R * 0.7}) scale(${iconScale})`}>
                <path
                  d={svc.iconPath}
                  fill="none"
                  stroke={svc.color}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#icon-glow)"
                />
              </g>
            </g>
          );
        })}

        {/* Landmark Markers */}
        {LANDMARKS.map((lm) => {
          const px = (lm.x / 100) * 680;
          const py = (lm.y / 100) * 500;
          const isActive = activeId === lm.id;
          const pulse = Math.abs(Math.sin(pulsePhase + LANDMARKS.indexOf(lm) * 0.7));
          const baseR = isActive ? 18 : 13;

          return (
            <g
              key={lm.id}
              transform={`translate(${px}, ${py})`}
              style={{ cursor: "pointer" }}
              onClick={() => showNotification(lm)}
            >
              {isActive && (
                <>
                  <circle r={35 + pulse * 25} fill="none" stroke={lm.color} strokeWidth="1.5" opacity={0.3 * (1 - pulse)} />
                  <circle r={25 + pulse * 15} fill="none" stroke={lm.color} strokeWidth="2" opacity={0.5 * (1 - pulse * 0.5)} />
                </>
              )}
              {!isActive && (
                <circle r={16 + pulse * 8} fill={lm.color} opacity={0.1 + pulse * 0.08} />
              )}
              <circle
                r={baseR}
                fill={isActive ? lm.color : "rgba(8,8,20,0.9)"}
                stroke={lm.color}
                strokeWidth={isActive ? 0 : 2.5}
                filter="url(#marker-glow)"
                style={{ transition: "r 0.3s ease, fill 0.3s ease" }}
              />
              <text textAnchor="middle" dominantBaseline="central" fontSize={isActive ? 18 : 15}>
                {lm.icon}
              </text>
              <g transform={`translate(0, ${isActive ? 30 : 24})`}>
                <rect x="-32" y="-12" width="64" height="22" rx="11" fill="white" stroke={lm.color} strokeWidth="1.5" opacity="0.95" filter="url(#text-bg-glow)" />
                <text textAnchor="middle" dominantBaseline="central" fontSize={isActive ? 12 : 11} fill={lm.color} fontFamily="monospace" fontWeight="800" letterSpacing="0.8">
                  {lm.name.toUpperCase()}
                </text>
              </g>
            </g>
          );
        })}

        {/* Notification Bubble */}
        {notification && notification.visible && (() => {
          const lm = notification.landmark;
          const px = (lm.x / 100) * 680;
          const py = (lm.y / 100) * 500;
          const bubbleW = 360, bubbleH = 130;
          let bx = px - bubbleW / 2;
          let by = py - bubbleH - 40;
          if (bx < 10) bx = 10;
          if (bx + bubbleW > 670) bx = 670 - bubbleW;
          if (by < 8) by = py + 40;
          const tailAtBottom = by < py;
          const tailX = Math.max(bx + 20, Math.min(px, bx + bubbleW - 20));
          const gradientId = `notifGrad-${notification.id}`;
          return (
            <g key={notification.id} filter="url(#notif-shadow)">
              <defs>
                <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(20,20,35,0.98)" />
                  <stop offset="100%" stopColor="rgba(10,10,20,0.98)" />
                </linearGradient>
              </defs>
              <line x1={px} y1={py - 18} x2={tailX} y2={tailAtBottom ? by + bubbleH : by} stroke={lm.color} strokeWidth="2.5" strokeDasharray="5,4" opacity="0.8" />
              <rect x={bx} y={by} width={bubbleW} height={bubbleH} rx="20" fill={`url(#${gradientId})`} stroke={lm.color} strokeWidth="2.5" />
              <rect x={bx + 4} y={by + 4} width={bubbleW - 8} height="6" rx="3" fill={lm.color} opacity="0.9" />
              <text x={bx + 20} y={by + 38} fontSize="22" filter="url(#text-bg-glow)">{lm.icon}</text>
              <text x={bx + 56} y={by + 38} fontSize="18" fill={lm.color} fontFamily="monospace" fontWeight="900" letterSpacing="1.5">
                {lm.name.toUpperCase()}
              </text>
              <text x={bx + 20} y={by + 68} fontSize="14" fill="rgba(255,255,255,0.6)" fontFamily="monospace" fontWeight="600">NEEDS SERVICE:</text>
              <text x={bx + 20} y={by + 98} fontSize="16" fill="white" fontFamily="monospace" fontWeight="700" letterSpacing="0.5">
                {lm.service.length > 34 ? lm.service.slice(0, 34) + "…" : lm.service}
              </text>
            </g>
          );
        })()}

        {/* Compass rose removed entirely */}

        {/* Scale bar */}
      </svg>
    </div>
  );
}