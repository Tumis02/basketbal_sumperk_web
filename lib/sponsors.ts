export type Sponsor = {
  name: string;
  logo: string;
  url?: string;
};

export const SPONSORS: Sponsor[] = [
  {
    name: "UVAX",
    logo: "/uvax.jpg",
    url: "https://uvax.cz/",
  },
  {
    name: "Benefit",
    logo: "/benefit.jpg",
    url: "https://www.benefitas.cz/",
  },
  {
    name: "MK Fruit",
    logo: "/mk_fruit.png",
    url: "https://www.mkfruit.cz/",
  },
];
