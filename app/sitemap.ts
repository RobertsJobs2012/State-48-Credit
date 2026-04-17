import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "/",             priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/services",     priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/how-it-works", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/results",      priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/pricing",      priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/about",        priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/comparison",   priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/get-started",  priority: 1.0, changeFrequency: "weekly" as const },
  ];

  const now = new Date();
  return pages.map((p) => ({
    url: `${site.url}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
