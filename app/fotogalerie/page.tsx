import { Section, SectionHeading } from "@/components/shared/section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Fotogalerie",
  description: "Fotky ze zápasů, tréninků a kempů TJ Šumperk Basketbal.",
  path: "/fotogalerie",
});

export default function FotogaleriePage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Galerie"
        title="Fotogalerie"
        description="Fotky ze zápasů, tréninků a kempů."
      />
      <div className="rounded-xl border border-dashed border-border bg-muted/40 p-8 text-muted-foreground">
        Galerie alb bude napojena na CMS / Cloudinary v dalším kroku.
      </div>
    </Section>
  );
}
