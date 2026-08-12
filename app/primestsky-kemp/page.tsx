import {
  CalendarDays,
  MapPin,
  Phone,
  UserRound,
  Utensils,
  Wallet,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/shared/section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Příměstský kemp",
  description:
    "Příměstský basketbalový kemp TJ ŠUMPERK BASKETBAL – informace a přihlášky.",
  path: "/primestsky-kemp",
});

const INFO_ITEMS = [
  {
    icon: CalendarDays,
    label: "Termín konání",
    value: "24. 8. (pondělí) – 28. 8. 2026 (pátek)",
  },
  {
    icon: MapPin,
    label: "Místo konání",
    value: "Tyršův stadion (Žerotínova 55, Šumperk)",
  },
  {
    icon: Utensils,
    label: "Stravování",
    value: "Svačina, oběd a pitný režim po celou dobu kempu",
  },
  {
    icon: UserRound,
    label: "Určen pro",
    value: "Hráči a hráčky ročník narození 2017–2018",
  },
  {
    icon: Wallet,
    label: "Cena",
    value: "3 200,– Kč",
  },
];

export default function PrimestskyKempPage() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <p className="font-display text-sm font-bold uppercase tracking-[0.22em] text-accent">
            Léto v Šumperku
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Příměstský kemp
          </h1>
          <p className="mt-5 max-w-4xl text-base text-primary-foreground/85 sm:text-lg">
            Týdenní příměstský kemp pro děti – sport, hry a basketbal pod
            vedením zkušených trenérů.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Pořadatel: TJ Šumperk, z.s."
          title="Příměstský kemp 2026"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-background p-6">
            <dl className="space-y-4">
              {INFO_ITEMS.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3 text-sm">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <div>
                    <dt className="text-muted-foreground">{label}</dt>
                    <dd className="mt-0.5 font-semibold text-foreground">
                      {value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-sm text-muted-foreground">
              Podrobnosti k platbě naleznete v přihlášce.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-muted/40 p-6 text-sm leading-relaxed text-foreground">
            <p className="font-display text-base font-bold">
              K přihlášení dětí je nutno vyplnit všechny tyto dokumenty
            </p>
            <p className="mt-3 text-muted-foreground">
              Dokument{" "}
              <a
                href="/prihlaska-primestsky-kemp-2026.pdf"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-foreground underline underline-offset-2 hover:text-primary"
              >
                Přihláška příměstský kemp 2026
              </a>
              . Přihlášku přineste prosím vyplněnou na některý z tréninků.
            </p>
            <p className="mt-3 text-muted-foreground">
              Níže uvedené dokumenty vyplněné odevzdejte v den nástupu na
              kemp:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
              <li>
                <a
                  href="/Prohlaseni-rodicu-bezinfekcnost-WEB.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-foreground underline underline-offset-2 hover:text-primary"
                >
                  Prohlášení rodičů – bezinfekčnost
                </a>{" "}
                (PDF ke stažení)
              </li>
              <li>
                <a
                  href="/Posudek-o-zdravotni-zpusobilosti-hrace-WEB.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-foreground underline underline-offset-2 hover:text-primary"
                >
                  Posudek o zdravotní způsobilosti hráče
                </a>{" "}
                (PDF ke stažení)
              </li>
            </ul>
            <p className="mt-4 font-semibold text-foreground underline underline-offset-2">
              Uzávěrka přihlášek je 30. 4. 2026.
            </p>
            <p className="mt-1 font-semibold text-foreground underline underline-offset-2">
              Datum úhrady kempu do 31. 5. 2026.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-border bg-background p-6">
          <p className="font-display text-base font-bold text-foreground">
            Hlavní organizátor campu
          </p>
          <p className="mt-2 text-sm text-foreground">
            Veronika Šubrtová, Šumperk, Žerotínova 1691/55, PSČ 787 01
          </p>
          <div className="mt-3 flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 shrink-0 text-primary" />
            <a
              href="tel:+420728893754"
              className="text-foreground hover:text-primary"
            >
              +420 728 893 754
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
