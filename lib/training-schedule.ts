export type HallKey = "tyrsuv" | "zs1" | "zs5";

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
    address: "Žerotínova 55, Šumperk",
    occupancyImage: "/treninky_25-26_.jpg"
  },
  zs1: {
    key: "zs1",
    name: "1. ZŠ Šumperk",
    shortName: "1. ZŠ",
    address: "Dr. E. Beneše 1, Šumperk",
    occupancyImage: "/treninky_25-26_1_zs.jpg"
  },
  zs5: {
    key: "zs5",
    name: "5. ZŠ Šumperk",
    shortName: "5. ZŠ",
    address: "Sluneční 38, Šumperk",
    occupancyImage: "/treninky_5zs_2025-2026_.jpg"
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

export const TEAM_SCHEDULE_MAP: Record<string, string[]> = {
  "pripravka-u9": ["Přípravka + U9"],
  "u10-u11": ["U10 + U11"],
  "u12-u13": ["U12 + U13"],
  "u15-u17-divky": ["U15 + U17 dívky"],
  "u17-kadeti": ["U17 kadeti", "U17 + U19"],
  "u19-juniori": ["U19 junioři", "U17 + U19"],
  muzi: ["Muži"],
  zeny: ["Ženy"],
};

export type TeamTrainingEntry = { day: string; slot: TrainingSlot };

export function getTrainingsForTeam(slug: string): TeamTrainingEntry[] {
  const keys = TEAM_SCHEDULE_MAP[slug] ?? [];
  if (keys.length === 0) return [];
  const result: TeamTrainingEntry[] = [];
  for (const day of SCHEDULE) {
    for (const slot of day.slots) {
      if (keys.includes(slot.team)) result.push({ day: day.day, slot });
    }
  }
  return result;
}

export const SCHEDULE: DaySchedule[] = [
  {
    day: "Pondělí",
    slots: [
      { team: "U10 + U11", from: "15:30", to: "17:00", hall: "tyrsuv" },
      { team: "U12 + U13", from: "17:00", to: "18:30", hall: "tyrsuv" },
      { team: "U15 + U17 dívky", from: "18:30", to: "20:00", hall: "tyrsuv" },
    ],
  },
  {
    day: "Úterý",
    slots: [
      { team: "Přípravka + U9", from: "16:30", to: "18:00", hall: "zs1" },
      { team: "U17 kadeti", from: "17:30", to: "19:00", hall: "tyrsuv" },
      { team: "U19 junioři", from: "19:00", to: "20:30", hall: "tyrsuv" },
      { team: "Muži", from: "20:30", to: "22:00", hall: "tyrsuv" },
    ],
  },
  {
    day: "Středa",
    slots: [
      { team: "U10 + U11", from: "15:30", to: "17:00", hall: "tyrsuv" },
      { team: "U12 + U13", from: "17:00", to: "18:30", hall: "tyrsuv" },
      { team: "U15 + U17 dívky", from: "18:30", to: "20:00", hall: "tyrsuv" },
    ],
  },
  {
    day: "Čtvrtek",
    slots: [
      { team: "U15 + U17 dívky", from: "15:30", to: "17:00", hall: "tyrsuv" },
      { team: "U17 kadeti", from: "17:00", to: "18:30", hall: "tyrsuv" },
      { team: "U19 junioři", from: "18:30", to: "20:00", hall: "tyrsuv" },
      { team: "Muži", from: "20:00", to: "21:30", hall: "tyrsuv" },
    ],
  },
  {
    day: "Pátek",
    slots: [
      { team: "Přípravka + U9", from: "15:30", to: "16:30", hall: "zs1" },
      { team: "U10 + U11", from: "15:30", to: "17:00", hall: "zs5" },
      { team: "U12 + U13", from: "16:30", to: "18:00", hall: "zs1" },
      { team: "U17 + U19", from: "16:30", to: "18:00", hall: "tyrsuv" },
      { team: "Ženy", from: "18:00", to: "19:30", hall: "tyrsuv" },
      { team: "Muži", from: "19:30", to: "21:00", hall: "tyrsuv" },
    ],
  },
];
