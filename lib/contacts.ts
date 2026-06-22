export const CLUB = {
  legalName: "TJ Šumperk, z.s.",
  department: "Oddíl basketbalu",
  street: "Žerotínova 1691/55",
  postalCode: "787 01",
  city: "Šumperk",
  country: "Česká republika",
  ico: "146 17 790",
  email: "info@basketbalsumperk.cz",
} as const;

export type ContactPerson = {
  name: string;
  role: string;
  phone?: string;
  email?: string;
};

export const MANAGEMENT: ContactPerson[] = [
  {
    name: "Ondřej Šich",
    role: "Předseda oddílu",
    phone: "+420 602 833 270",
    email: "ondrej.sich@basketbalsumperk.cz",
  },
  {
    name: "Martin Žáček",
    role: "Organizační pracovník",
    phone: "+420 731 437 477",
    email: "zaca@basketbalsumperk.cz",
  },
];

export type Coach = {
  name: string;
  teams: string[];
  phone?: string;
};

export const COACHES: Coach[] = [
  { name: "Radim Šíma", teams: ["Muži"], phone: "+420 602 515 296" },
  { name: "Marek Müller", teams: ["Muži"], phone: "+420 605 433 093" },
  {
    name: "Renata Kurečková",
    teams: ["Ženy", "U12 + U13"],
    phone: "+420 728 043 934",
  },
  {
    name: "Dagmar Polášková",
    teams: ["Ženy", "U12 + U13"],
    phone: "+420 773 920 222",
  },
  {
    name: "Martina Müllerová Zelená",
    teams: ["U19 junioři"],
    phone: "+420 773 688 137",
  },
  { name: "Filip Tůma", teams: ["U19 junioři"], phone: "+420 608 047 371" },
  { name: "Aleš Skála", teams: ["U17 kadeti"], phone: "+420 737 967 957" },
  { name: "Marek Mikuláš", teams: ["U17 kadeti"] },
  {
    name: "Tereza Čechová",
    teams: ["U15 + U17 dívky", "Ženy"],
    phone: "+420 608 724 885",
  },
  { name: "Alexandra Podhorná", teams: ["U15 + U17 dívky"] },
  {
    name: "Adam Roller",
    teams: ["Přípravka + U9"],
    phone: "+420 721 225 292",
  },
  {
    name: "Veronika Šubrtová",
    teams: ["Přípravka + U9"],
    phone: "+420 728 893 754",
  },
];

export const TEAM_COACH_MAP: Record<string, string[]> = {
  "pripravka-u9": ["Přípravka + U9"],
  "u10-u11": [],
  "u12-u13": ["U12 + U13"],
  "u15-u17-divky": ["U15 + U17 dívky"],
  "u17-kadeti": ["U17 kadeti"],
  "u19-juniori": ["U19 junioři"],
  muzi: ["Muži"],
  zeny: ["Ženy"],
};

export function getCoachesForTeam(slug: string): Coach[] {
  const keys = TEAM_COACH_MAP[slug] ?? [];
  if (keys.length === 0) return [];
  return COACHES.filter((c) => c.teams.some((t) => keys.includes(t)));
}
