"use client";

import { useEffect, useRef } from "react";

export function MouseDotConstellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const stage = stageRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !stage || !context) return;

    const pointer = { x: 0, y: 0, active: false };
    const follower = { x: 0, y: 0 };
    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const bounds = stage.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      if (!pointer.active) {
        pointer.x = width * 0.52;
        pointer.y = height * 0.47;
        follower.x = pointer.x;
        follower.y = pointer.y;
      }
    };

    const paint = (time: number) => {
      if (!width || !height) return;
      const targetX = pointer.active ? pointer.x : width * 0.52 + Math.sin(time * 0.00045) * width * 0.12;
      const targetY = pointer.active ? pointer.y : height * 0.47 + Math.cos(time * 0.00055) * height * 0.1;
      follower.x += (targetX - follower.x) * (reducedMotion ? 1 : 0.095);
      follower.y += (targetY - follower.y) * (reducedMotion ? 1 : 0.095);
      context.clearRect(0, 0, width, height);

      const spacing = Math.max(19, Math.min(27, width / 22));
      const columns = Math.ceil(width / spacing) + 2;
      const rows = Math.ceil(height / spacing) + 2;
      const timeWave = reducedMotion ? 0 : time * 0.0018;

      for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          const baseX = column * spacing - spacing;
          const baseY = row * spacing - spacing;
          const dx = follower.x - baseX;
          const dy = follower.y - baseY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const influence = Math.max(0, 1 - distance / (reducedMotion ? 145 : 190));
          const wave = Math.sin(distance * 0.075 - timeWave * 4) * influence;
          const driftX = reducedMotion ? 0 : Math.sin(timeWave + row * 0.65) * 1.5;
          const driftY = reducedMotion ? 0 : Math.cos(timeWave * 0.9 + column * 0.5) * 1.5;
          const offsetX = dx === 0 ? 0 : (dx / distance) * influence * (10 + wave * 9);
          const offsetY = dy === 0 ? 0 : (dy / distance) * influence * (10 + wave * 9);
          const x = baseX - offsetX + driftX;
          const y = baseY - offsetY + driftY;
          const radius = 1.15 + influence * 2.15 + Math.max(0, wave) * 0.8;
          const alpha = 0.2 + influence * 0.65;
          const orangeMix = Math.max(0, Math.min(1, (x / width) * 0.7 + influence * 0.3));
          const red = Math.round(46 + orangeMix * 209);
          const green = Math.round(211 - orangeMix * 105);
          const blue = Math.round(255 - orangeMix * 181);

          context.beginPath();
          context.arc(x, y, radius, 0, Math.PI * 2);
          context.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
          context.fill();
        }
      }

      if (!reducedMotion) {
        const aura = context.createRadialGradient(follower.x, follower.y, 0, follower.x, follower.y, 130);
        aura.addColorStop(0, "rgba(255, 106, 0, 0.16)");
        aura.addColorStop(0.45, "rgba(34, 211, 238, 0.07)");
        aura.addColorStop(1, "rgba(34, 211, 238, 0)");
        context.fillStyle = aura;
        context.fillRect(follower.x - 130, follower.y - 130, 260, 260);
      }

      context.beginPath();
      context.arc(follower.x, follower.y, 28 + (reducedMotion ? 0 : Math.sin(time * 0.004) * 3), 0, Math.PI * 2);
      context.strokeStyle = "rgba(255, 255, 255, 0.55)";
      context.lineWidth = 1;
      context.stroke();
      context.beginPath();
      context.arc(follower.x, follower.y, 6, 0, Math.PI * 2);
      context.fillStyle = "#ffffff";
      context.shadowBlur = 18;
      context.shadowColor = "#ff6a00";
      context.fill();
      context.shadowBlur = 0;

      if (!reducedMotion) animationFrame = requestAnimationFrame(paint);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = stage.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
      pointer.active = true;
    };
    const handlePointerLeave = () => { pointer.active = false; };
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionPreference = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches;
      cancelAnimationFrame(animationFrame);
      paint(performance.now());
      if (!reducedMotion) animationFrame = requestAnimationFrame(paint);
    };

    resize();
    paint(performance.now());
    if (!reducedMotion) animationFrame = requestAnimationFrame(paint);
    const observer = new ResizeObserver(resize);
    observer.observe(stage);
    stage.addEventListener("pointermove", handlePointerMove);
    stage.addEventListener("pointerleave", handlePointerLeave);
    motionQuery.addEventListener("change", handleMotionPreference);

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
      stage.removeEventListener("pointermove", handlePointerMove);
      stage.removeEventListener("pointerleave", handlePointerLeave);
      motionQuery.removeEventListener("change", handleMotionPreference);
    };
  }, []);

  return (
    <div
      ref={stageRef}
      className="relative h-full w-full overflow-hidden bg-[#071018]"
      role="img"
      aria-label="Interactive London service network. Move your pointer across the visual to bend the glowing dot field."
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(8,72,102,0.5),transparent_42%),linear-gradient(145deg,#071018_0%,#0b1c28_48%,#101318_100%)]" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-6 text-white sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-200/70">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400 shadow-[0_0_12px_#ff6a00]" />
              Live service network
            </div>
            <h2 className="max-w-[13rem] font-display text-3xl font-medium leading-[0.98] tracking-tight sm:text-4xl">
              London, <span className="text-orange-400">connected.</span>
            </h2>
          </div>
          <div className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[9px] font-mono uppercase tracking-[0.2em] text-white/55 backdrop-blur-md">
            LCS / 24—7
          </div>
        </div>
        <div className="flex items-end justify-between gap-4">
          <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 backdrop-blur-md">
            <div className="mb-1 text-[9px] font-mono uppercase tracking-[0.22em] text-white/45">Pointer field</div>
            <div className="flex items-center gap-2 text-xs text-white/85">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
              Follow the signal
            </div>
          </div>
          <div className="text-right text-[9px] font-mono uppercase leading-5 tracking-[0.2em] text-white/40">
            Heating / plumbing<br />
            Air conditioning
          </div>
        </div>
      </div>
    </div>
  );
}
