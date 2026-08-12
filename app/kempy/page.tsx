import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/shared/section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Kempy",
  description:
    "Basketbalové kempy TJ ŠUMPERK BASKETBAL – letní kemp v Dolní Čermné a příměstský kemp v Šumperku.",
  path: "/kempy",
});

const CAMPS = [
  {
    slug: "kemp-2026",
    name: "Kemp 2026",
    eyebrow: "Léto 2026 · Dolní Čermná",
    description:
      "Tradiční letní pobytový kemp pro mladé basketbalisty a basketbalistky.",
    image: "/kemp_2026.jpeg",
  },
  {
    slug: "primestsky-kemp",
    name: "Příměstský kemp 2026",
    eyebrow: "24.–28. 8. 2026 · Šumperk",
    description:
      "Týdenní příměstský kemp pro děti – sport, hry a basketbal pod vedením zkušených trenérů.",
    image: "/primestak.jpeg",
  },
];

export default function KempyPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Léto 2026"
        title="Kempy TJ ŠUMPERK BASKETBAL"
        description="Vyberte si kemp, který vás zajímá, a zjistěte víc o termínech, ceně a přihlášení."
      />
      <ul className="grid gap-5 sm:grid-cols-2">
        {CAMPS.map((camp) => (
          <li key={camp.slug}>
            <Link
              href={`/${camp.slug}`}
              className="group block h-full overflow-hidden rounded-xl border border-border bg-background transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <Image
                  src={camp.image}
                  alt={camp.name}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wide text-accent">
                  {camp.eyebrow}
                </p>
                <h2 className="mt-2 font-display text-lg font-bold text-foreground">
                  {camp.name}
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  {camp.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Detail kempu{" "}
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
