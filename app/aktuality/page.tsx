import Link from "next/link";
import { Section, SectionHeading } from "@/components/shared/section";
import { getAllNews } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Aktuality",
  description: "Aktuální dění v oddílu TJ Šumperk Basketbal.",
  path: "/aktuality",
});

export default async function AktualityPage() {
  const news = await getAllNews();

  return (
    <Section>
      <SectionHeading
        eyebrow="Novinky"
        title="Aktuality"
        description="Co se právě děje v basketbalovém oddílu."
      />
      {news.length === 0 ? (
        <p className="text-muted-foreground">Zatím žádné aktuality.</p>
      ) : (
        <ul className="space-y-6">
          {news.map(({ frontmatter }) => (
            <li
              key={frontmatter.slug}
              className="rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
            >
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                {new Date(frontmatter.date).toLocaleDateString("cs-CZ")}
              </p>
              <h2 className="mt-2 font-display text-xl font-bold text-foreground">
                <Link
                  href={`/aktuality/${frontmatter.slug}`}
                  className="hover:text-primary"
                >
                  {frontmatter.title}
                </Link>
              </h2>
              {frontmatter.excerpt ? (
                <p className="mt-3 text-base text-muted-foreground">
                  {frontmatter.excerpt}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
