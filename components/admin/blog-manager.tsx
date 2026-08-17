"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  Edit3,
  ExternalLink,
  FilePlus2,
  FileText,
  Loader2,
  Search,
  Trash2,
} from "lucide-react";
import { AdminBlog, BlogEditor } from "@/components/admin/blog-editor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function BlogManager() {
  const [blogs, setBlogs] = useState<AdminBlog[]>([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [editorOpen, setEditorOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<AdminBlog | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  async function loadBlogs() {
    setIsLoading(true);
    setError("");
    const response = await fetch("/api/admin/blogs", { cache: "no-store" });
    if (response.status === 401) {
      window.location.reload();
      return;
    }
    const json = await response.json().catch(() => null);
    if (!response.ok) setError(json?.error ?? "Could not load articles.");
    else setBlogs(json.data);
    setIsLoading(false);
  }

  useEffect(() => { void loadBlogs(); }, []);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return blogs;
    return blogs.filter((blog) => `${blog.title} ${blog.writtenBy} ${blog.slug}`.toLowerCase().includes(query));
  }, [blogs, search]);

  function createArticle() {
    setEditingBlog(null);
    setEditorOpen(true);
  }

  function editArticle(blog: AdminBlog) {
    setEditingBlog(blog);
    setEditorOpen(true);
  }

  function saveArticle(saved: AdminBlog) {
    setBlogs((current) => {
      const exists = current.some((blog) => blog._id === saved._id);
      if (!exists) return [saved, ...current];
      return current.map((blog) => blog._id === saved._id ? saved : blog);
    });
  }

  async function deleteArticle(blog: AdminBlog) {
    if (!window.confirm(`Permanently delete “${blog.title}”? This cannot be undone.`)) return;
    setDeletingId(blog._id);
    setError("");
    const response = await fetch(`/api/admin/blogs/${blog._id}`, { method: "DELETE" });
    const json = await response.json().catch(() => null);
    if (!response.ok) setError(json?.error ?? "Could not delete the article.");
    else setBlogs((current) => current.filter((item) => item._id !== blog._id));
    setDeletingId(null);
  }

  const liveCount = blogs.filter((blog) => blog.published).length;

  return (
    <div>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">Content studio</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Articles</h1>
          <p className="mt-2 text-sm text-slate-400">Create, edit, preview, publish, and remove blog content.</p>
        </div>
        <Button onClick={createArticle} className="h-11 rounded-xl bg-orange-500 px-5 text-white hover:bg-orange-600"><FilePlus2 className="mr-2 h-4 w-4" />New article</Button>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4"><p className="text-2xl font-semibold text-white">{blogs.length}</p><p className="mt-1 text-xs text-slate-500">All articles</p></div>
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4"><p className="text-2xl font-semibold text-emerald-300">{liveCount}</p><p className="mt-1 text-xs text-slate-500">Published</p></div>
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4"><p className="text-2xl font-semibold text-slate-300">{blogs.length - liveCount}</p><p className="mt-1 text-xs text-slate-500">Drafts</p></div>
      </div>

      <div className="mt-5 flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.035] px-4">
        <Search className="h-4 w-4 text-slate-500" />
        <Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search articles…" className="h-12 border-0 bg-transparent px-0 shadow-none focus-visible:ring-0" />
      </div>

      {error && <div className="mt-5 rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">{error}</div>}

      <div className="mt-5 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025]">
        {isLoading ? (
          <div className="flex items-center justify-center gap-2 py-24 text-sm text-slate-500"><Loader2 className="h-4 w-4 animate-spin" />Loading articles…</div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center px-5 py-24 text-center"><span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.05] text-slate-500"><FileText className="h-6 w-6" /></span><h2 className="mt-4 font-semibold text-white">{blogs.length ? "No matching articles" : "Your journal is ready"}</h2><p className="mt-2 max-w-sm text-sm text-slate-500">{blogs.length ? "Try a different search." : "Create your first article with search preview and draft controls."}</p>{!blogs.length && <Button onClick={createArticle} className="mt-5 bg-orange-500 text-white hover:bg-orange-600">Create article</Button>}</div>
        ) : (
          <div className="divide-y divide-white/[0.07]">
            {filtered.map((blog) => (
              <article key={blog._id} className="group grid gap-4 p-4 transition-colors hover:bg-white/[0.025] sm:grid-cols-[1fr_auto] sm:items-center sm:p-5">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${blog.published ? "bg-emerald-400/10 text-emerald-300" : "bg-slate-400/10 text-slate-400"}`}>{blog.published ? "Published" : "Draft"}</span>
                    <time className="text-[10px] text-slate-600">Updated {new Date(blog.updatedAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</time>
                  </div>
                  <h2 className="mt-2 truncate font-semibold text-slate-100">{blog.title}</h2>
                  <p className="mt-1 truncate text-xs text-slate-500">/blog/{blog.slug} · {blog.writtenBy}</p>
                </div>
                <div className="flex items-center gap-1 sm:justify-end">
                  {blog.published && <Button asChild type="button" variant="ghost" size="icon" className="rounded-full text-slate-500 hover:text-white"><Link href={`/blog/${blog.slug}`} target="_blank" aria-label={`View ${blog.title}`}><ExternalLink className="h-4 w-4" /></Link></Button>}
                  <Button type="button" variant="ghost" size="icon" onClick={() => editArticle(blog)} className="rounded-full text-slate-400 hover:text-white" aria-label={`Edit ${blog.title}`}><Edit3 className="h-4 w-4" /></Button>
                  <Button type="button" variant="ghost" size="icon" onClick={() => void deleteArticle(blog)} disabled={deletingId === blog._id} className="rounded-full text-slate-500 hover:bg-red-400/10 hover:text-red-300" aria-label={`Delete ${blog.title}`}>{deletingId === blog._id ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}</Button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      <BlogEditor blog={editingBlog} open={editorOpen} onClose={() => setEditorOpen(false)} onSaved={saveArticle} />
    </div>
  );
}
