import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { getPublishedBlogs } from "@/lib/blogs";

const routes: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/services", priority: 0.95, changeFrequency: "weekly" },
  { path: "/services/plumbing", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/plumbing/installation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/plumbing/emergency", priority: 0.85, changeFrequency: "monthly" },
  { path: "/services/plumbing/repairs", priority: 0.85, changeFrequency: "monthly" },
  { path: "/services/heating", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/heating/emergency-heating", priority: 0.85, changeFrequency: "monthly" },
  { path: "/services/heating/emergency-boiler", priority: 0.85, changeFrequency: "monthly" },
  { path: "/services/heating/installation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/heating/service", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/heating/repairs", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/air-conditioning", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/air-conditioning/maintenance", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/air-conditioning/installation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/air-conditioning/repairs", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/gas", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/gas/boiler-installation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/gas/cooker-installation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/gas/fire-installation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/gas/safety-certificates", priority: 0.85, changeFrequency: "monthly" },
  { path: "/services/gas/leak-detection", priority: 0.85, changeFrequency: "monthly" },
  { path: "/services/gas/pipe-installation", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/gas/annual-checks", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/gas/landlord-certificates", priority: 0.85, changeFrequency: "monthly" },
  { path: "/services/boiler", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/boiler/breakdown-repairs", priority: 0.85, changeFrequency: "monthly" },
  { path: "/services/boiler/new-installation", priority: 0.85, changeFrequency: "monthly" },
  { path: "/services/boiler/replacement", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/boiler/servicing", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/boiler/system-combi-fitting", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/boiler/pressure-issues", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/boiler/pilot-light", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/boiler/warranty", priority: 0.75, changeFrequency: "monthly" },
  { path: "/services/boiler/power-flush", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.9, changeFrequency: "weekly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const blogs = await getPublishedBlogs(500);

  const staticRoutes = routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogRoutes = blogs.map((blog) => ({
    url: absoluteUrl(`/blog/${blog.slug}`),
    lastModified: new Date(blog.updatedAt || blog.createdAt),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...staticRoutes, ...blogRoutes];
}
