import Image from "next/image";
import { Droplets, Flame, Gauge, Wind } from "lucide-react";

const systems = [
  { label: "Heating", icon: Flame, className: "text-orange-500" },
  { label: "Cooling", icon: Wind, className: "text-sky-500" },
  { label: "Plumbing", icon: Droplets, className: "text-blue-500" },
  { label: "Boilers", icon: Gauge, className: "text-red-500" },
];

export default function Loading() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 square-pattern opacity-70" />
      <div className="absolute inset-x-0 top-0 h-px gradient-flame" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-6 py-16">
        <div className="relative mb-10 flex size-32 items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-orange-500/20" />
          <div className="absolute inset-3 animate-spin rounded-full border-2 border-orange-500/20 border-t-orange-500" />
          <div className="absolute inset-8 animate-pulse rounded-full bg-orange-500/10" />
          <div className="relative size-16 overflow-hidden rounded-2xl border border-border bg-background shadow-lg">
            <Image
              src="/logo.png"
              alt="London Climate Systems"
              fill
              className="object-contain p-2"
              priority
            />
          </div>
        </div>

        <div className="max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1.5">
            <span className="size-1.5 rounded-full bg-orange-500" />
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-orange-600">
              Loading systems
            </span>
          </div>
          <h1 className="font-display text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Preparing your service dashboard.
          </h1>
          <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
            Checking availability, routes, service coverage, and booking tools.
          </p>
        </div>

        <div className="mt-10 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {systems.map(({ label, icon: Icon, className }) => (
            <div
              key={label}
              className="flex h-24 flex-col items-center justify-center gap-2 rounded-lg border border-border bg-background/80 shadow-sm backdrop-blur"
            >
              <Icon className={`size-5 ${className}`} />
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 h-1 w-full max-w-md overflow-hidden rounded-full bg-muted">
          <div className="h-full w-1/2 animate-[loading-bar_1.4s_ease-in-out_infinite] rounded-full gradient-flame" />
        </div>
      </div>
    </main>
  );
}
