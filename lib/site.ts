import type { Route } from "next";

export const SITE = {
  name: "TJ Šumperk Basketbal",
  shortName: "TJ Šumperk Basketbal",
  description:
    "Basketbalový oddíl TJ Šumperk – tréninky, týmy od přípravky po dospělé, kempy a aktuální dění.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://basketbalsumperk.cz",
  locale: "cs_CZ",
  social: {
    facebook: "https://www.facebook.com/basketbalsumperk",
    instagram: "https://www.instagram.com/basketbalsumperk",
  },
} as const;

export type NavItem = {
  label: string;
  href: Route;
  children?: NavItem[];
};

export const TEAMS: NavItem[] = [
  { label: "Přípravka + U9", href: "/tymy/pripravka-u9" },
  { label: "U10 + U11 nejmladší minižáci", href: "/tymy/u10-u11" },
  { label: "U12 + U13 minižáci", href: "/tymy/u12-u13" },
  { label: "U15 + U17 dívky", href: "/tymy/u15-u17-divky" },
  { label: "U17 kadeti", href: "/tymy/u17-kadeti" },
  { label: "U19 junioři", href: "/tymy/u19-juniori" },
  { label: "Ženy", href: "/tymy/zeny" },
  { label: "Muži", href: "/tymy/muzi" },
];

export const CAMPS: NavItem[] = [
  { label: "Kemp 2026", href: "/kemp-2026" },
  { label: "Příměstský kemp", href: "/primestsky-kemp" },
];

export const NAV: NavItem[] = [
  { label: "Domů", href: "/" },
  { label: "Týmy", href: "/tymy", children: TEAMS },
  { label: "Tréninky", href: "/treninky" },
  { label: "Aktuality", href: "/aktuality" },
  { label: "Fotogalerie", href: "/fotogalerie" },
  { label: "Kempy", href: "/kemp-2026", children: CAMPS },
  { label: "Kontakty", href: "/kontakty" },
];
