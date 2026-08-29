"use client";

import { FormEvent, useEffect, useState } from "react";
import { Loader2, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

export type AdminBlog = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  description: string;
  writtenBy: string;
  seoTitle?: string;
  metaDescription?: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
};

type FormState = {
  title: string;
  slug: string;
  excerpt: string;
  description: string;
  writtenBy: string;
  seoTitle: string;
  metaDescription: string;
  published: boolean;
};

const emptyForm: FormState = {
  title: "",
  slug: "",
  excerpt: "",
  description: "",
  writtenBy: "London Climate Systems",
  seoTitle: "",
  metaDescription: "",
  published: true,
};

export function BlogEditor({
  blog,
  open,
  onClose,
  onSaved,
}: {
  blog: AdminBlog | null;
  open: boolean;
  onClose: () => void;
  onSaved: (blog: AdminBlog) => void;
}) {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;
    setError("");
    setForm(blog ? {
      title: blog.title,
      slug: blog.slug,
      excerpt: blog.excerpt ?? "",
      description: blog.description,
      writtenBy: blog.writtenBy,
      seoTitle: blog.seoTitle ?? "",
      metaDescription: blog.metaDescription ?? "",
      published: blog.published,
    } : emptyForm);
  }, [blog, open]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function submit(event: FormEvent) {
    event.preventDefault();
    setIsSaving(true);
    setError("");
    const response = await fetch(blog ? `/api/admin/blogs/${blog._id}` : "/api/admin/blogs", {
      method: blog ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const json = await response.json().catch(() => null);
    setIsSaving(false);
    if (!response.ok) {
      setError(json?.error ?? "Could not save the article.");
      return;
    }
    onSaved(json.data);
    onClose();
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/75 p-0 backdrop-blur-sm sm:items-center sm:p-5" role="dialog" aria-modal="true" aria-labelledby="article-editor-title">
      <div className="flex max-h-[96vh] w-full max-w-5xl flex-col overflow-hidden rounded-t-3xl border border-white/10 bg-[#0d1420] shadow-2xl sm:max-h-[92vh] sm:rounded-3xl">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-7">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-400">Content studio</p>
            <h2 id="article-editor-title" className="mt-1 text-xl font-semibold text-white">{blog ? "Edit article" : "Create article"}</h2>
          </div>
          <Button type="button" size="icon" variant="ghost" onClick={onClose} aria-label="Close editor" className="rounded-full text-slate-400"><X className="h-5 w-5" /></Button>
        </div>

        <form onSubmit={submit} className="min-h-0 flex-1 overflow-y-auto">
          <div className="grid gap-8 p-5 sm:p-7 lg:grid-cols-[1fr_320px]">
            <div className="space-y-5">
              <div className="space-y-2"><Label htmlFor="blog-title" className="text-slate-300">Title</Label><Input id="blog-title" value={form.title} onChange={(event) => update("title", event.target.value)} minLength={5} maxLength={200} required className="border-white/10 bg-white/[0.04]" placeholder="A useful, specific article title" /></div>
              <div className="space-y-2"><div className="flex justify-between"><Label htmlFor="blog-excerpt" className="text-slate-300">Short summary</Label><span className="text-[10px] text-slate-600">{form.excerpt.length}/320</span></div><Textarea id="blog-excerpt" value={form.excerpt} onChange={(event) => update("excerpt", event.target.value)} maxLength={320} rows={3} className="border-white/10 bg-white/[0.04]" placeholder="Used on the blog listing and social previews." /></div>
              <div className="space-y-2">
                <div className="flex justify-between"><Label htmlFor="blog-content" className="text-slate-300">Article content</Label><span className="text-[10px] text-slate-600">{form.description.length.toLocaleString()} characters</span></div>
                <Textarea id="blog-content" value={form.description} onChange={(event) => update("description", event.target.value)} minLength={50} maxLength={50000} required rows={18} className="border-white/10 bg-white/[0.04] font-mono leading-7" placeholder="Write in Markdown. Use **bold**, ## headings, - lists, [links](https://example.com), or a table." />
                <details className="rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-xs text-slate-400">
                  <summary className="cursor-pointer font-medium text-slate-300">Formatting help</summary>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <div><p className="mb-1 text-slate-500">Bold text</p><code className="text-orange-300">**important words**</code></div>
                    <div><p className="mb-1 text-slate-500">Heading</p><code className="text-orange-300">## Section title</code></div>
                    <div className="sm:col-span-2"><p className="mb-1 text-slate-500">Table</p><pre className="overflow-x-auto whitespace-pre text-orange-300">{"| Service | Price |\n| --- | --- |\n| Boiler check | £90 |"}</pre></div>
                  </div>
                </details>
              </div>
            </div>

            <aside className="space-y-5">
              <div className="space-y-2"><Label htmlFor="blog-author" className="text-slate-300">Author</Label><Input id="blog-author" value={form.writtenBy} onChange={(event) => update("writtenBy", event.target.value)} maxLength={120} required className="border-white/10 bg-white/[0.04]" /></div>
              <div className="space-y-2"><Label htmlFor="blog-slug" className="text-slate-300">URL slug</Label><Input id="blog-slug" value={form.slug} onChange={(event) => update("slug", event.target.value.toLowerCase().replace(/\s+/g, "-"))} maxLength={220} className="border-white/10 bg-white/[0.04]" placeholder="generated-from-title" /></div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                <p className="mb-4 text-xs font-semibold text-white">Search preview</p>
                <div className="space-y-2"><Label htmlFor="blog-seo-title" className="text-slate-400">SEO title</Label><Input id="blog-seo-title" value={form.seoTitle} onChange={(event) => update("seoTitle", event.target.value)} maxLength={70} className="border-white/10 bg-black/20" placeholder="Defaults to article title" /><p className="text-right text-[9px] text-slate-600">{form.seoTitle.length}/70</p></div>
                <div className="mt-3 space-y-2"><Label htmlFor="blog-meta" className="text-slate-400">Meta description</Label><Textarea id="blog-meta" value={form.metaDescription} onChange={(event) => update("metaDescription", event.target.value)} maxLength={170} rows={3} className="border-white/10 bg-black/20" placeholder="Defaults to the short summary" /><p className="text-right text-[9px] text-slate-600">{form.metaDescription.length}/170</p></div>
              </div>

              <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-white/10 bg-white/[0.025] p-4"><span><strong className="block text-sm text-white">Publish article</strong><span className="text-xs text-slate-500">Turn off to save as a draft</span></span><Switch checked={form.published} onCheckedChange={(checked) => update("published", checked)} /></label>
            </aside>
          </div>

          <div className="sticky bottom-0 flex items-center justify-between gap-4 border-t border-white/10 bg-[#0d1420]/95 px-5 py-4 backdrop-blur-xl sm:px-7">
            <div className="min-w-0">{error && <p className="truncate text-sm text-red-300">{error}</p>}</div>
            <div className="flex shrink-0 gap-2"><Button type="button" variant="ghost" onClick={onClose}>Cancel</Button><Button type="submit" disabled={isSaving} className="bg-orange-500 text-white hover:bg-orange-600">{isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}{isSaving ? "Saving…" : "Save article"}</Button></div>
          </div>
        </form>
      </div>
    </div>
  );
}
