"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  CalendarCheck,
  Eye,
  FileText,
  TrendingDown,
  TrendingUp,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type Analytics = {
  views30d: number;
  viewsToday: number;
  visitors30d: number;
  visitorsToday: number;
  allTimeViews: number;
  change: number;
  daily: Array<{ date: string; views: number }>;
  topPages: Array<{ path: string; views: number; visitors: number }>;
};

type BlogSummary = { _id: string; title: string; published: boolean; createdAt: string };
type BookingSummary = {
  _id: string;
  name: string;
  service: string;
  status: string;
  createdAt: string;
};

const emptyAnalytics: Analytics = {
  views30d: 0,
  viewsToday: 0,
  visitors30d: 0,
  visitorsToday: 0,
  allTimeViews: 0,
  change: 0,
  daily: [],
  topPages: [],
};

export function AdminOverview({
  onNavigate,
}: {
  onNavigate: (section: "overview" | "blogs" | "bookings" | "availability") => void;
}) {
  const [analytics, setAnalytics] = useState(emptyAnalytics);
  const [blogs, setBlogs] = useState<BlogSummary[]>([]);
  const [bookings, setBookings] = useState<BookingSummary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const [analyticsResponse, blogsResponse, bookingsResponse] = await Promise.all([
          fetch("/api/admin/analytics", { cache: "no-store" }),
          fetch("/api/admin/blogs", { cache: "no-store" }),
          fetch("/api/admin/bookings", { cache: "no-store" }),
        ]);
        if ([analyticsResponse, blogsResponse, bookingsResponse].some((response) => response.status === 401)) {
          window.location.reload();
          return;
        }
        if (![analyticsResponse, blogsResponse, bookingsResponse].every((response) => response.ok)) {
          throw new Error("Some dashboard data could not be loaded.");
        }
        const [analyticsJson, blogsJson, bookingsJson] = await Promise.all([
          analyticsResponse.json(),
          blogsResponse.json(),
          bookingsResponse.json(),
        ]);
        setAnalytics(analyticsJson.data);
        setBlogs(blogsJson.data);
        setBookings(bookingsJson.data);
      } catch (loadError) {
        setError(loadError instanceof Error ? loadError.message : "Dashboard data is unavailable.");
      } finally {
        setIsLoading(false);
      }
    }
    void load();
  }, []);

  const maxViews = Math.max(1, ...analytics.daily.map((day) => day.views));
  const published = blogs.filter((blog) => blog.published).length;
  const newBookings = bookings.filter((booking) => booking.status === "new").length;
  const stats = [
    { label: "Page views", value: analytics.views30d, note: "Last 30 days", icon: Eye, color: "text-sky-300 bg-sky-400/10" },
    { label: "Unique visitors", value: analytics.visitors30d, note: `${analytics.visitorsToday} today`, icon: Users, color: "text-violet-300 bg-violet-400/10" },
    { label: "Published articles", value: published, note: `${blogs.length - published} drafts`, icon: FileText, color: "text-orange-300 bg-orange-400/10" },
    { label: "New bookings", value: newBookings, note: `${bookings.length} total`, icon: CalendarCheck, color: "text-emerald-300 bg-emerald-400/10" },
  ];

  return (
    <div>
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">Command centre</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Good to see you.</h1>
          <p className="mt-2 text-sm text-slate-400">A clear view of traffic, content, and customer requests.</p>
        </div>
        <p className="text-xs text-slate-500">Traffic updates after real page visits</p>
      </div>

      {error && <div className="mb-6 rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">{error}</div>}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, note, icon: Icon, color }) => (
          <div key={label} className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 shadow-xl shadow-black/10">
            <div className="flex items-center justify-between">
              <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${color}`}><Icon className="h-5 w-5" /></span>
              {isLoading && <span className="h-2 w-12 animate-pulse rounded-full bg-white/10" />}
            </div>
            <p className="mt-5 text-3xl font-semibold text-white">{isLoading ? "—" : value.toLocaleString("en-GB")}</p>
            <p className="mt-1 text-sm font-medium text-slate-300">{label}</p>
            <p className="mt-1 text-xs text-slate-500">{note}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[1.55fr_0.85fr]">
        <section className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="font-semibold text-white">Traffic trend</h2>
              <p className="mt-1 text-xs text-slate-500">Page views during the last 30 days</p>
            </div>
            <div className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs ${analytics.change >= 0 ? "bg-emerald-400/10 text-emerald-300" : "bg-red-400/10 text-red-300"}`}>
              {analytics.change >= 0 ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
              {Math.abs(analytics.change)}%
            </div>
          </div>
          <div className="mt-8 flex h-52 items-end gap-1.5" aria-label="Daily page views chart">
            {analytics.daily.map((day, index) => (
              <div key={day.date} className="group flex h-full min-w-0 flex-1 items-end">
                <div
                  className="relative w-full min-h-1 rounded-t-sm bg-gradient-to-t from-orange-600 to-orange-300 opacity-75 transition-opacity hover:opacity-100"
                  style={{ height: `${Math.max(2, (day.views / maxViews) * 100)}%` }}
                  title={`${new Date(`${day.date}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}: ${day.views} views`}
                >
                  {(index === analytics.daily.length - 1 || index % 7 === 0) && (
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] text-slate-600">{new Date(`${day.date}T00:00:00Z`).getUTCDate()}</span>
                  )}
                </div>
              </div>
            ))}
            {!isLoading && analytics.daily.length === 0 && <p className="m-auto text-sm text-slate-500">Traffic will appear after the first visit.</p>}
          </div>
        </section>

        <section className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 sm:p-6">
          <h2 className="font-semibold text-white">Top pages</h2>
          <p className="mt-1 text-xs text-slate-500">Most viewed in the last 30 days</p>
          <div className="mt-5 space-y-2">
            {analytics.topPages.slice(0, 6).map((page, index) => (
              <div key={page.path} className="flex items-center gap-3 rounded-xl bg-white/[0.03] px-3 py-3">
                <span className="text-xs font-semibold text-slate-600">{String(index + 1).padStart(2, "0")}</span>
                <span className="min-w-0 flex-1 truncate text-sm text-slate-300">{page.path === "/" ? "Home" : page.path}</span>
                <span className="text-xs font-semibold text-white">{page.views}</span>
              </div>
            ))}
            {!isLoading && analytics.topPages.length === 0 && <p className="py-8 text-center text-sm text-slate-500">No page views recorded yet.</p>}
          </div>
        </section>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <section className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 sm:p-6">
          <div className="flex items-center justify-between"><h2 className="font-semibold text-white">Latest bookings</h2><Button variant="ghost" size="sm" onClick={() => onNavigate("bookings")} className="text-orange-300 hover:text-orange-200">View all <ArrowRight className="ml-1 h-3.5 w-3.5" /></Button></div>
          <div className="mt-4 divide-y divide-white/[0.07]">
            {bookings.slice(0, 4).map((booking) => (
              <div key={booking._id} className="flex items-center gap-3 py-3">
                <span className={`h-2 w-2 rounded-full ${booking.status === "new" ? "bg-orange-400" : "bg-slate-600"}`} />
                <div className="min-w-0 flex-1"><p className="truncate text-sm font-medium text-slate-200">{booking.name}</p><p className="truncate text-xs text-slate-500">{booking.service || "General enquiry"}</p></div>
                <time className="text-[10px] text-slate-600">{new Date(booking.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}</time>
              </div>
            ))}
            {!isLoading && bookings.length === 0 && <p className="py-8 text-center text-sm text-slate-500">No booking requests yet.</p>}
          </div>
        </section>

        <section className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 sm:p-6">
          <div className="flex items-center justify-between"><h2 className="font-semibold text-white">Recent articles</h2><Button variant="ghost" size="sm" onClick={() => onNavigate("blogs")} className="text-orange-300 hover:text-orange-200">Manage <ArrowRight className="ml-1 h-3.5 w-3.5" /></Button></div>
          <div className="mt-4 divide-y divide-white/[0.07]">
            {blogs.slice(0, 4).map((blog) => (
              <div key={blog._id} className="flex items-center gap-3 py-3">
                <span className={`rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase ${blog.published ? "bg-emerald-400/10 text-emerald-300" : "bg-slate-400/10 text-slate-400"}`}>{blog.published ? "Live" : "Draft"}</span>
                <p className="min-w-0 flex-1 truncate text-sm text-slate-300">{blog.title}</p>
                <time className="text-[10px] text-slate-600">{new Date(blog.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}</time>
              </div>
            ))}
            {!isLoading && blogs.length === 0 && <p className="py-8 text-center text-sm text-slate-500">Create your first article.</p>}
          </div>
        </section>
      </div>
    </div>
  );
}
