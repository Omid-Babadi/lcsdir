"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Building2, Clock, Droplets, Flame, MapPin, Wind, Zap } from "lucide-react";

type ServiceCategory = "plumbing" | "heating" | "ac";

type ServicePhase = {
  id: string;
  service: string;
  area: string;
  detail: string;
  start: number;
  end: number;
  category: ServiceCategory;
};

const TOTAL_FRAMES = 121;
const FRAME_DIRECTORY = "/london-map-frames";
const FRAME_WIDTH = 864;
const FRAME_HEIGHT = 1000;
const FRAME_PREFETCH_RADIUS = 2;

// How many extra vh the canvas travels downward over the full scroll.
// The section height is expanded by the same amount so nothing overflows.
const PARALLAX_VH = 50;

const servicePhases: ServicePhase[] = [
  {
    id: "coverage",
    service: "London-wide coverage",
    area: "All 32 boroughs",
    detail: "Strategically placed engineers for plumbing, heating, and cooling work across Greater London.",
    start: 0.02,
    end: 0.24,
    category: "heating",
  },
  {
    id: "plumbing",
    service: "Emergency plumbing",
    area: "Camden, Clapham, Greenwich",
    detail: "Rapid leak tracing, burst pipe repair, bathroom refits, and urgent call-outs.",
    start: 0.28,
    end: 0.48,
    category: "plumbing",
  },
  {
    id: "heating",
    service: "Boilers & heating",
    area: "Hampstead, Kensington, Islington",
    detail: "Gas Safe boiler repairs, installs, annual servicing, and central heating maintenance.",
    start: 0.52,
    end: 0.72,
    category: "heating",
  },
  {
    id: "cooling",
    service: "AC & cooling systems",
    area: "Shoreditch, Canary Wharf",
    detail: "F-Gas certified installation, maintenance, and responsive cooling-system repairs.",
    start: 0.76,
    end: 0.98,
    category: "ac",
  },
];

const categoryStyles = {
  plumbing: {
    icon: Droplets,
    color: "text-blue-500",
    bg: "bg-blue-500",
    soft: "bg-blue-500/10",
    border: "border-blue-400/30",
    label: "Plumbing",
  },
  heating: {
    icon: Flame,
    color: "text-orange-500",
    bg: "bg-orange-500",
    soft: "bg-orange-500/10",
    border: "border-orange-400/30",
    label: "Heating",
  },
  ac: {
    icon: Wind,
    color: "text-cyan-500",
    bg: "bg-cyan-500",
    soft: "bg-cyan-500/10",
    border: "border-cyan-400/30",
    label: "AC / Cooling",
  },
};

function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

function frameUrl(index: number) {
  return `${FRAME_DIRECTORY}/frame-${String(index).padStart(4, "0")}.webp`;
}

function loadFrame(index: number) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.decoding = "async";
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = frameUrl(index);
  });
}

function drawContain(
  context: CanvasRenderingContext2D,
  image: HTMLImageElement,
  canvas: HTMLCanvasElement,
) {
  const ratio = Math.min(canvas.width / FRAME_WIDTH, canvas.height / FRAME_HEIGHT);
  const width = FRAME_WIDTH * ratio;
  const height = FRAME_HEIGHT * ratio;
  const x = (canvas.width - width) / 2;
  const y = (canvas.height - height) / 2;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(image, x, y, width, height);
}

export function LondonMapSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const loadingFramesRef = useRef<Set<number>>(new Set());
  const targetFrameRef = useRef(0);
  const drawnFrameRef = useRef(-1);
  const animationFrameRef = useRef<number | null>(null);

  const [loadProgress, setLoadProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [shouldLoadFrames, setShouldLoadFrames] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  // Raw pixels scrolled since the section entered the viewport
  const [scrolledPx, setScrolledPx] = useState(0);

  // Only enable parallax on large viewports (Tailwind 'lg' == 1024px)
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handler = (e: MediaQueryListEvent) => setIsLarge(e.matches);
    setIsLarge(mq.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  const activePhase = useMemo(
    () =>
      servicePhases.find(
        (phase) => scrollProgress >= phase.start && scrollProgress <= phase.end,
      ) ?? servicePhases[0],
    [scrollProgress],
  );

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.round(rect.width * dpr));
    const height = Math.max(1, Math.round(rect.height * dpr));

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      drawnFrameRef.current = -1;
    }
  }, []);

  const updateScrollProgress = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const runway = rect.height - window.innerHeight;
    const rawScrolled = Math.max(0, -rect.top);
    const clampedScrolled = runway > 0 ? Math.min(rawScrolled, runway) : 0;
    const progress = runway > 0 ? clamp(rawScrolled / runway) : 0;

    targetFrameRef.current = Math.min(
      TOTAL_FRAMES - 1,
      Math.floor(progress * TOTAL_FRAMES),
    );
    setScrollProgress(progress);
    setScrolledPx(clampedScrolled);
  }, []);

  const requestFrame = useCallback((index: number) => {
    const frameNumber = clamp(index, 0, TOTAL_FRAMES - 1);
    if (
      framesRef.current.has(frameNumber) ||
      loadingFramesRef.current.has(frameNumber)
    ) {
      return;
    }

    loadingFramesRef.current.add(frameNumber);
    loadFrame(frameNumber + 1)
      .then((image) => {
        framesRef.current.set(frameNumber, image);
        if (frameNumber === targetFrameRef.current) {
          drawnFrameRef.current = -1;
        }
      })
      .catch(() => {
        setLoadProgress(0);
      })
      .finally(() => {
        loadingFramesRef.current.delete(frameNumber);
        setLoadProgress(
          Math.round((framesRef.current.size / TOTAL_FRAMES) * 100),
        );
        if (framesRef.current.size > 0) {
          setIsReady(true);
        }
      });
  }, []);

  const requestNearbyFrames = useCallback(() => {
    const targetFrame = targetFrameRef.current;

    requestFrame(targetFrame);
    for (let offset = 1; offset <= FRAME_PREFETCH_RADIUS; offset += 1) {
      requestFrame(targetFrame - offset);
      requestFrame(targetFrame + offset);
    }
  }, [requestFrame]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadFrames(true);
          observer.disconnect();
        }
      },
      { rootMargin: "900px 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoadFrames) return;

    resizeCanvas();
    updateScrollProgress();
    requestNearbyFrames();
  }, [requestNearbyFrames, resizeCanvas, shouldLoadFrames, updateScrollProgress]);

  useEffect(() => {
    if (!shouldLoadFrames) return;
    requestNearbyFrames();
  }, [requestNearbyFrames, scrollProgress, shouldLoadFrames]);

  useEffect(() => {
    function handleResize() {
      resizeCanvas();
      updateScrollProgress();
    }

    resizeCanvas();
    updateScrollProgress();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", updateScrollProgress, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, [resizeCanvas, updateScrollProgress]);

  useEffect(() => {
    function tick() {
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");
      const frameIndex = targetFrameRef.current;
      const frame = framesRef.current.get(frameIndex);

      if (canvas && context && frame && drawnFrameRef.current !== frameIndex) {
        drawContain(context, frame, canvas);
        drawnFrameRef.current = frameIndex;
      }

      animationFrameRef.current = requestAnimationFrame(tick);
    }

    animationFrameRef.current = requestAnimationFrame(tick);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const ActiveIcon = categoryStyles[activePhase.category].icon;

  // The parallax offset in px — match scroll speed on large screens.
  // Disabled on small screens to avoid layout issues.
  const parallaxFactor = isLarge ? 1 : 0;
  const canvasOffsetPx = scrolledPx * parallaxFactor;

  return (
    <section
      id="service-area"
      ref={sectionRef}
      // Base 300vh for the scroll runway + PARALLAX_VH so the section is
      // tall enough to accommodate the canvas drift without a white gap.
      className="relative bg-[#f7f5ef] h-auto"
    >
      {/* Sticky wrapper is exactly one viewport tall — no overflow issues */}
      <div className="lg:sticky lg:h-[150vh] h-auto lg:pb-200 pb-14 overflow-hidden">
        {/* Progress bar */}
        <div className="absolute inset-x-0 top-0 z-30 h-1 bg-black/5">
          <div
            className="h-full bg-orange-500 transition-[width] duration-100"
            style={{ width: `${Math.round(scrollProgress * 100)}%` }}
          />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_45%,rgba(249,115,22,0.13),transparent_42%),linear-gradient(135deg,#ffffff_0%,#f3eee3_52%,#e5edf1_100%)]" />

        <div className="relative z-10 mx-auto grid h-full max-w-[1400px] grid-cols-1 items-center gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[390px_1fr] lg:px-12">
          {/* LEFT PANEL — moves only on large screens to avoid overlap */}
          <div
            className="order-2 lg:order-1 "
            style={{
              transform: isLarge ? `translateY(${canvasOffsetPx}px)` : undefined,
              willChange: isLarge ? "transform" : undefined,
            }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-card/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              Live Coverage
            </div>

            <h2 className="max-w-sm text-4xl font-black leading-[1.02] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Our Service Area
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground sm:text-base">
              Scroll through London Climate Systems coverage, from rapid plumbing
              repairs to heating and AC engineering across Greater London.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { icon: Building2, value: "32+", label: "Boroughs" },
                { icon: Zap, value: "540", label: "Jobs / yr" },
                { icon: Clock, value: "15 min", label: "Response" },
              ].map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="p-3 text-center"
                >
                  <Icon className="mx-auto mb-0.5 h-4 w-4 text-orange-600" />
                  <div className="text-lg font-black text-foreground">{value}</div>
                  <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                    {label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT PANEL — canvas container is position:relative, canvas is
              absolutely positioned and moves down with scroll via `top`.
              The container clips nothing (overflow:visible) but the parent
              sticky div's overflow:hidden keeps it from affecting page layout. */}
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto h-[60vh] min-h-[420px] w-full max-w-[720px] lg:h-[82vh] lg:max-w-[760px]">
              {/* Canvas shifts down by scrolledPx * parallaxFactor so it
                  visually "follows" the user while the sticky container holds still */}
              <div
                className="absolute inset-0"
                style={{
                    transform: isLarge ? `translateY(${canvasOffsetPx}px)` : undefined,
                    willChange: isLarge ? "transform" : undefined,
                  }}
              >
                <canvas
                  ref={canvasRef}
                  className="h-full w-full [mask-image:radial-gradient(ellipse_63%_67%_at_50%_49%,black_30%,transparent_95%)]"
                  aria-label="Scroll-controlled London systems animation"
                />

                {!isReady && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-60 rounded-lg border border-border bg-card/90 p-4 text-center shadow-xl backdrop-blur">
                      <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full bg-orange-500 transition-[width] duration-100"
                          style={{ width: `${loadProgress}%` }}
                        />
                      </div>
                      <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Loading animation {loadProgress}%
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Floating labels sit outside the parallax div so they don't drift */}
              <div className="pointer-events-none absolute left-1/2 top-[46%] hidden w-full max-w-[760px] -translate-x-1/2 lg:block">
                {servicePhases.map((phase, index) => {
                  const style = categoryStyles[phase.category];
                  const Icon = style.icon;
                  const isVisible =
                    scrollProgress >= phase.start && scrollProgress <= phase.end;

                  return (
                    <div
                      key={phase.id}
                      className={`absolute max-w-[230px] rounded-lg border bg-card/90 p-3 shadow-xl shadow-slate-900/10 backdrop-blur-md transition-all duration-100 ${style.border} ${
                        isVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                      } ${index % 2 === 0 ? "left-0" : "right-0"}`}
                      style={{ top: `${index * 78 - 112}px` }}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`flex h-7 w-7 items-center justify-center rounded-full ${style.soft}`}>
                          <Icon className={`h-3.5 w-3.5 ${style.color}`} />
                        </span>
                        <span className="text-xs font-bold text-foreground">
                          {phase.service}
                        </span>
                      </div>
                      <p className="mt-2 text-xs leading-5 text-muted-foreground">
                        {phase.area}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
