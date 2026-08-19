export type HallKey = "tyrsuv" | "zs1" | "zs3" | "zs5";

export type Hall = {
  key: HallKey;
  name: string;
  shortName: string;
  address?: string;
  occupancyImage?: string;
};

export const HALLS: Record<HallKey, Hall> = {
  tyrsuv: {
    key: "tyrsuv",
    name: "Tyršův stadion",
    shortName: "Tyršův stadion",
    address: "Žerotínova 1691/55, Šumperk",
    occupancyImage: "/treninky/Treninky_26-27.png"
  },
  zs1: {
    key: "zs1",
    name: "1. ZŠ Šumperk",
    shortName: "1. ZŠ",
    address: "Dr. E. Beneše 974/1, Šumperk",
    occupancyImage: "/treninky/Treninky_26-27_1zs.png"
  },
    zs5: {
    key: "zs5",
    name: "5. ZŠ Šumperk",
    shortName: "5. ZŠ",
    address: "Vrchlického 1846/22, Šumperk",
    occupancyImage: "/treninky/Treninky_26-27_5zs.png"
  },
   zs3: {
    key: "zs3",
    name: "3. ZŠ Šumperk",
    shortName: "3. ZŠ",
    address: "8. května 870/63, Šumperk",
    occupancyImage: "/treninky/Treninky_26-27_3zs.png"
  },

};

export type TrainingSlot = {
  team: string;
  from: string;
  to: string;
  hall: HallKey;
};

export type DaySchedule = {
  day: string;
  slots: TrainingSlot[];
};

// Rozpis (SCHEDULE) často střídá tvary tréninkových skupin (např. "U12 + U13"
// vs. samostatné "U12" a "U13"). Aby detail týmu nevyžadoval ruční
// dohledávání při každé úpravě rozpisu, párujeme podle klíčových slov
// obsažených v názvu tréninkové skupiny místo přesné shody celého řetězce.
export const TEAM_KEYWORDS: Record<string, string[]> = {
  "pripravka-u9": ["přípravka", "u9"],
  "u10": ["u10"],
  u12: ["u12"],
  u13: ["u13"],
  "u15-zaci": ["u15", "žáci"],
  "u17-kadetky": ["kadetky"],
  "u19-juniori": ["u19", "junioři"],
  muzi: ["muži"],
  zeny: ["ženy"],
};

export type TeamTrainingEntry = { day: string; slot: TrainingSlot };

export function getTrainingsForTeam(slug: string): TeamTrainingEntry[] {
  const keywords = TEAM_KEYWORDS[slug] ?? [];
  if (keywords.length === 0) return [];
  const result: TeamTrainingEntry[] = [];
  for (const day of SCHEDULE) {
    for (const slot of day.slots) {
      const groups = slot.team.toLowerCase().split("+").map((g) => g.trim());
      const matches = groups.some((group) =>
        keywords.some((keyword) => group.includes(keyword))
      );
      if (matches) result.push({ day: day.day, slot });
    }
  }
  return result;
}

export const SCHEDULE: DaySchedule[] = [
  {
    day: "Pondělí",
    slots: [
      { team: "Přípravka", from: "15:30", to: "17:00", hall: "zs3" },
      { team: "U12", from: "15:30", to: "17:00", hall: "tyrsuv" },
      { team: "U13", from: "17:00", to: "18:30", hall: "tyrsuv" },
      { team: "U17 kadetky", from: "18:30", to: "20:00", hall: "tyrsuv" },
    ],
  },
  {
    day: "Úterý",
    slots: [
      { team: "U10", from: "16:30", to: "18:00", hall: "zs1" },
      { team: "U15 žáci", from: "17:30", to: "19:00", hall: "tyrsuv" },
      { team: "U19 junioři", from: "19:00", to: "20:30", hall: "tyrsuv" },
      //{ team: "Muži", from: "20:30", to: "22:00", hall: "tyrsuv" },
    ],
  },
  {
    day: "Středa",
    slots: [
      { team: "U15 žáci", from: "15:30", to: "17:00", hall: "tyrsuv" },
      { team: "U13", from: "17:00", to: "18:30", hall: "tyrsuv" },
      { team: "U17 kadetky", from: "18:30", to: "20:00", hall: "tyrsuv" },
    ],
  },
  {
    day: "Čtvrtek",
    slots: [
      { team: "Přípravka", from: "16:30", to: "17:30", hall: "zs1" },
      { team: "U10", from: "15:30", to: "17:00", hall: "tyrsuv" },
      { team: "U12", from: "17:00", to: "18:30", hall: "tyrsuv" },
      { team: "U19 junioři", from: "18:30", to: "20:00", hall: "tyrsuv" },
      { team: "Muži", from: "20:00", to: "21:30", hall: "tyrsuv" },
    ],
  },
  {
    day: "Pátek",
    slots: [
      { team: "U10", from: "15:30", to: "16:30", hall: "zs1" },
      { team: "U13", from: "16:00", to: "17:30", hall: "zs5" },
      { team: "U15 + U19", from: "16:30", to: "18:00", hall: "tyrsuv" },
      { team: "U17 kadetky + Ženy", from: "18:00", to: "19:30", hall: "tyrsuv" },
      { team: "Muži", from: "19:30", to: "21:00", hall: "tyrsuv" },
    ],
  },
];
