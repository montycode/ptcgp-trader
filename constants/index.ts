import { Card, Set } from "@/types";

export const sampleCards: Card[] = [
  {
    id: "A1-001",
    name: "Bulbasaur",
    setId: "A1",
    image:
      "https://img.game8.co/3998332/91c4f79b2b3b4206205bf69db8dd3d1e.png/show",
    rarity: "◇",
    exclusivePack: "A1-Mewtwo",
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
    id: "A1-036",
    name: "Charizard ex",
    setId: "A1",
    image:
      "https://img.game8.co/3995526/ac9d9361799eb484958ffd4873a7c091.png/show",
    rarity: "◇◇◇◇",
    exclusivePack: "A1-Charizard",
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
    exclusivePack: "A1-Pikachu",
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
    exclusivePack: "A1-Mewtwo",
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

export const sampleSets: Set[] = [
  {
    id: "A1",
    name: "Genetic Apex",
    image:
      "https://img.game8.co/4031089/8f0ceab874dd7a3488a211ee69a9b759.png/show",
    packs: [
      {
        id: "A1-Mewtwo",
        name: "Genetic Apex (A1) Mewtwo",
        image:
          "https://img.game8.co/3999180/083249170af7215407df57bf9840bc3e.png/show",
        exclusiveCards: ["A1-001", "A1-010"],
      },
      {
        id: "A1-Charizard",
        name: "Genetic Apex (A1) Charizard",
        image:
          "https://img.game8.co/3999185/6405ea32582539f6e270b2b15529d130.png/show",
        exclusiveCards: ["A1-001"],
      },
      {
        id: "A1-Pikachu",
        name: "Genetic Apex (A1) Pikachu)",
        image:
          "https://img.game8.co/3999192/eb4a00290df0eccf54b42ff80d4983f8.png/show",
        exclusiveCards: ["A1 007"],
      },
    ],
  },
];
