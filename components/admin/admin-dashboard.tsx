"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  CalendarCheck,
  ExternalLink,
  FileText,
  LayoutDashboard,
  LogOut,
  RadioTower,
} from "lucide-react";
import { AvailabilityPanel } from "@/components/admin/availability-panel";
import { AdminOverview } from "@/components/admin/admin-overview";
import { BlogManager } from "@/components/admin/blog-manager";
import { BookingsPanel } from "@/components/admin/bookings-panel";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Section = "overview" | "blogs" | "bookings" | "availability";

const sections = [
  { id: "overview" as const, label: "Overview", icon: LayoutDashboard },
  { id: "blogs" as const, label: "Articles", icon: FileText },
  { id: "bookings" as const, label: "Bookings", icon: CalendarCheck },
  { id: "availability" as const, label: "Availability", icon: RadioTower },
];

export function AdminDashboard() {
  const router = useRouter();
  const [active, setActive] = useState<Section>("overview");
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  async function logout() {
    setIsLoggingOut(true);
    await fetch("/api/admin/logout", { method: "POST" });
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-[#070b12] text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.09),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.08),transparent_30%)]" />
      <div className="relative mx-auto grid min-h-screen max-w-[1800px] lg:grid-cols-[260px_1fr]">
        <aside className="border-b border-white/10 bg-[#0b111b]/90 px-5 py-5 backdrop-blur-xl lg:sticky lg:top-0 lg:h-screen lg:border-b-0 lg:border-r lg:px-4 lg:py-6">
          <div className="flex items-center justify-between lg:block">
            <Link href="/" className="flex items-center gap-3 px-2">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white p-1.5">
                <Image src="/logo.png" alt="London Climate Systems" width={38} height={38} />
              </span>
              <span>
                <strong className="block text-sm font-semibold">LCS Command</strong>
                <span className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Admin workspace</span>
              </span>
            </Link>

            <Button asChild variant="ghost" size="icon" className="text-slate-400 lg:hidden">
              <Link href="/" aria-label="View website"><ExternalLink className="h-4 w-4" /></Link>
            </Button>
          </div>

          <nav className="mt-5 grid grid-cols-4 gap-2 lg:mt-10 lg:grid-cols-1" aria-label="Admin sections">
            {sections.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => setActive(id)}
                className={cn(
                  "flex min-w-0 flex-col items-center gap-1.5 rounded-xl px-2 py-3 text-[11px] font-medium transition-all lg:flex-row lg:gap-3 lg:px-3 lg:text-sm",
                  active === id
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-950/30"
                    : "text-slate-400 hover:bg-white/[0.05] hover:text-white",
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span className="truncate">{label}</span>
              </button>
            ))}
          </nav>

          <div className="mt-8 hidden border-t border-white/10 pt-5 lg:block">
            <Link href="/" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-400 hover:bg-white/[0.05] hover:text-white">
              <ExternalLink className="h-4 w-4" />
              View website
            </Link>
            <button
              type="button"
              onClick={logout}
              disabled={isLoggingOut}
              className="mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-400 hover:bg-red-500/10 hover:text-red-300 disabled:opacity-50"
            >
              <LogOut className="h-4 w-4" />
              {isLoggingOut ? "Signing out…" : "Sign out"}
            </button>
          </div>
        </aside>

        <main className="min-w-0 px-4 py-7 sm:px-7 lg:px-10 lg:py-10 xl:px-14">
          <div className="mx-auto max-w-[1400px]">
            {active === "overview" && <AdminOverview onNavigate={setActive} />}
            {active === "blogs" && <BlogManager />}
            {active === "bookings" && <BookingsPanel />}
            {active === "availability" && <AvailabilityPanel embedded />}
          </div>
        </main>
      </div>
    </div>
  );
}
