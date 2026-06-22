import type { MetadataRoute } from "next";
import { getAllNews, getAllTeams } from "@/lib/content";
import { SITE } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = SITE.url.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes = [
    "",
    "/tymy",
    "/treninky",
    "/aktuality",
    "/fotogalerie",
    "/kontakty",
    "/kemp-2026",
    "/primestsky-kemp",
  ].map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const [teams, news] = await Promise.all([getAllTeams(), getAllNews()]);

  const teamRoutes = teams.map((t) => ({
    url: `${base}/tymy/${t.frontmatter.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const newsRoutes = news.map((n) => ({
    url: `${base}/aktuality/${n.frontmatter.slug}`,
    lastModified: new Date(n.frontmatter.date),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...teamRoutes, ...newsRoutes];
}
