import { z } from "zod";

export const blogInputSchema = z.object({
  title: z.string().trim().min(5).max(200),
  slug: z.string().trim().max(220).optional(),
  excerpt: z.string().trim().max(320).optional().default(""),
  description: z.string().trim().min(50).max(50000),
  writtenBy: z.string().trim().min(2).max(120),
  seoTitle: z.string().trim().max(70).optional().default(""),
  metaDescription: z.string().trim().max(170).optional().default(""),
  published: z.boolean().optional().default(true),
});

export type BlogInput = z.infer<typeof blogInputSchema>;

export function slugifyBlogTitle(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-/, "")
    .replace(/-$/, "");
}
