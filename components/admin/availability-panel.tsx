"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Clock3, LogOut, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { AvailabilityMode } from "@/lib/availability-store";

const options: Array<{
  mode: AvailabilityMode;
  title: string;
  description: string;
  icon: typeof Clock3;
}> = [
  {
    mode: "automatic",
    title: "Automatic",
    description: "Use London opening hours.",
    icon: Clock3,
  },
  {
    mode: "available",
    title: "Available",
    description: "Force the site to show available.",
    icon: CheckCircle2,
  },
  {
    mode: "unavailable",
    title: "Unavailable",
    description: "Force the site to show unavailable.",
    icon: XCircle,
  },
];

export function AvailabilityPanel({ embedded = false }: { embedded?: boolean }) {
  const router = useRouter();
  const [mode, setMode] = useState<AvailabilityMode>("automatic");
  const [isAvailable, setIsAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");

  async function loadAvailability() {
    setError("");

    const response = await fetch("/api/admin/availability", { cache: "no-store" });
    if (response.status === 401) {
      router.refresh();
      return;
    }

    const data = await response.json();
    setMode(data.mode);
    setIsAvailable(data.isAvailable);
    setIsLoading(false);
  }

  async function updateMode(nextMode: AvailabilityMode) {
    setMode(nextMode);
    setIsSaving(true);
    setError("");

    const response = await fetch("/api/admin/availability", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mode: nextMode }),
    });

    setIsSaving(false);

    if (!response.ok) {
      setError("Could not save availability.");
      await loadAvailability();
      return;
    }

    const data = await response.json();
    setMode(data.mode);
    setIsAvailable(data.isAvailable);
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.refresh();
  }

  useEffect(() => {
    loadAvailability();
  }, []);

  return (
    <div className={embedded ? "w-full" : "w-full max-w-3xl border border-border bg-background p-6 shadow-xl"}>
      <div className="mb-8 flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">Live website status</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Availability</h1>
          <p className="mt-2 text-sm text-muted-foreground">Control the availability message shown to website visitors.</p>
        </div>

        {!embedded && (
          <Button type="button" variant="outline" onClick={logout}>
            <LogOut className="mr-2 h-4 w-4" />
            Log out
          </Button>
        )}
      </div>

      <div className="mb-6 flex items-center gap-3 rounded-md border border-border bg-foreground/[0.03] px-4 py-3">
        <span
          className={`h-3 w-3 rounded-full ${isAvailable ? "bg-green-500" : "bg-red-500"}`}
        />
        <div>
          <p className="text-sm font-semibold text-foreground">
            {isAvailable ? "Available now" : "Currently unavailable"}
          </p>
          <p className="text-xs text-muted-foreground">
            Current mode: {mode}
            {isSaving ? " - saving..." : ""}
          </p>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {options.map((option) => {
          const Icon = option.icon;
          const isSelected = option.mode === mode;

          return (
            <button
              key={option.mode}
              type="button"
              onClick={() => updateMode(option.mode)}
              disabled={isLoading || isSaving}
              className={`min-h-40 rounded-2xl border p-5 text-left transition-colors ${
                isSelected
                  ? "border-primary bg-primary/[0.06]"
                  : "border-border bg-background hover:border-primary/50"
              } disabled:cursor-not-allowed disabled:opacity-60`}
            >
              <Icon className={`mb-4 h-6 w-6 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
              <p className="font-semibold text-foreground">{option.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {option.description}
              </p>
            </button>
          );
        })}
      </div>

      {error && (
        <p className="mt-5 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
