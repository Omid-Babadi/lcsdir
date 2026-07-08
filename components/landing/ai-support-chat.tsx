"use client";

import { FormEvent, useMemo, useRef, useState } from "react";
import { Bot, CalendarCheck, Loader2, MessageCircle, Phone, Send, ShieldCheck, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

function renderAssistantText(text: string) {
  return text.split("\n").map((line, lineIndex) => {
    const parts = line.split(/(\*\*[^*]+\*\*)/g);

    return (
      <span key={`${lineIndex}-${line}`} className="block">
        {parts.map((part, partIndex) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return (
              <strong key={`${partIndex}-${part}`} className="font-semibold text-foreground">
                {part.slice(2, -2)}
              </strong>
            );
          }

          return <span key={`${partIndex}-${part}`}>{part}</span>;
        })}
      </span>
    );
  });
}

const STARTER_MESSAGES: ChatMessage[] = [
  {
    role: "assistant",
    content:
      "Hi, I am here to help with plumbing, heating, boiler, gas, and air conditioning questions for London Climate Systems. What do you need help with today?",
  },
];

const QUICK_PROMPTS = [
  "I need a boiler repair",
  "Do you cover my area?",
  "I need a gas safety certificate",
];

export function AiSupportChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(STARTER_MESSAGES);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const visibleMessages = useMemo(() => messages.slice(-8), [messages]);

  async function sendMessage(content: string) {
    const trimmed = content.trim();
    if (!trimmed || isSending) return;

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: trimmed }];
    setMessages(nextMessages);
    setInput("");
    setError("");
    setIsSending(true);

    try {
      const response = await fetch("/api/deepseek-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages.slice(-10) }),
      });

      const data = await response.json();
      if (!response.ok || typeof data.text !== "string") {
        throw new Error(data.error || "Support chat is unavailable");
      }

      setMessages((current) => [...current, { role: "assistant", content: data.text }]);
    } catch {
      setError("The AI support chat is unavailable right now. Please call us for urgent help.");
    } finally {
      setIsSending(false);
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(input);
  }

  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-slate-950 text-white shadow-xl shadow-foreground/20 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FF6A00]/30 sm:h-16 sm:w-16"
        aria-label="Open AI support chat"
      >
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
      </button>
    );
  }

  return (
    <section
      className="fixed bottom-4 right-4 z-40 flex w-[calc(100vw-2rem)] max-w-[390px] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl shadow-foreground/20 sm:bottom-6 sm:right-6"
      aria-label="AI support chat"
    >
      <header className="flex items-center justify-between border-b border-border bg-slate-950 px-4 py-3 text-white">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-slate-950">
            <Bot className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <h2 className="truncate text-sm font-semibold">AI Support</h2>
            <p className="truncate text-xs text-white/70">London Climate Systems</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          aria-label="Close AI support chat"
        >
          <X className="h-5 w-5" />
        </button>
      </header>

      <div className="max-h-[52vh] min-h-[330px] space-y-3 overflow-y-auto px-4 py-4">
        {visibleMessages.map((message, index) => (
          <div
            key={`${message.role}-${index}-${message.content.slice(0, 12)}`}
            className={message.role === "user" ? "flex justify-end" : "flex justify-start"}
          >
            <div
              className={
                message.role === "user"
                  ? "max-w-[82%] rounded-2xl rounded-br-md bg-[#FF6A00] px-3.5 py-2.5 text-sm leading-relaxed text-white"
                  : "max-w-[86%] rounded-2xl rounded-bl-md border border-border bg-muted/50 px-3.5 py-2.5 text-sm leading-relaxed text-foreground"
              }
            >
              <p className="whitespace-pre-wrap break-words">
                {message.role === "assistant" ? renderAssistantText(message.content) : message.content}
              </p>
            </div>
          </div>
        ))}

        {isSending && (
          <div className="flex justify-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-2 text-xs text-muted-foreground">
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
              Replying
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-border px-4 py-3">
        {messages.length === STARTER_MESSAGES.length && (
          <div className="mb-3 flex flex-wrap gap-2">
            {QUICK_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => sendMessage(prompt)}
                className="rounded-full border border-border px-3 py-1.5 text-xs text-foreground/75 transition-colors hover:border-[#FF6A00]/50 hover:text-[#FF6A00]"
              >
                {prompt}
              </button>
            ))}
          </div>
        )}

        {error && (
          <p className="mb-3 rounded-md border border-destructive/20 bg-destructive/10 px-3 py-2 text-xs text-destructive">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex items-end gap-2">
          <Textarea
            ref={inputRef}
            value={input}
            onChange={(event) => setInput(event.target.value.slice(0, 1200))}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                event.currentTarget.form?.requestSubmit();
              }
            }}
            placeholder="Ask how we can help..."
            className="max-h-28 min-h-11 resize-none rounded-xl text-sm"
            disabled={isSending}
            aria-label="Message"
          />
          <Button
            type="submit"
            size="icon"
            className="h-11 w-11 shrink-0 rounded-full gradient-flame text-white"
            disabled={isSending || !input.trim()}
            aria-label="Send message"
          >
            {isSending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          </Button>
        </form>

        <div className="mt-3 flex items-center justify-between gap-3 text-[11px] text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5" />
            No card details
          </span>
          <Link href="/contact#booking" className="inline-flex items-center gap-1.5 hover:text-[#FF6A00]">
            <CalendarCheck className="h-3.5 w-3.5" />
            Book online
          </Link>
          <a href="tel:07473423003" className="inline-flex items-center gap-1.5 hover:text-[#FF6A00]">
            <Phone className="h-3.5 w-3.5" />
            07473 423003
          </a>
        </div>
      </div>
    </section>
  );
}
