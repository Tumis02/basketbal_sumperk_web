import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, ImageIcon, MapPin, Phone, UserRound } from "lucide-react";
import { Section, SectionHeading } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { getAllTeams, getTeamBySlug } from "@/lib/content";
import { getCoachesForTeam } from "@/lib/contacts";
import { pageMetadata } from "@/lib/seo";
import { HALLS, getTrainingsForTeam, type HallKey } from "@/lib/training-schedule";

export async function generateStaticParams() {
  const teams = await getAllTeams();
  return teams.map((t) => ({ slug: t.frontmatter.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const team = await getTeamBySlug(slug);
  if (!team) return {};
  return pageMetadata({
    title: team.frontmatter.name,
    description: team.frontmatter.shortDescription,
    path: `/tymy/${team.frontmatter.slug}`,
  });
}

const hallBadgeStyle: Record<HallKey, string> = {
  tyrsuv: "bg-primary/10 text-primary",
  zs1: "bg-accent/10 text-accent",
  zs5: "bg-amber-100 text-amber-800",
};

export default async function TymDetailPage({ params }: Props) {
  const { slug } = await params;
  const team = await getTeamBySlug(slug);
  if (!team) notFound();

  const { frontmatter, content } = team;
  const trainings = getTrainingsForTeam(frontmatter.slug);
  const coaches = getCoachesForTeam(frontmatter.slug);

  return (
    <>
      <section className="border-b border-border bg-muted">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-12 lg:px-8">
          <div>
            <Link
              href="/tymy"
              className="text-sm font-semibold uppercase tracking-wide text-primary hover:underline"
            >
              ← Týmy
            </Link>
            {frontmatter.ageRange ? (
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-accent">
                {frontmatter.ageRange}
              </p>
            ) : null}
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              {frontmatter.name}
            </h1>
            {frontmatter.shortDescription ? (
              <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
                {frontmatter.shortDescription}
              </p>
            ) : null}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/treninky">Celý rozpis tréninků</Button>
              <Button href="/kontakty" variant="outline">
                Kontakty
              </Button>
            </div>
          </div>
          <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-dashed border-border bg-background text-muted-foreground/60">
            <div className="flex flex-col items-center gap-2 text-center">
              <ImageIcon className="h-12 w-12" aria-hidden />
              <p className="text-sm font-medium">Fotka týmu bude doplněna</p>
            </div>
          </div>
        </div>
      </section>

      <Section containerClassName="max-w-3xl">
        <div className="prose prose-neutral max-w-none whitespace-pre-line text-base leading-relaxed text-foreground">
          {content.trim()}
        </div>
      </Section>

      {trainings.length > 0 ? (
        <Section className="bg-muted">
          <SectionHeading
            eyebrow="Sezóna 2025/2026"
            title="Rozpis tréninků"
            description="Pravidelný týdenní rozpis tréninků této kategorie."
          />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {trainings.map(({ day, slot }) => {
              const hall = HALLS[slot.hall];
              return (
                <li
                  key={`${day}-${slot.team}-${slot.from}`}
                  className="rounded-xl border border-border bg-background p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-display text-sm font-bold uppercase tracking-[0.16em] text-primary">
                        {day}
                      </p>
                      <p className="mt-2 font-display text-lg font-bold tabular-nums text-foreground">
                        {slot.from} – {slot.to}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${hallBadgeStyle[slot.hall]}`}
                    >
                      {hall.shortName}
                    </span>
                  </div>
                  {hall.address ? (
                    <p className="mt-3 inline-flex items-start gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                      {hall.name} · {hall.address}
                    </p>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </Section>
      ) : null}

      {coaches.length > 0 ? (
        <Section>
          <SectionHeading
            eyebrow="Trenérský tým"
            title="Trenéři kategorie"
            description="Na tréninky této kategorie se těší tito trenéři."
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coaches.map((coach) => (
              <li
                key={coach.name}
                className="flex items-start gap-4 rounded-xl border border-border bg-background p-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <UserRound className="h-6 w-6" aria-hidden />
                </div>
                <div className="min-w-0">
                  <p className="font-display text-base font-bold text-foreground">
                    {coach.name}
                  </p>
                  {coach.phone ? (
                    <a
                      href={`tel:${coach.phone.replace(/\s+/g, "")}`}
                      className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      {coach.phone}
                    </a>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      {trainings.length === 0 ? (
        <Section className="bg-muted">
          <div className="mx-auto flex max-w-xl flex-col items-center gap-3 rounded-xl border border-dashed border-border bg-background p-8 text-center">
            <CalendarDays className="h-8 w-8 text-primary" aria-hidden />
            <p className="font-display text-lg font-bold text-foreground">
              Rozpis tréninků
            </p>
            <p className="text-sm text-muted-foreground">
              Pro tuto kategorii bude rozpis brzy doplněn. Aktuální rozpis
              všech týmů najdete na stránce tréninků.
            </p>
            <Button href="/treninky" variant="outline">
              Přejít na tréninky
            </Button>
          </div>
        </Section>
      ) : null}
    </>
  );
}
