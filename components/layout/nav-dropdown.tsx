"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/lib/site";

type Props = {
  item: NavItem;
};

export function NavDropdown({ item }: Props) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const wrapRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    function onDocClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  const closeAndBlur = () => {
    setOpen(false);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLLIElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
      setOpen(false);
    }
  };

  return (
    <li
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={handleBlur}
    >
      <Link
        href={item.href}
        onClick={closeAndBlur}
        aria-haspopup={item.children ? "menu" : undefined}
        aria-expanded={item.children ? open : undefined}
        className="inline-flex items-center whitespace-nowrap rounded-md px-3 py-2 font-display text-sm font-semibold uppercase tracking-wide text-foreground/80 transition-colors hover:text-primary focus-visible:text-primary"
      >
        {item.label}
      </Link>
      {item.children && open ? (
        <div className="absolute left-0 top-full min-w-64 pt-2">
          <ul
            role="menu"
            className="rounded-lg border border-border bg-background p-2 shadow-lg"
          >
            {item.children.map((child) => (
              <li key={child.href} role="none">
                <Link
                  href={child.href}
                  role="menuitem"
                  onClick={closeAndBlur}
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
  );
}
