import Link from "next/link";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/layout/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-lg font-extrabold tracking-tight text-primary"
        >
          <span
            aria-hidden
            className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground"
          >
            <span className="font-display text-sm">TJ</span>
          </span>
          <span className="hidden sm:inline">{SITE.shortName}</span>
        </Link>

        <nav aria-label="Hlavní navigace" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex items-center rounded-md px-3 py-2 font-display text-sm font-semibold uppercase tracking-wide text-foreground/80",
                    "transition-colors hover:text-primary focus-visible:text-primary"
                  )}
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="absolute left-0 top-full hidden min-w-64 pt-2 group-hover:block group-focus-within:block">
                    <ul className="rounded-lg border border-border bg-background p-2 shadow-lg">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block rounded-md px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-primary-soft hover:text-primary"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
