"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function createId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function getStoredId(storage: Storage, key: string) {
  const existing = storage.getItem(key);
  if (existing) return existing;
  const next = createId();
  storage.setItem(key, next);
  return next;
}

export function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname || pathname.startsWith("/thispageisforadmin")) return;

    try {
      const visitorId = getStoredId(localStorage, "lcs_visitor_id");
      const sessionId = getStoredId(sessionStorage, "lcs_session_id");

      void fetch("/api/analytics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          path: pathname,
          visitorId,
          sessionId,
          referrer: document.referrer,
        }),
        keepalive: true,
      });
    } catch {
      // Analytics must never affect the visitor experience.
    }
  }, [pathname]);

  return null;
}
