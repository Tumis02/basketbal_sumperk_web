import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/shared/section";
import { getAllNews, getAllTeams } from "@/lib/content";
import Link from "next/link";

export default async function HomePage() {
  const [teams, news] = await Promise.all([getAllTeams(), getAllNews()]);
  const latestNews = news.slice(0, 3);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary via-primary to-primary/80" />
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-accent">
            TJ Šumperk Basketbal
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Basketbal v Šumperku – od přípravky po dospělé.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            Rozvíjíme děti i dospělé, hrajeme krajské i ligové soutěže. Přidej
            se k nám – chceš umět hrát basketbal? Kontaktuj nás.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/kontakty" variant="accent" size="lg">
              Kontaktuj nás
            </Button>
            <Button href="/tymy" variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Naše týmy
            </Button>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Aktuality"
          title="Aktuální dění v oddílu"
          description="Sledujte nejnovější informace o trénincích, soutěžích a kempech."
        />
        {latestNews.length === 0 ? (
          <p className="text-muted-foreground">Zatím nejsou žádné aktuality.</p>
        ) : (
          <ul className="grid gap-6 md:grid-cols-3">
            {latestNews.map(({ frontmatter }) => (
              <li
                key={frontmatter.slug}
                className="group rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
              >
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  {new Date(frontmatter.date).toLocaleDateString("cs-CZ")}
                </p>
                <h3 className="mt-2 font-display text-lg font-bold leading-snug text-foreground">
                  <Link
                    href={`/aktuality/${frontmatter.slug}`}
                    className="hover:text-primary"
                  >
                    {frontmatter.title}
                  </Link>
                </h3>
                {frontmatter.excerpt ? (
                  <p className="mt-3 text-sm text-muted-foreground">
                    {frontmatter.excerpt}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-10">
          <Link
            href="/aktuality"
            className="inline-flex items-center gap-1 font-display text-sm font-semibold uppercase tracking-wide text-primary hover:underline"
          >
            Všechny aktuality <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <Section className="bg-muted">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Aktuální dění
            </p>
            <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Co se právě děje v oddílu
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Úspěšně jsme ukončili letní basketbalový kemp, který přinesl
                spoustu skvělých zážitků a sportovních úspěchů. V nejbližší
                době se můžete těšit na příměstský kemp, který proběhne
                25.–29. 8. 2025.
              </p>
              <p>
                4. září se koná akce <strong>Sportuj v Šumperku</strong>,
                v rámci které proběhne nábor nových hráčů. Všichni zájemci
                o basketbal jsou srdečně vítáni!
              </p>
              <p>
                Od 1. září startují tréninky dle rozpisu, takže je ideální
                čas připojit se k naší basketbalové rodině a začít novou
                sezónu plnou energie a sportovních výzev.
              </p>
            </div>
          </div>

          <div>
            <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Shrnutí sezóny 2024/2025
            </p>
            <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Ohlédnutí za uplynulou sezónou
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Uplynulá sezóna byla pro náš klub velmi úspěšná a plná
                skvělých momentů. Naše týmy se účastnily několika soutěží
                a v každé z nich předvedly bojovné výkony. Nejmladší tým
                U11 mix se účastnil Středomoravského přeboru, kde sbíral
                první cenné zkušenosti a ukázal velký potenciál do budoucna.
              </p>
              <p>
                V kategoriích U15 dívky, U15 chlapci, U17, U19 a muži jsme
                byli pravidelně vidět v ligových a oblastních soutěžích.
                Každý tým ukázal velké odhodlání, bojovnost a chuť se
                zlepšovat, což se projevilo i na výsledcích v tabulkách.
              </p>
              <p>
                Máme velkou radost z toho, že se nám daří udržovat širokou
                základnu v přípravce. Děkujeme všem hráčům, rodičům
                a trenérům za podporu a těšíme se na další společné
                basketbalové zážitky v nové sezóně!
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Hráčské kategorie"
          title="Naše týmy"
          description="Tréninky pro všechny věkové kategorie – od přípravky po dospělé."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {teams.map(({ frontmatter }) => (
            <li key={frontmatter.slug}>
              <Link
                href={`/tymy/${frontmatter.slug}`}
                className="block h-full rounded-xl border border-border bg-background p-5 transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
              >
                <p className="text-xs uppercase tracking-wide text-accent">
                  {frontmatter.ageRange}
                </p>
                <h3 className="mt-2 font-display text-base font-bold text-foreground">
                  {frontmatter.name}
                </h3>
                {frontmatter.shortDescription ? (
                  <p className="mt-3 text-sm text-muted-foreground">
                    {frontmatter.shortDescription}
                  </p>
                ) : null}
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Více informací <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
