import { Section, SectionHeading } from "@/components/shared/section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Tréninky",
  description:
    "Rozpis tréninků jednotlivých kategorií TJ Šumperk Basketbal pro aktuální sezónu.",
  path: "/treninky",
});

export default function TreninkyPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Rozpis"
        title="Tréninky"
        description="Rozpis tréninků pro aktuální sezónu. Detailní rozpis bude doplněn."
      />
      <div className="rounded-xl border border-dashed border-border bg-muted/40 p-8 text-muted-foreground">
        Obsah bude doplněn z CMS – rozpis dnů a časů pro jednotlivé kategorie.
      </div>
    </Section>
  );
}
