import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/shared/section";
import { getAllTeams } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Týmy",
  description:
    "Přehled všech basketbalových týmů TJ Šumperk – od přípravky po dospělé.",
  path: "/tymy",
});

export default async function TymyPage() {
  const teams = await getAllTeams();

  return (
    <Section>
      <SectionHeading
        eyebrow="Hráčské kategorie"
        title="Týmy TJ Šumperk Basketbal"
        description="Sportujeme s dětmi i dospělými ve všech věkových kategoriích. Vyberte si svou kategorii a zjistěte víc."
      />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {teams.map(({ frontmatter }) => (
          <li key={frontmatter.slug}>
            <Link
              href={`/tymy/${frontmatter.slug}`}
              className="block h-full rounded-xl border border-border bg-background p-6 transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
            >
              <p className="text-xs uppercase tracking-wide text-accent">
                {frontmatter.ageRange}
              </p>
              <h2 className="mt-2 font-display text-lg font-bold text-foreground">
                {frontmatter.name}
              </h2>
              {frontmatter.shortDescription ? (
                <p className="mt-3 text-sm text-muted-foreground">
                  {frontmatter.shortDescription}
                </p>
              ) : null}
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Detail kategorie <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
