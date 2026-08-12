import type { Route } from "next";

export const SITE = {
  name: "TJ ŠUMPERK BASKETBAL",
  shortName: "TJ ŠUMPERK BASKETBAL",
  description:
    "Tréninky, týmy od přípravky po dospělé, kempy a aktuální dění.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://basketbalsumperk.cz",
  locale: "cs_CZ",
  social: {
    facebook: "https://www.facebook.com/basketbalsumperk",
    instagram: "https://www.instagram.com/basketbal_sumperk",
  },
} as const;

export type NavItem = {
  label: string;
  href: Route;
  children?: NavItem[];
};

export const TEAMS: NavItem[] = [
  { label: "Přípravka + U9", href: "/tymy/pripravka-u9" },
  { label: "U10 nejmladší minižáci", href: "/tymy/u10" },
  { label: "U12 mladší minižáci", href: "/tymy/u12" },
  { label: "U13 starší minižáci", href: "/tymy/u13" },
  { label: "U15 žáci", href: "/tymy/u15-zaci" },
  { label: "U17 kadetky", href: "/tymy/u17-kadetky" },
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
 /*  { label: "Zápasy", href: "/TODO" },  */
  { label: "Aktuality", href: "/aktuality" },
  { label: "Foto", href: "/fotogalerie" },
  { label: "Kempy", href: "/kemp-2026", children: CAMPS },
  { label: "Kontakty", href: "/kontakty" },
];
