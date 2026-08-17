"use client";

import { MessageCircle } from "lucide-react";

const whatsappUrl =
  "https://wa.me/447473423003?text=Hello%20London%20Climate%20Systems%2C%20I%20need%20help%20with%20a%20service.";

export function WhatsappChatLink() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with London Climate Systems on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full border border-white/20 bg-[#25D366] p-1.5 text-white shadow-2xl shadow-emerald-950/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#20bd5a] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/30 sm:bottom-6 sm:right-6"
    >
      <span className="hidden pl-3 text-sm font-semibold sm:block">
        Chat on WhatsApp
      </span>
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 sm:h-13 sm:w-13">
        <MessageCircle className="h-6 w-6" strokeWidth={2.2} />
      </span>
    </a>
  );
}
