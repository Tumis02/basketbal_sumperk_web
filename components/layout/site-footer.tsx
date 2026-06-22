import Link from "next/link";
import { FacebookIcon, InstagramIcon } from "@/components/shared/icons";
import { NAV, SITE } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-xl font-extrabold">{SITE.name}</p>
          <p className="mt-3 max-w-sm text-sm text-primary-foreground/85">
            {SITE.description}
          </p>
          <div className="mt-5 flex items-center gap-3">
            {SITE.social.facebook ? (
              <Link
                href={SITE.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/30 text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
              >
                <FacebookIcon className="h-4 w-4" />
              </Link>
            ) : null}
            {SITE.social.instagram ? (
              <Link
                href={SITE.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/30 text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
              >
                <InstagramIcon className="h-4 w-4" />
              </Link>
            ) : null}
          </div>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-wide">
            Navigace
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.slice(0, 6).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-primary-foreground/85 transition-colors hover:text-primary-foreground hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-bold uppercase tracking-wide">
            Kontakt
          </p>
          <address className="mt-4 not-italic text-sm text-primary-foreground/85">
            TJ Šumperk – oddíl basketbalu
            <br />
            Šumperk, Česká republika
          </address>
          <Link
            href="/kontakty"
            className="mt-4 inline-block text-sm font-semibold text-primary-foreground underline-offset-4 hover:underline"
          >
            Všechny kontakty →
          </Link>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-primary-foreground/75 sm:px-6 lg:px-8">
          © {year} {SITE.name}. Všechna práva vyhrazena.
        </div>
      </div>
    </footer>
  );
}
