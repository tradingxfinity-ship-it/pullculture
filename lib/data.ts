export type Pull = {
  id: string;
  title: string;
  setYear: string;
  value: string;
  delta: string;
  up: boolean;
  grade: string;
  serial: string;
  accent: string;
  category: "Sports" | "Pokémon" | "One Piece" | "TCG";
};

export const TOP_PULLS: Pull[] = [
  {
    id: "p1",
    title: "Shohei Skyline Auto",
    setYear: "2024 Pullculture Chrome",
    value: "$28,450",
    delta: "+12.4%",
    up: true,
    grade: "GEM MT 10",
    serial: "84019572",
    accent: "#FFFFFF",
    category: "Sports",
  },
  {
    id: "p2",
    title: "Charizard Inferno V",
    setYear: "2024 Pullculture Vault",
    value: "$18,200",
    delta: "+6.2%",
    up: true,
    grade: "GEM MT 10",
    serial: "77194822",
    accent: "#DADADA",
    category: "Pokémon",
  },
  {
    id: "p3",
    title: "Luffy Captain Holo",
    setYear: "2023 One Piece OP-04",
    value: "$14,750",
    delta: "+3.8%",
    up: true,
    grade: "GEM MT 10",
    serial: "60128841",
    accent: "#B5B5B5",
    category: "One Piece",
  },
  {
    id: "p4",
    title: "Pullculture Rookie Refractor",
    setYear: "2026 Pullculture Select",
    value: "$12,900",
    delta: "+9.1%",
    up: true,
    grade: "GEM MT 10",
    serial: "33254109",
    accent: "#FFFFFF",
    category: "Sports",
  },
  {
    id: "p5",
    title: "Pikachu Foil 1st Edition",
    setYear: "1999 Pokémon Base",
    value: "$9,850",
    delta: "-1.2%",
    up: false,
    grade: "NM-MT 8",
    serial: "48331049",
    accent: "#9A9A9A",
    category: "Pokémon",
  },
  {
    id: "p6",
    title: "Black Lotus Alpha",
    setYear: "1993 MTG Alpha",
    value: "$47,500",
    delta: "+18.6%",
    up: true,
    grade: "GEM MT 10",
    serial: "10293847",
    accent: "#E5E5E5",
    category: "TCG",
  },
  {
    id: "p7",
    title: "Zoro Three Sword",
    setYear: "2024 One Piece OP-07",
    value: "$6,420",
    delta: "+4.3%",
    up: true,
    grade: "GEM MT 10",
    serial: "55678923",
    accent: "#C8C8C8",
    category: "One Piece",
  },
  {
    id: "p8",
    title: "Court Vision Auto",
    setYear: "2024 Pullculture Prizm",
    value: "$22,150",
    delta: "-0.8%",
    up: false,
    grade: "GEM MT 10",
    serial: "91827364",
    accent: "#8A8A8A",
    category: "Sports",
  },
];

export const LATEST_NEWS = [
  {
    id: "n1",
    title:
      "PSA 10 Pullculture Founder Sells for $4.6M at Heritage — Sets New Modern Era Record",
    timeAgo: "2 hours ago",
    tag: "Auction",
    accent: "#FFFFFF",
    image: "/2007-UD-Kobe-Jordan-card-graphic--scaled.avif",
  },
  {
    id: "n2",
    title:
      "Shohei Ohtani Topps Chrome Rookie Crosses All-Time High After MVP Run",
    timeAgo: "4 hours ago",
    tag: "Markets",
    accent: "#D4D4D4",
    image: "/image.webp",
  },
  {
    id: "n3",
    title:
      "Pokémon Card Index Continues Hot Streak in June — Up 18% Year-to-Date",
    timeAgo: "6 hours ago",
    tag: "Pokémon",
    accent: "#A8A8A8",
    image: "/images.jpeg",
  },
];

export const MARKET_INDICES = [
  {
    name: "PULLCULTURE SPORTS INDEX",
    sub: "All Sports · PSA 10",
    value: "$182,540",
    delta: "+2.41%",
    up: true,
    spark: [12, 18, 14, 22, 19, 28, 32, 30, 35, 38, 42, 48],
  },
  {
    name: "POKÉMON INDEX",
    sub: "Top 100 · Graded",
    value: "$97,620",
    delta: "+3.18%",
    up: true,
    spark: [22, 18, 25, 24, 28, 26, 32, 30, 34, 38, 36, 42],
  },
  {
    name: "ONE PIECE INDEX",
    sub: "OP-01 to OP-08",
    value: "$48,210",
    delta: "+5.92%",
    up: true,
    spark: [10, 12, 11, 14, 16, 14, 18, 22, 24, 28, 30, 34],
  },
  {
    name: "BASKETBALL INDEX",
    sub: "NBA Modern · Top 100",
    value: "$203,910",
    delta: "-1.02%",
    up: false,
    spark: [40, 38, 42, 36, 38, 34, 32, 30, 32, 28, 26, 24],
  },
];
