import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ImageIcon } from "lucide-react";
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
              className="group block h-full overflow-hidden rounded-xl border border-border bg-background transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
            >
              <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-muted text-muted-foreground/60">
                {frontmatter.hero ? (
                  <Image
                    src={frontmatter.hero}
                    alt={frontmatter.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <>
                    <ImageIcon className="h-10 w-10" aria-hidden />
                    <span className="sr-only">Fotka týmu bude doplněna</span>
                  </>
                )}
              </div>
              <div className="p-6">
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
                  Detail kategorie{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
