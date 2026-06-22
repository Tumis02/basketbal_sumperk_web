import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { getAllTeams, getTeamBySlug } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  const teams = await getAllTeams();
  return teams.map((t) => ({ slug: t.frontmatter.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const team = await getTeamBySlug(slug);
  if (!team) return {};
  return pageMetadata({
    title: team.frontmatter.name,
    description: team.frontmatter.shortDescription,
    path: `/tymy/${team.frontmatter.slug}`,
  });
}

export default async function TymDetailPage({ params }: Props) {
  const { slug } = await params;
  const team = await getTeamBySlug(slug);
  if (!team) notFound();

  const { frontmatter, content } = team;

  return (
    <>
      <section className="border-b border-border bg-muted">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Link
            href="/tymy"
            className="text-sm font-semibold uppercase tracking-wide text-primary hover:underline"
          >
            ← Týmy
          </Link>
          {frontmatter.ageRange ? (
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-accent">
              {frontmatter.ageRange}
            </p>
          ) : null}
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            {frontmatter.name}
          </h1>
          {frontmatter.shortDescription ? (
            <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              {frontmatter.shortDescription}
            </p>
          ) : null}
        </div>
      </section>

      <Section containerClassName="max-w-3xl">
        <div className="prose prose-neutral max-w-none whitespace-pre-line text-base leading-relaxed text-foreground">
          {content.trim()}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/treninky">Rozpis tréninků</Button>
          <Button href="/kontakty" variant="outline">
            Kontakty
          </Button>
        </div>
      </Section>
    </>
  );
}
