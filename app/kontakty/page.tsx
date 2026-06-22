import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/shared/icons";
import { Section, SectionHeading } from "@/components/shared/section";
import { SITE } from "@/lib/site";
import { CLUB, COACHES, MANAGEMENT, type ContactPerson } from "@/lib/contacts";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Kontakty",
  description:
    "Kontakty na vedení oddílu a trenéry jednotlivých kategorií TJ Šumperk Basketbal.",
  path: "/kontakty",
});

function telHref(phone: string) {
  return `tel:${phone.replace(/\s/g, "")}`;
}

function PersonCard({ person }: { person: ContactPerson }) {
  return (
    <div className="rounded-xl border border-border bg-background p-5">
      <p className="font-display text-base font-bold text-foreground">
        {person.name}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">{person.role}</p>
      <dl className="mt-4 space-y-2 text-sm">
        {person.phone ? (
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 shrink-0 text-primary" />
            <a
              href={telHref(person.phone)}
              className="text-foreground hover:text-primary"
            >
              {person.phone}
            </a>
          </div>
        ) : null}
        {person.email ? (
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 shrink-0 text-primary" />
            <a
              href={`mailto:${person.email}`}
              className="break-all text-foreground hover:text-primary"
            >
              {person.email}
            </a>
          </div>
        ) : null}
      </dl>
    </div>
  );
}

export default function KontaktyPage() {
  return (
    <>
      <Section>
        <SectionHeading
          eyebrow="Spojte se s námi"
          title="Kontakty"
          description="Vedení oddílu, trenéři jednotlivých kategorií a sídlo klubu."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-background p-6">
            <h2 className="font-display text-lg font-bold text-foreground">
              {CLUB.legalName}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {CLUB.department}
            </p>
            <p className="mt-4 inline-flex items-start gap-2 text-sm text-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                {CLUB.street}
                <br />
                {CLUB.postalCode} {CLUB.city}
                <br />
                {CLUB.country}
              </span>
            </p>
            <dl className="mt-4 grid gap-2 text-sm">
              <div className="flex flex-wrap gap-x-2">
                <dt className="text-muted-foreground">IČ:</dt>
                <dd className="text-foreground">{CLUB.ico}</dd>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href={`mailto:${CLUB.email}`}
                  className="text-foreground hover:text-primary"
                >
                  {CLUB.email}
                </a>
              </div>
            </dl>
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

          <div className="rounded-xl border border-border bg-muted/40 p-6 text-sm leading-relaxed text-foreground">
            <p className="font-display text-base font-bold">
              Přihlášení do oddílu
            </p>
            <p className="mt-3 text-muted-foreground">
              Při přihlášení do oddílu basketbalu budete potřebovat formuláře
              <strong className="text-foreground"> GDPR souhlas </strong>
              a <strong className="text-foreground">Přihláška do TJ</strong>.
            </p>
            <p className="mt-3 text-muted-foreground">
              Při uvedení hráče na soupisce družstva budete potřebovat
              <strong className="text-foreground">
                {" "}
                žádost o vystavení licence ČBF
              </strong>
              .
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-muted">
        <SectionHeading
          eyebrow="Vedení oddílu"
          title="Kdo nás vede"
          description="Pro obecné dotazy se obracejte na vedení oddílu."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {MANAGEMENT.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Trenéři"
          title="Trenéři kategorií"
          description="Konkrétní dotazy k tréninkům směřujte na trenéry dané kategorie."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COACHES.map((coach) => (
            <li
              key={coach.name}
              className="rounded-xl border border-border bg-background p-5"
            >
              <p className="font-display text-base font-bold text-foreground">
                {coach.name}
              </p>
              <p className="mt-1 text-sm text-accent">
                {coach.teams.join(", ")}
              </p>
              {coach.phone ? (
                <div className="mt-3 flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <a
                    href={telHref(coach.phone)}
                    className="text-foreground hover:text-primary"
                  >
                    {coach.phone}
                  </a>
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
