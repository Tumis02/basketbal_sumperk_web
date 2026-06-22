import { Section, SectionHeading } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Příměstský kemp",
  description:
    "Příměstský basketbalový kemp TJ Šumperk Basketbal – informace a přihlášky.",
  path: "/primestsky-kemp",
});

export default function PrimestskyKempPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-accent">
            Léto v Šumperku
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Příměstský kemp
          </h1>
          <p className="mt-5 max-w-2xl text-base text-primary-foreground/85 sm:text-lg">
            Týdenní příměstský kemp pro děti – sport, hry a basketbal pod
            vedením zkušených trenérů.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Informace"
          title="Co vás čeká"
          description="Detaily (termíny, místo, cena, přihlášky) budou doplňovány."
        />
        <div className="rounded-xl border border-dashed border-border bg-muted/40 p-8 text-muted-foreground">
          Obsah bude doplněn z CMS.
        </div>
        <div className="mt-10">
          <Button href="/kontakty" variant="accent">
            Mám zájem – kontaktovat
          </Button>
        </div>
      </Section>
    </>
  );
}
