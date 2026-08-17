"use client";

import { useEffect, useMemo, useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Loader2,
  Mail,
  MessageSquareText,
  Phone,
  Search,
  Send,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type BookingStatus = "new" | "contacted" | "confirmed" | "completed" | "archived";

type Booking = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  notes: string;
  status: BookingStatus;
  telegramStatus: "pending" | "sent" | "failed";
  telegramError?: string;
  createdAt: string;
  updatedAt: string;
};

const statuses: BookingStatus[] = ["new", "contacted", "confirmed", "completed", "archived"];

const statusStyle: Record<BookingStatus, string> = {
  new: "bg-orange-400/10 text-orange-300",
  contacted: "bg-sky-400/10 text-sky-300",
  confirmed: "bg-violet-400/10 text-violet-300",
  completed: "bg-emerald-400/10 text-emerald-300",
  archived: "bg-slate-400/10 text-slate-400",
};

export function BookingsPanel() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | BookingStatus>("all");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [updating, setUpdating] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      const response = await fetch("/api/admin/bookings", { cache: "no-store" });
      if (response.status === 401) {
        window.location.reload();
        return;
      }
      const json = await response.json().catch(() => null);
      if (!response.ok) setError(json?.error ?? "Could not load bookings.");
      else setBookings(json.data);
      setIsLoading(false);
    }
    void load();
  }, []);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return bookings.filter((booking) => {
      if (filter !== "all" && booking.status !== filter) return false;
      if (!query) return true;
      return `${booking.name} ${booking.email} ${booking.phone} ${booking.service}`.toLowerCase().includes(query);
    });
  }, [bookings, filter, search]);

  async function updateStatus(booking: Booking, status: BookingStatus) {
    setUpdating(booking._id);
    setError("");
    const response = await fetch(`/api/admin/bookings/${booking._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    const json = await response.json().catch(() => null);
    if (!response.ok) setError(json?.error ?? "Could not update the booking.");
    else setBookings((current) => current.map((item) => item._id === booking._id ? json.data : item));
    setUpdating(null);
  }

  const counts = statuses.reduce<Record<BookingStatus, number>>((result, status) => {
    result[status] = bookings.filter((booking) => booking.status === status).length;
    return result;
  }, { new: 0, contacted: 0, confirmed: 0, completed: 0, archived: 0 });

  return (
    <div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">Customer inbox</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Bookings</h1>
        <p className="mt-2 text-sm text-slate-400">Every valid website booking is saved here and sent to Telegram.</p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
        {statuses.map((status) => (
          <button key={status} type="button" onClick={() => setFilter(filter === status ? "all" : status)} className={cn("rounded-2xl border p-4 text-left transition-colors", filter === status ? "border-orange-400/40 bg-orange-400/[0.08]" : "border-white/[0.08] bg-white/[0.035] hover:border-white/15")}>
            <p className="text-2xl font-semibold text-white">{counts[status]}</p>
            <p className="mt-1 text-xs capitalize text-slate-500">{status}</p>
          </button>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.035] px-4">
        <Search className="h-4 w-4 text-slate-500" />
        <Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search name, email, phone, or service…" className="h-12 border-0 bg-transparent px-0 shadow-none focus-visible:ring-0" />
      </div>

      {error && <div className="mt-5 rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">{error}</div>}

      <div className="mt-5 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025]">
        {isLoading ? (
          <div className="flex items-center justify-center gap-2 py-24 text-sm text-slate-500"><Loader2 className="h-4 w-4 animate-spin" />Loading bookings…</div>
        ) : filtered.length === 0 ? (
          <div className="py-24 text-center"><CalendarDays className="mx-auto h-8 w-8 text-slate-700" /><p className="mt-4 text-sm text-slate-500">No bookings match this view.</p></div>
        ) : (
          <div className="divide-y divide-white/[0.07]">
            {filtered.map((booking) => {
              const isExpanded = expanded === booking._id;
              return (
                <article key={booking._id} className="p-4 sm:p-5">
                  <div className="grid gap-4 lg:grid-cols-[1.25fr_1fr_auto] lg:items-center">
                    <button type="button" onClick={() => setExpanded(isExpanded ? null : booking._id)} className="flex min-w-0 items-center gap-3 text-left">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-sm font-semibold text-orange-300">{booking.name.slice(0, 2).toUpperCase()}</span>
                      <span className="min-w-0"><span className="block truncate text-sm font-semibold text-white">{booking.name}</span><span className="mt-1 block truncate text-xs text-slate-500">{booking.email}</span></span>
                    </button>

                    <div className="min-w-0"><p className="truncate text-sm text-slate-300">{booking.service || "General enquiry"}</p><p className="mt-1 text-[10px] text-slate-600">{new Date(booking.createdAt).toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" })}</p></div>

                    <div className="flex items-center gap-2">
                      <span title={booking.telegramError} className={cn("inline-flex items-center gap-1 rounded-full px-2 py-1 text-[9px] font-semibold uppercase", booking.telegramStatus === "sent" ? "bg-emerald-400/10 text-emerald-300" : booking.telegramStatus === "failed" ? "bg-red-400/10 text-red-300" : "bg-slate-400/10 text-slate-400")}><Send className="h-3 w-3" />{booking.telegramStatus}</span>
                      <div className="relative">
                        <select value={booking.status} onChange={(event) => void updateStatus(booking, event.target.value as BookingStatus)} disabled={updating === booking._id} className={cn("h-9 appearance-none rounded-full border-0 py-0 pl-3 pr-8 text-xs font-semibold capitalize outline-none", statusStyle[booking.status])}>{statuses.map((status) => <option key={status} value={status} className="bg-slate-900 text-slate-200">{status}</option>)}</select>
                        {updating === booking._id ? <Loader2 className="pointer-events-none absolute right-2.5 top-2.5 h-3.5 w-3.5 animate-spin" /> : <ChevronDown className="pointer-events-none absolute right-2.5 top-2.5 h-3.5 w-3.5" />}
                      </div>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="mt-5 grid gap-5 border-t border-white/[0.07] pt-5 md:grid-cols-[240px_1fr]">
                      <div className="space-y-2">
                        <a href={`mailto:${booking.email}`} className="flex items-center gap-2 rounded-xl bg-white/[0.035] px-3 py-2.5 text-xs text-slate-300 hover:bg-white/[0.06]"><Mail className="h-3.5 w-3.5 text-sky-300" />{booking.email}</a>
                        {booking.phone && <a href={`tel:${booking.phone}`} className="flex items-center gap-2 rounded-xl bg-white/[0.035] px-3 py-2.5 text-xs text-slate-300 hover:bg-white/[0.06]"><Phone className="h-3.5 w-3.5 text-emerald-300" />{booking.phone}</a>}
                        {booking.preferredDate && <p className="flex items-center gap-2 rounded-xl bg-white/[0.035] px-3 py-2.5 text-xs text-slate-300"><CalendarDays className="h-3.5 w-3.5 text-violet-300" />Preferred: {booking.preferredDate}</p>}
                      </div>
                      <div className="rounded-xl bg-black/20 p-4"><p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500"><MessageSquareText className="h-3.5 w-3.5" />Customer notes</p><p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-slate-300">{booking.notes || "No additional notes were provided."}</p></div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center gap-2 text-[10px] text-slate-600"><CheckCircle2 className="h-3.5 w-3.5" />Only the latest 250 bookings are displayed. All records remain in the database.</div>
    </div>
  );
}
