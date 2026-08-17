"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, Check, MapPin } from "lucide-react";

import { cn } from "@/lib/utils";

const FRAME_START = 3;
const FRAME_COUNT = 118;

const phases = [
  {
    kicker: "01 / Precision",
    title: "Inside the rhythm of London.",
  },
  {
    kicker: "02 / Landmark",
    title: "Built around the city you know.",
  },
  {
    kicker: "03 / Energy",
    title: "Heating and cooling in motion.",
  },
  {
    kicker: "04 / Coverage",
    title: "Greater London, connected.",
  },
];

function getFrameSource(index: number) {
  return (
    "/london-scroll/frame-" +
    String(index + FRAME_START).padStart(4, "0") +
    ".webp"
  );
}

export function LondonScrollSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<Array<HTMLImageElement | null>>(
    new Array(FRAME_COUNT).fill(null)
  );
  const loadedRef = useRef<boolean[]>(new Array(FRAME_COUNT).fill(false));
  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(0);
  const lastDrawnRef = useRef(-1);
  const [isReady, setIsReady] = useState(false);
  const [loadPercent, setLoadPercent] = useState(0);
  const [phaseIndex, setPhaseIndex] = useState(0);
  useEffect(() => {
    const container = containerRef.current;
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: false });
    if (!container || !stage || !canvas || !context) return;

    let cancelled = false;
    let animationFrame = 0;
    let loadedCount = 0;
    let nextFrameToLoad = 1;
    const initialFrame = 0;

    targetFrameRef.current = initialFrame;
    currentFrameRef.current = initialFrame;

    const findNearestLoadedFrame = (requested: number) => {
      const rounded = Math.max(
        0,
        Math.min(FRAME_COUNT - 1, Math.round(requested))
      );
      if (loadedRef.current[rounded]) return rounded;

      for (let distance = 1; distance < FRAME_COUNT; distance += 1) {
        const before = rounded - distance;
        const after = rounded + distance;
        if (before >= 0 && loadedRef.current[before]) return before;
        if (after < FRAME_COUNT && loadedRef.current[after]) return after;
      }

      return initialFrame;
    };

    const drawFrame = (requested: number, force = false) => {
      const index = findNearestLoadedFrame(requested);
      if (!force && index === lastDrawnRef.current) return;
      const image = imagesRef.current[index];
      if (!image) return;

      const width = stage.clientWidth;
      const height = stage.clientHeight;
      const imageRatio = image.naturalWidth / image.naturalHeight;
      const stageRatio = width / height;
      let drawWidth = width;
      let drawHeight = height;
      let x = 0;
      let y = 0;

      if (imageRatio > stageRatio) {
        drawWidth = height * imageRatio;
        x = (width - drawWidth) / 2;
      } else {
        drawHeight = width / imageRatio;
        y = (height - drawHeight) / 2;
      }

      context.fillStyle = "#03070c";
      context.fillRect(0, 0, width, height);
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      context.drawImage(image, x, y, drawWidth, drawHeight);
      lastDrawnRef.current = index;
    };

    const resizeCanvas = () => {
      const width = stage.clientWidth;
      const height = stage.clientHeight;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(width * pixelRatio));
      canvas.height = Math.max(1, Math.round(height * pixelRatio));
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      lastDrawnRef.current = -1;
      drawFrame(currentFrameRef.current, true);
    };

    const loadFrame = (index: number) =>
      new Promise<void>((resolve) => {
        if (loadedRef.current[index]) {
          resolve();
          return;
        }

        const image = new Image();
        image.decoding = "async";
        image.src = getFrameSource(index);

        const complete = () => {
          if (!cancelled && image.naturalWidth > 0) {
            imagesRef.current[index] = image;
            loadedRef.current[index] = true;
            loadedCount += 1;

            if (
              index === initialFrame ||
              index === Math.round(targetFrameRef.current)
            ) {
              drawFrame(targetFrameRef.current, true);
            }

            if (loadedCount === 1 || loadedCount % 6 === 0) {
              setLoadPercent(
                Math.min(100, Math.round((loadedCount / FRAME_COUNT) * 100))
              );
            }
          }
          resolve();
        };

        image.onload = complete;
        image.onerror = () => resolve();
      });

    const loadWorker = async () => {
      while (!cancelled && nextFrameToLoad < FRAME_COUNT) {
        const index = nextFrameToLoad;
        nextFrameToLoad += 1;
        await loadFrame(index);
      }
    };

    const startLoading = async () => {
      await loadFrame(initialFrame);
      if (cancelled) return;
      resizeCanvas();
      setIsReady(true);

      const workers = Array.from({ length: 6 }, () => loadWorker());
      await Promise.all(workers);
      if (!cancelled) setLoadPercent(100);
    };

    const updateScrollProgress = () => {
      const bounds = container.getBoundingClientRect();
      const scrollDistance = Math.max(
        1,
        container.offsetHeight - window.innerHeight
      );
      const progress = Math.max(0, Math.min(1, -bounds.top / scrollDistance));

      targetFrameRef.current = progress * (FRAME_COUNT - 1);

      if (percentRef.current) {
        percentRef.current.textContent =
          String(Math.round(progress * 100)).padStart(2, "0") + "%";
      }
      if (progressRef.current) {
        progressRef.current.style.transform = "scaleX(" + progress + ")";
      }

      const nextPhase = Math.min(
        phases.length - 1,
        Math.floor(progress * phases.length)
      );
      setPhaseIndex((current) => (current === nextPhase ? current : nextPhase));
    };

    const render = () => {
      const difference = targetFrameRef.current - currentFrameRef.current;
      currentFrameRef.current += difference * 0.16;

      if (Math.abs(difference) < 0.02) {
        currentFrameRef.current = targetFrameRef.current;
      }

      drawFrame(currentFrameRef.current);
      animationFrame = window.requestAnimationFrame(render);
    };

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(stage);
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress, { passive: true });

    startLoading();
    updateScrollProgress();
    animationFrame = window.requestAnimationFrame(render);

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  const phase = phases[phaseIndex];

  return (
    <div
      ref={containerRef}
      className="relative h-[320svh] lg:h-[380svh]"
    >
      <div
        className="sticky top-0 z-10 flex h-svh items-center"
      >
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-6 lg:px-12">
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 rounded-[3rem] bg-gradient-to-r from-orange-500/20 via-cyan-500/10 to-blue-500/20 blur-3xl" />
            <div
              ref={stageRef}
              className="relative h-[clamp(280px,78vw,460px)] max-h-[76svh] w-full overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#03070c] shadow-2xl shadow-slate-950/30 sm:h-[min(60vw,76svh)] sm:max-h-[560px] sm:rounded-[2.5rem] lg:h-[min(48vw,76svh)] lg:max-h-[680px]"
            >
              <canvas
                ref={canvasRef}
                className={cn(
                  "absolute inset-0 h-full w-full transition-opacity duration-700",
                  isReady ? "opacity-100" : "opacity-0"
                )}
                role="img"
                aria-label="A cinematic Big Ben sequence controlled by page scroll, representing London-wide service coverage."
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/35" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />

              {!isReady && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <span className="mb-4 h-8 w-8 animate-spin rounded-full border-2 border-white/15 border-t-orange-400" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-white/45">
                    Preparing London · {loadPercent}%
                  </span>
                </div>
              )}

              <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between gap-4 p-5 text-white sm:p-7 lg:p-9">
                <div className="flex items-center gap-3 rounded-full border border-white/15 bg-black/25 px-3 py-2 backdrop-blur-xl">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-500">
                    <MapPin className="h-3.5 w-3.5" />
                  </span>
                  <div className="pr-2">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/85">
                      Greater London
                    </p>
                    <p className="hidden text-[9px] text-white/40 sm:block">
                      Scroll-controlled coverage story
                    </p>
                  </div>
                </div>

                <div className="rounded-full border border-white/15 bg-black/25 px-3 py-2 text-[10px] font-mono tracking-[0.16em] text-white/65 backdrop-blur-xl">
                  <span ref={percentRef}>
                    00%
                  </span>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-5 text-white sm:p-7 lg:p-9">
                <div className="max-w-xl">
                  <p
                    key={phase.kicker}
                    className="mb-2 animate-in fade-in slide-in-from-bottom-2 text-[9px] font-mono uppercase tracking-[0.24em] text-orange-300 duration-500 sm:text-[10px]"
                  >
                    {phase.kicker}
                  </p>
                  <p
                    key={phase.title}
                    className="animate-in fade-in slide-in-from-bottom-3 font-display text-2xl leading-none duration-500 sm:text-4xl lg:text-5xl"
                  >
                    {phase.title}
                  </p>
                </div>

                {phaseIndex === 0 && (
                  <div className="hidden items-center gap-3 text-right sm:flex">
                    <span className="text-[9px] font-mono uppercase leading-4 tracking-[0.18em] text-white/45">
                      Keep
                      <br />
                      scrolling
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-lg">
                      <ArrowDown className="h-4 w-4 animate-bounce" />
                    </span>
                  </div>
                )}
              </div>

              <div className="pointer-events-none absolute inset-x-5 bottom-3 h-px overflow-hidden bg-white/15 sm:inset-x-7 sm:bottom-4 lg:inset-x-9">
                <div
                  ref={progressRef}
                  className="h-full origin-left scale-x-0 bg-gradient-to-r from-orange-500 via-amber-300 to-cyan-300"
                />
              </div>

              <div className="pointer-events-none absolute right-5 top-1/2 hidden -translate-y-1/2 flex-col gap-2 lg:flex">
                {phases.map((item, index) => (
                  <span
                    key={item.kicker}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-500",
                      phaseIndex === index
                        ? "w-6 bg-orange-400"
                        : "w-1.5 bg-white/30"
                    )}
                  />
                ))}
              </div>
            </div>

            <div className="mx-auto mt-4 flex max-w-[1400px] items-center justify-between px-2 text-[9px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Check className="h-3.5 w-3.5 text-emerald-500" />
                118 optimized WebP frames · Starts at frame 03
              </span>
              <span className="hidden sm:block">LCS / Coverage sequence 01</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
