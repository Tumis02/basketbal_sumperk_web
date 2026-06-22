import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/shared/section";
import { getAllNews, getNewsBySlug } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  const news = await getAllNews();
  return news.map((n) => ({ slug: n.frontmatter.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const item = await getNewsBySlug(slug);
  if (!item) return {};
  return pageMetadata({
    title: item.frontmatter.title,
    description: item.frontmatter.excerpt,
    path: `/aktuality/${item.frontmatter.slug}`,
  });
}

export default async function AktualitaDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = await getNewsBySlug(slug);
  if (!item) notFound();

  const { frontmatter, content } = item;

  return (
    <Section containerClassName="max-w-3xl">
      <Link
        href="/aktuality"
        className="text-sm font-semibold uppercase tracking-wide text-primary hover:underline"
      >
        ← Aktuality
      </Link>
      <p className="mt-6 text-xs uppercase tracking-wide text-muted-foreground">
        {new Date(frontmatter.date).toLocaleDateString("cs-CZ")}
      </p>
      <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        {frontmatter.title}
      </h1>
      <article className="prose prose-neutral mt-8 max-w-none whitespace-pre-line text-base leading-relaxed text-foreground">
        {content.trim()}
      </article>
    </Section>
  );
}
