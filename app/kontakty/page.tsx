import Link from "next/link";
import { MapPin } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/shared/icons";
import { Section, SectionHeading } from "@/components/shared/section";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Kontakty",
  description: "Kontakty na vedení oddílu a trenéry TJ Šumperk Basketbal.",
  path: "/kontakty",
});

export default function KontaktyPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Spojte se s námi"
        title="Kontakty"
        description="Kontakty na vedení oddílu, trenéry a místo tréninků."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-background p-6">
          <h2 className="font-display text-lg font-bold text-foreground">
            TJ Šumperk – oddíl basketbalu
          </h2>
          <p className="mt-3 inline-flex items-start gap-2 text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>
              Šumperk
              <br />
              Česká republika
            </span>
          </p>
          <div className="mt-5 flex items-center gap-3">
            <Link
              href={SITE.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/80 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <FacebookIcon className="h-4 w-4" />
            </Link>
            <Link
              href={SITE.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/80 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <InstagramIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="rounded-xl border border-dashed border-border bg-muted/40 p-6 text-muted-foreground">
          Kontakty na trenéry jednotlivých kategorií budou doplněny z CMS.
        </div>
      </div>
    </Section>
  );
}
