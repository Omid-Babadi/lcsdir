"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Bot,
  Check,
  Clock3,
  Copy,
  KeyRound,
  Loader2,
  Plus,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type McpTokenRecord = {
  _id: string;
  name: string;
  tokenPrefix: string;
  createdAt: string;
  lastUsedAt: string | null;
  revokedAt: string | null;
};

const dailyPrompt = `Every day at 09:00 Europe/London, use the London Climate Systems blog MCP server. Call list_recent_blogs first, write a useful non-duplicate article in British English, then call publish_daily_blog exactly once with today's Europe/London date. Never invent regulations, statistics, prices, accreditations, or customer claims. Report the published URL.`;

function formatDate(value: string | null) {
  if (!value) return "Never";
  return new Date(value).toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function McpAccessPanel() {
  const [tokens, setTokens] = useState<McpTokenRecord[]>([]);
  const [name, setName] = useState("Daily blog AI");
  const [generatedToken, setGeneratedToken] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [revokingId, setRevokingId] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [origin, setOrigin] = useState("https://londonclimatesystems.com");

  const endpoint = `${origin}/api/mcp`;
  const clientConfig = useMemo(
    () =>
      JSON.stringify(
        {
          mcpServers: {
            "lcs-blog": {
              url: endpoint,
              headers: {
                Authorization: `Bearer ${generatedToken || "PASTE_TOKEN_HERE"}`,
              },
            },
          },
        },
        null,
        2,
      ),
    [endpoint, generatedToken],
  );

  useEffect(() => {
    setOrigin(window.location.origin);
    void loadTokens();
  }, []);

  async function loadTokens() {
    setIsLoading(true);
    setError("");
    const response = await fetch("/api/admin/mcp-tokens", { cache: "no-store" });
    if (response.status === 401) {
      window.location.reload();
      return;
    }
    const json = await response.json().catch(() => null);
    if (!response.ok) setError(json?.error || "Could not load MCP access tokens.");
    else setTokens(json.data);
    setIsLoading(false);
  }

  async function generateToken() {
    if (name.trim().length < 2) {
      setError("Enter a name for this AI connection.");
      return;
    }

    setIsGenerating(true);
    setError("");
    setGeneratedToken("");
    const response = await fetch("/api/admin/mcp-tokens", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    const json = await response.json().catch(() => null);
    if (!response.ok) {
      setError(json?.error || "Could not generate an MCP access token.");
    } else {
      setGeneratedToken(json.token);
      setTokens((current) => [json.data, ...current]);
    }
    setIsGenerating(false);
  }

  async function revokeToken(token: McpTokenRecord) {
    if (!window.confirm(`Revoke MCP access for “${token.name}”? The connected AI will stop working immediately.`)) return;
    setRevokingId(token._id);
    setError("");
    const response = await fetch(`/api/admin/mcp-tokens/${token._id}`, { method: "DELETE" });
    const json = await response.json().catch(() => null);
    if (!response.ok) setError(json?.error || "Could not revoke the MCP token.");
    else {
      setTokens((current) =>
        current.map((item) =>
          item._id === token._id ? { ...item, revokedAt: new Date().toISOString() } : item,
        ),
      );
    }
    setRevokingId(null);
  }

  async function copyText(label: string, value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      window.setTimeout(() => setCopied(null), 1800);
    } catch {
      setError("Clipboard access was blocked. Select and copy the value manually.");
    }
  }

  const activeCount = tokens.filter((token) => !token.revokedAt).length;

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">AI publishing access</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Blog MCP</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            Generate secure credentials that let your AI review and publish one idempotent article per London calendar day.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs text-emerald-200">
          <ShieldCheck className="h-4 w-4" />
          {activeCount} active {activeCount === 1 ? "connection" : "connections"}
        </div>
      </div>

      {error && (
        <div className="mt-6 rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">
          {error}
        </div>
      )}

      <div className="mt-8 grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
        <section className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-400/10 text-orange-300">
              <KeyRound className="h-5 w-5" />
            </span>
            <div>
              <h2 className="font-semibold text-white">Generate an access token</h2>
              <p className="text-xs text-slate-500">Use a separate token for each AI or automation.</p>
            </div>
          </div>

          <label className="mt-6 block text-xs font-medium text-slate-400" htmlFor="mcp-token-name">
            Connection name
          </label>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Input
              id="mcp-token-name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              maxLength={80}
              placeholder="Daily blog AI"
              className="h-11 border-white/10 bg-black/20 text-white"
            />
            <Button
              type="button"
              onClick={generateToken}
              disabled={isGenerating}
              className="h-11 shrink-0 rounded-xl bg-orange-500 px-5 text-white hover:bg-orange-600"
            >
              {isGenerating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Plus className="mr-2 h-4 w-4" />}
              Generate token
            </Button>
          </div>

          <div className="mt-6 rounded-xl border border-white/[0.08] bg-black/20 p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-medium text-slate-300">MCP endpoint</p>
                <code className="mt-1 block break-all text-xs text-sky-300">{endpoint}</code>
              </div>
              <Button type="button" variant="ghost" size="icon" onClick={() => copyText("endpoint", endpoint)} className="shrink-0 text-slate-400 hover:text-white">
                {copied === "endpoint" ? <Check className="h-4 w-4 text-emerald-300" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
              <Bot className="h-5 w-5" />
            </span>
            <div>
              <h2 className="font-semibold text-white">Daily task instruction</h2>
              <p className="text-xs text-slate-500">Add this to your AI host's recurring schedule.</p>
            </div>
          </div>
          <div className="mt-6 rounded-xl border border-white/[0.08] bg-black/20 p-4">
            <p className="max-h-36 overflow-auto whitespace-pre-wrap text-xs leading-5 text-slate-300">{dailyPrompt}</p>
          </div>
          <Button type="button" variant="outline" onClick={() => copyText("prompt", dailyPrompt)} className="mt-3 w-full border-white/10 bg-transparent text-slate-200 hover:bg-white/[0.06] hover:text-white">
            {copied === "prompt" ? <Check className="mr-2 h-4 w-4 text-emerald-300" /> : <Copy className="mr-2 h-4 w-4" />}
            Copy daily instruction
          </Button>
        </section>
      </div>

      {generatedToken && (
        <section className="mt-5 rounded-2xl border border-amber-300/25 bg-amber-300/[0.08] p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-semibold text-amber-100">Copy this token now</p>
              <p className="mt-1 text-xs text-amber-100/60">For security, the full token cannot be displayed again after you dismiss it.</p>
            </div>
            <Button type="button" variant="ghost" size="sm" onClick={() => setGeneratedToken("")} className="text-amber-100/60 hover:text-amber-100">
              Dismiss
            </Button>
          </div>
          <div className="mt-4 flex items-center gap-2 rounded-xl bg-black/30 p-3">
            <code className="min-w-0 flex-1 select-all break-all text-xs text-amber-100">{generatedToken}</code>
            <Button type="button" size="icon" onClick={() => copyText("token", generatedToken)} className="shrink-0 bg-amber-300 text-slate-950 hover:bg-amber-200">
              {copied === "token" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
          <div className="mt-4 flex items-center justify-between gap-3">
            <p className="text-xs text-amber-100/60">Ready-to-copy generic MCP configuration</p>
            <Button type="button" variant="ghost" size="sm" onClick={() => copyText("config", clientConfig)} className="text-amber-100 hover:bg-amber-200/10 hover:text-white">
              {copied === "config" ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
              Copy config
            </Button>
          </div>
          <pre className="mt-2 max-h-56 overflow-auto rounded-xl bg-black/30 p-4 text-[11px] leading-5 text-slate-300">{clientConfig}</pre>
        </section>
      )}

      <section className="mt-5 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="font-semibold text-white">Access tokens</h2>
            <p className="mt-1 text-xs text-slate-500">Revoke a token immediately if a device or AI configuration is no longer trusted.</p>
          </div>
          {isLoading && <Loader2 className="h-4 w-4 animate-spin text-slate-500" />}
        </div>

        <div className="mt-5 divide-y divide-white/[0.07]">
          {tokens.map((token) => (
            <div key={token._id} className="flex flex-col gap-3 py-4 first:pt-0 sm:flex-row sm:items-center">
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${token.revokedAt ? "bg-slate-400/10 text-slate-500" : "bg-emerald-400/10 text-emerald-300"}`}>
                {token.revokedAt ? <XCircle className="h-4 w-4" /> : <KeyRound className="h-4 w-4" />}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-medium text-slate-200">{token.name}</p>
                  <span className={`rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase ${token.revokedAt ? "bg-slate-400/10 text-slate-500" : "bg-emerald-400/10 text-emerald-300"}`}>
                    {token.revokedAt ? "Revoked" : "Active"}
                  </span>
                </div>
                <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-slate-500">
                  <code>{token.tokenPrefix}</code>
                  <span>Created {formatDate(token.createdAt)}</span>
                  <span className="flex items-center gap-1"><Clock3 className="h-3 w-3" /> Last used {formatDate(token.lastUsedAt)}</span>
                </div>
              </div>
              {!token.revokedAt && (
                <Button type="button" variant="ghost" size="sm" onClick={() => revokeToken(token)} disabled={revokingId === token._id} className="self-start text-red-300 hover:bg-red-400/10 hover:text-red-200 sm:self-auto">
                  {revokingId === token._id && <Loader2 className="mr-2 h-3.5 w-3.5 animate-spin" />}
                  Revoke
                </Button>
              )}
            </div>
          ))}
          {!isLoading && tokens.length === 0 && (
            <p className="py-10 text-center text-sm text-slate-500">No AI connections yet. Generate the first token above.</p>
          )}
        </div>
      </section>
    </div>
  );
}
