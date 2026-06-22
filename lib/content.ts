import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

type Collection = "teams" | "news" | "coaches" | "sponsors" | "camps";

export type TeamFrontmatter = {
  slug: string;
  name: string;
  ageRange?: string;
  order?: number;
  shortDescription?: string;
  hero?: string;
  coaches?: string[];
  trainingDays?: string[];
};

export type NewsFrontmatter = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  cover?: string;
  published?: boolean;
};

export type SponsorFrontmatter = {
  slug: string;
  name: string;
  url?: string;
  logo?: string;
  order?: number;
};

export type Doc<T> = {
  frontmatter: T;
  content: string;
};

async function readCollection<T>(collection: Collection): Promise<Doc<T>[]> {
  const dir = path.join(CONTENT_DIR, collection);
  let files: string[] = [];
  try {
    files = await fs.readdir(dir);
  } catch {
    return [];
  }
  const docs = await Promise.all(
    files
      .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
      .map(async (file) => {
        const filePath = path.join(dir, file);
        const raw = await fs.readFile(filePath, "utf8");
        const { data, content } = matter(raw);
        const slug = (data.slug as string | undefined) ?? file.replace(/\.(md|mdx)$/, "");
        return {
          frontmatter: { ...(data as object), slug } as T,
          content,
        };
      })
  );
  return docs;
}

export async function getAllTeams(): Promise<Doc<TeamFrontmatter>[]> {
  const docs = await readCollection<TeamFrontmatter>("teams");
  return docs.sort(
    (a, b) => (a.frontmatter.order ?? 99) - (b.frontmatter.order ?? 99)
  );
}

export async function getTeamBySlug(slug: string) {
  const teams = await getAllTeams();
  return teams.find((t) => t.frontmatter.slug === slug) ?? null;
}

export async function getAllNews(): Promise<Doc<NewsFrontmatter>[]> {
  const docs = await readCollection<NewsFrontmatter>("news");
  return docs
    .filter((d) => d.frontmatter.published !== false)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}

export async function getNewsBySlug(slug: string) {
  const items = await getAllNews();
  return items.find((n) => n.frontmatter.slug === slug) ?? null;
}

export async function getAllSponsors(): Promise<Doc<SponsorFrontmatter>[]> {
  const docs = await readCollection<SponsorFrontmatter>("sponsors");
  return docs.sort(
    (a, b) => (a.frontmatter.order ?? 99) - (b.frontmatter.order ?? 99)
  );
}
