import { Section, SectionHeading } from "@/components/shared/section";
import { PhotoGallery } from "@/components/gallery/photo-gallery";
import { getGalleryPhotos, getGalleryPhotosFromDir } from "@/lib/gallery";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Fotogalerie",
  description: "Fotky ze zápasů, tréninků a kempů TJ ŠUMPERK BASKETBAL.",
  path: "/fotogalerie",
});

export default function FotogaleriePage() {
  const photos = [
    ...getGalleryPhotos(),
    ...getGalleryPhotosFromDir("kemp", "Basketbalový kemp 2026"),
  ];

  return (
    <Section>
      <SectionHeading
        eyebrow="Galerie"
        title="Fotogalerie"
        description="Fotky ze zápasů, tréninků a kempů."
      />
      {photos.length > 0 ? (
        <PhotoGallery photos={photos} />
      ) : (
        <div className="rounded-xl border border-dashed border-border bg-muted/40 p-8 text-muted-foreground">
          Zatím tu nejsou žádné fotky.
        </div>
      )}
    </Section>
  );
}
