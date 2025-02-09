export const FIELD_NAMES = {
  username: "Nombre de Usuario",
  email: "Correo Electrónico",
  userId: "ID de amigo",
  password: "Contraseña",
};

export const FIELD_TYPES = {
  username: "text",
  email: "email",
  userId: "number",
  password: "password",
};

export const sampleCards: unknown[] = [
  {
    id: "A1-001",
    name: "Bulbasaur",
    setId: "A1",
    image:
      "https://img.game8.co/3998332/91c4f79b2b3b4206205bf69db8dd3d1e.png/show",
    rarity: "◇",
    type: "Grass",
    hp: 60,
    stage: "Basic",
    packPoints: 5,
    retreatCost: 1,
    attacks: [
      {
        name: "Vine Whip",
        energyCost: {
          grass: 1,
          colorless: 1,
        },
        damage: 40,
      },
    ],
    howToGet: "Open Genetic Apex (A1) Mewtow packs",
  },
  {
    id: "A1-002",
    name: "Ivysaur",
    setId: "A1",
    image:
      "https://img.game8.co/3998332/91c4f79b2b3b4206205bf69db8dd3d1e.png/show",
    rarity: "◇◇",
    type: "Grass",
    hp: 90,
    stage: "Stage 1",
    packPoints: 70,
    retreatCost: 2,
    attacks: [
      {
        name: "Razor Leaf",
        energyCost: {
          grass: 1,
          colorless: 2,
        },
        damage: 40,
      },
    ],
    howToGet: "Open Genetic Apex (A1) Mewtow packs",
  },
  {
    id: "A1-003",
    name: "Venusaur",
    setId: "A1",
    image:
      "https://img.game8.co/4003548/e62b9303f29d5360acfef5c9a1d8c6d3.png/show",
    rarity: "◇◇◇",
    type: "Grass",
    hp: 160,
    stage: "Stage 2",
    packPoints: 150,
    retreatCost: 2,
    attacks: [
      {
        name: "Mega Drain",
        energyCost: {
          grass: 2,
          colorless: 2,
        },
        damage: 80,
        effect: "Heal 30 damage from this Pokémon.",
      },
    ],
    howToGet: "Open Genetic Apex (A1) Mewtwo packs",
  },
  {
    id: "A1-004",
    name: "Venusaur ex",
    setId: "A1",
    image:
      "https://img.game8.co/3995580/151d2c9455f83899618147d85881a75e.png/show",
    rarity: "◇◇◇◇",
    type: "Grass",
    hp: 190,
    stage: "Stage 2",
    packPoints: 500,
    retreatCost: 2,
    attacks: [
      {
        name: "Razor Leaf",
        energyCost: {
          grass: 1,
          colorless: 2,
        },
        damage: 60,
      },
      {
        name: "Giant Bloom",
        energyCost: {
          grass: 2,
          colorless: 2,
        },
        damage: 100,
        effect: "Heal 30 damage from this Pokémon.",
      },
    ],
    howToGet: "Open Genetic Apex (A1) Mewtwo packs",
  },
  {
    id: "A1-005",
    name: "Caterpie",
    setId: "A1",
    image:
      "https://img.game8.co/4004054/ac3d9d05b0255de5e3e1d2e6f5609407.png/show",
    rarity: "◇",
    type: "Grass",
    hp: 50,
    stage: "Basic",
    packPoints: 35,
    retreatCost: 1,
    attacks: [
      {
        name: "Find a Friend",
        energyCost: {
          colorless: 1,
        },
        effect: "Put 1 random Grass Pokémon from your deck into your hand.",
      },
    ],
    howToGet: "Open Genetic Apex (A1) Pikachu packs",
  },
  {
    id: "A1-036",
    name: "Charizard ex",
    setId: "A1",
    image:
      "https://img.game8.co/3995526/ac9d9361799eb484958ffd4873a7c091.png/show",
    rarity: "◇◇◇◇",
    type: "Fire",
    hp: 180,
    stage: "Stage 2",
    packPoints: 500,
    retreatCost: 2,
    attacks: [
      {
        name: "Slash",
        energyCost: {
          fire: 1,
          colorless: 2,
        },
        damage: 60,
      },
      {
        name: "Crimson Storm",
        energyCost: {
          fire: 2,
          colorless: 2,
        },
        damage: 200,
        effect: "Discard 2 Fire Energy from this Pokémon.",
      },
    ],
    howToGet: "Open Genetic Apex (A1) Charizard packs",
  },
  {
    id: "A1-007",
    name: "Butterfree",
    setId: "A1",
    image:
      "https://img.game8.co/4004057/6ba461fb08292cbabe715b6ead54dfb9.png/original",
    rarity: "◇◇◇",
    type: "Grass",
    hp: 120,
    stage: "Stage 2",
    ability: {
      name: "Powder Heal",
      description:
        "Once during your turn, you may heal 20 damage from each of your Pokemon.",
    },
    packPoints: 150,
    retreatCost: 1,
    attacks: [
      {
        name: "Gust",
        energyCost: {
          grass: 1,
          colorless: 2,
        },
        damage: 60,
      },
    ],
    howToGet: "Open Genetic Apex (A1) Pikachu packs",
  },
  {
    id: "A1-010",
    name: "Beedrill",
    setId: "A1",
    image:
      "https://img.game8.co/4006294/0ee9cea4b4d3ce61396be4dd82cd9421.png/original",
    rarity: "◇◇◇",
    type: "Grass",
    hp: 120,
    stage: "Stage 2",
    packPoints: 150,
    retreatCost: 1,
    attacks: [
      {
        name: "Sharp Sting",
        energyCost: {
          grass: 1,
        },
        damage: 70,
      },
    ],
    howToGet: "Open Genetic Apex (A1) Mewtwo packs",
  },
];

export const sampleSets: unknown[] = [
  {
    id: "A2",
    name: "Space-Time Smackdown",
    displayId: "A2",
    cardsCount: "0",
    ReleaseDate: "1738195200",
    canBeTraded: "0",
    image: "https://static.dotgg.gg/pokepocket/set-logo/A2.webp",
  },
  {
    id: "A2D",
    name: "Space-Time Smackdown | Dialga",
    displayId: "A2D",
    cardsCount: "0",
    ReleaseDate: "1738195200",
    canBeTraded: "0",
    image: "https://static.dotgg.gg/pokepocket/set-logo/A2D.webp",
  },
  {
    id: "A2P",
    name: "Space-Time Smackdown | Palkia",
    displayId: "A2P",
    cardsCount: "0",
    ReleaseDate: "1738195200",
    canBeTraded: "0",
    image: "https://static.dotgg.gg/pokepocket/set-logo/A2P.webp",
  },
  {
    id: "PROMOA4",
    name: "Promo Pack A Series Vol 4",
    displayId: "PROMOA4",
    cardsCount: "5",
    ReleaseDate: "1738195200",
    canBeTraded: "0",
    image: "https://static.dotgg.gg/pokepocket/set-logo/PROMOA4.webp",
  },
  {
    id: "A1a",
    name: "Mythical Island",
    displayId: "A1a",
    cardsCount: "68",
    ReleaseDate: "1734393600",
    canBeTraded: "1",
    image: "https://static.dotgg.gg/pokepocket/set-logo/A1a.webp",
  },
  {
    id: "PROMOA1",
    name: "Promo Pack A Series Vol 1",
    displayId: "PROMOA1",
    cardsCount: "5",
    ReleaseDate: "1730764800",
    canBeTraded: "0",
    image: "https://static.dotgg.gg/pokepocket/set-logo/PROMOA1.webp",
  },
  {
    id: "A1",
    name: "Genetic Apex",
    displayId: "A1",
    cardsCount: "226",
    ReleaseDate: "1730246400",
    canBeTraded: "1",
    image: "https://static.dotgg.gg/pokepocket/set-logo/A1.webp",
  },
  {
    id: "PROMO",
    name: "Promo-A",
    displayId: "PROMO",
    cardsCount: "0",
    ReleaseDate: "1730246400",
    canBeTraded: "0",
    image: "https://static.dotgg.gg/pokepocket/set-logo/PROMO.webp",
  },
  {
    id: "A1C",
    name: "Genetic Apex | Charizard",
    displayId: "A1C",
    cardsCount: "104",
    ReleaseDate: "1730246400",
    canBeTraded: "1",
    image: "https://static.dotgg.gg/pokepocket/set-logo/A1C.webp",
  },
  {
    id: "A1P",
    name: "Genetic Apex | Pikachu",
    displayId: "A1P",
    cardsCount: "104",
    ReleaseDate: "1730246400",
    canBeTraded: "1",
    image: "https://static.dotgg.gg/pokepocket/set-logo/A1P.webp",
  },
  {
    id: "A1M",
    name: "Genetic Apex | Mewtwo",
    displayId: "A1M",
    cardsCount: "104",
    ReleaseDate: "1730246400",
    canBeTraded: "1",
    image: "https://static.dotgg.gg/pokepocket/set-logo/A1M.webp",
  },
  {
    id: "PROMOA2",
    name: "Promo Pack A Series Vol 2",
    displayId: "PROMOA2",
    cardsCount: "5",
    ReleaseDate: "1730246400",
    canBeTraded: "0",
    image: "https://static.dotgg.gg/pokepocket/set-logo/PROMOA2.webp",
  },
  {
    id: "PROMOA3",
    name: "Promo Pack A Series Vol 3",
    displayId: "PROMOA3",
    cardsCount: "5",
    ReleaseDate: "1730246400",
    canBeTraded: "0",
    image: "https://static.dotgg.gg/pokepocket/set-logo/PROMOA3.webp",
  },
];
