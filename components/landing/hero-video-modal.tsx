"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export function HeroVideoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Auto-open shortly after the hero loads
    const t = setTimeout(() => setIsOpen(true), 1200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-foreground/70 backdrop-blur-sm animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-label="Introduction video"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-3xl bg-background rounded-2xl shadow-2xl border border-border overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-background/90 hover:bg-background border border-border flex items-center justify-center transition-colors"
          aria-label="Close video"
        >
          <X className="w-4 h-4 text-foreground" />
        </button>

        {/* Video */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/shorts/wzFbJ_lesAk"
            title="London Climate Systems - Introduction"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Description */}
        <div className="p-6 sm:p-8">
          <span className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground mb-3">
            <span className="w-6 h-px gradient-flame" />
            Welcome to LCS
          </span>
          <h3 className="text-xl sm:text-2xl font-display text-foreground mb-3">
            Heating, cooling & plumbing — done right.
          </h3>
          <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
            Watch a quick introduction to London Climate Systems. We&apos;re a team
            of Gas Safe and F-Gas certified engineers serving homes and businesses
            across London with fast response times, fair pricing, and careful
            workmanship.
          </p>
        </div>
      </div>
    </div>
  );
}
