import { Section, SectionHeading } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Basketbalový kemp 2026",
  description:
    "Letní basketbalový kemp TJ Šumperk Basketbal 2026 – informace, termíny a přihlášky.",
  path: "/kemp-2026",
});

export default function Kemp2026Page() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-accent">
            Léto 2026
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Basketbalový kemp 2026
          </h1>
          <p className="mt-5 max-w-2xl text-base text-primary-foreground/85 sm:text-lg">
            Tradiční letní kemp pro mladé basketbalisty. Základní informace
            zveřejňujeme postupně.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Informace"
          title="Co vás čeká"
          description="Detaily kempu (termín, místo, cena, přihlášení) budou doplňovány v průběhu jara."
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
