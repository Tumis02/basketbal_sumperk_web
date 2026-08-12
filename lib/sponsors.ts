export type Sponsor = {
  name: string;
  logo: string;
  url?: string;
};

export const SPONSORS: Sponsor[] = [
   {
    name: "Město Šumperk",
    logo: "/logo_spknew.jpg",
    url: "https://www.sumperk.cz//",
  },
  {
    name: "MK Fruit",
    logo: "/mk_fruit.png",
    url: "https://www.mkfruit.cz/",
  },
  {
    name: "UVAX",
    logo: "/uvax.jpg",
    url: "https://uvax.cz/",
  }
  
];
