import Image from "next/image";
import Link from "next/link";
import { NAV, SITE } from "@/lib/site";
import { MobileNav } from "@/components/layout/mobile-nav";
import { NavDropdown } from "@/components/layout/nav-dropdown";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label={SITE.name}
          className="flex items-center gap-3 font-display text-lg font-extrabold tracking-tight text-primary"
        >
          <Image
            src="/logo.png"
            alt={SITE.name}
            width={160}
            height={40}
            priority
            className="h-10 w-auto"
          />
          <span className="hidden whitespace-nowrap sm:inline">
            {SITE.shortName}
          </span>
        </Link>

        <nav aria-label="Hlavní navigace" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) =>
              item.children ? (
                <NavDropdown key={item.href} item={item} />
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center whitespace-nowrap rounded-md px-3 py-2 font-display text-sm font-semibold uppercase tracking-wide text-foreground/80 transition-colors hover:text-primary focus-visible:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
