import { MapPin } from "lucide-react";
import { Section, SectionHeading } from "@/components/shared/section";
import { HallOccupancyImage } from "@/components/treninky/hall-occupancy-image";
import { pageMetadata } from "@/lib/seo";
import { HALLS, SCHEDULE, type HallKey } from "@/lib/training-schedule";

export const metadata = pageMetadata({
  title: "Tréninky",
  description:
    "Rozpis tréninků jednotlivých kategorií TJ Šumperk Basketbal pro sezónu 2025/2026.",
  path: "/treninky",
});

const hallBadgeStyle: Record<HallKey, string> = {
  tyrsuv: "bg-primary/10 text-primary",
  zs1: "bg-accent/10 text-accent",
  zs5: "bg-amber-100 text-amber-800",
};

export default function TreninkyPage() {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="Sezóna 2025/2026"
          title="Rozpis tréninků"
          description="Tréninky probíhají od 1. září 2025 podle níže uvedeného rozpisu. Pokud není uvedeno jinak, koná se trénink na Tyršově stadionu."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SCHEDULE.map((day) => (
            <div
              key={day.day}
              className="overflow-hidden rounded-xl border border-border bg-background"
            >
              <div className="border-b border-border bg-muted/60 px-5 py-3">
                <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-primary">
                  {day.day}
                </p>
              </div>
              <ul className="divide-y divide-border">
                {day.slots.map((slot) => (
                  <li
                    key={`${day.day}-${slot.team}-${slot.from}`}
                    className="flex items-start justify-between gap-3 px-5 py-3"
                  >
                    <div className="min-w-0">
                      <p className="font-display text-sm font-bold text-foreground">
                        {slot.team}
                      </p>
                      <p className="mt-0.5 text-xs tabular-nums text-muted-foreground">
                        {slot.from} – {slot.to}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${hallBadgeStyle[slot.hall]}`}
                    >
                      {HALLS[slot.hall].shortName}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="font-semibold uppercase tracking-wide">
            Legenda hal:
          </span>
          {(Object.keys(HALLS) as HallKey[]).map((key) => (
            <span
              key={key}
              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-semibold ${hallBadgeStyle[key]}`}
            >
              {HALLS[key].shortName}
              <span className="font-normal opacity-80">
                – {HALLS[key].name}
              </span>
            </span>
          ))}
        </div>
      </Section>

      <Section className="bg-muted">
        <SectionHeading
          eyebrow="Harmonogramy hal"
          title="Obsazenost hal"
          description="Kliknutím na harmonogram zobrazíte detailní obsazenost haly ve větším formátu."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {(Object.keys(HALLS) as HallKey[]).map((key) => {
            const hall = HALLS[key];
            return (
              <div
                key={key}
                className="rounded-xl border border-border bg-background p-5"
              >
                <p className="font-display text-base font-bold text-foreground">
                  {hall.name}
                </p>
                {hall.address ? (
                  <p className="mt-1 inline-flex items-start gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    {hall.address}
                  </p>
                ) : null}
                {hall.occupancyImage ? (
                  <HallOccupancyImage
                    src={hall.occupancyImage}
                    alt={`Obsazenost – ${hall.name}`}
                  />
                ) : (
                  <div className="mt-4 flex aspect-[4/3] items-center justify-center rounded-lg border border-dashed border-border bg-muted/40 text-center text-sm text-muted-foreground">
                    Harmonogram bude doplněn
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
