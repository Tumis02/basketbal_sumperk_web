import { Section, SectionHeading } from "@/components/shared/section";
import { PhotoGallery } from "@/components/gallery/photo-gallery";
import { getGalleryPhotosFromDir } from "@/lib/gallery";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Basketbalový kemp 2026",
  description:
    "Letní basketbalový kemp TJ ŠUMPERK BASKETBAL 2026 – informace, termíny a přihlášky.",
  path: "/kemp-2026",
});

export default function Kemp2026Page() {
  const photos = getGalleryPhotosFromDir("kemp", "Basketbalový kemp 2026");

  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <p className="font-display text-sm font-bold uppercase tracking-[0.22em] text-accent">
            Léto 2026
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Basketbalový kemp Dolní Čermná 2026
          </h1>
        {/*   <p className="mt-5 max-w-4xl text-base text-primary-foreground/85 sm:text-lg">
            Tradiční letní kemp pro mladé basketbalisty. Základní informace
            zveřejňujeme postupně.
          </p> */}
        </div>
      </section>

    {/*   <Section>
        <SectionHeading
          eyebrow="Informace"
          title="Co vás čeká"
          description="Detaily kempu (termín, místo, cena, přihlášení) budou doplňovány v průběhu jara."
        />
      </Section> */}

      {photos.length > 0 ? (
        <Section>
          <SectionHeading eyebrow="Galerie" title="Fotky z kempu" />
          <PhotoGallery photos={photos} />
        </Section>
      ) : null}
    </>
  );
}
