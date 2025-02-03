// Tipo para los costos de energía
export type EnergyCost = {
  fire?: number;
  colorless?: number;
  grass?: number;
  psychic?: number;
  lightning?: number;
  water?: number;
  fighting?: number;
  dark?: number;
};

// Tipo para los ataques
export type Attack = {
  name: string;
  energyCost: EnergyCost;
  damage: number;
  effect?: string; // Efecto opcional (por ejemplo, "Descarta 2 energías")
};

// Tipo para las habilidades
export type Ability = {
  name: string;
  description: string;
};

// Tipo para las cartas
export type Card = {
  id: string; // ID de la carta, como "A1-001"
  name: string; // Nombre de la carta
  setId: string; // ID del set al que pertenece
  image: string; // URL de la imagen de la carta
  rarity: string; // Rareza de la carta, por ejemplo "◇"
  exclusivePack: string; // Pack exclusivo al que pertenece
  type: string; // Tipo de carta, por ejemplo "Fire", "Water", "Grass"
  hp: number; // Puntos de salud
  stage: string; // Etapa de la carta, como "Basic", "Stage 2", "EX"
  ability?: Ability; // Habilidad de la carta (opcional)
  packPoints: number; // Puntos del pack
  retreatCost: number; // Costo de retirada
  attacks: Attack[]; // Lista de ataques de la carta
  howToGet: string; // Cómo obtener la carta (por ejemplo, "Abre sobres A1-Charizard")
};

// Tipo para los sets
export type Pack = {
  id: string; // ID del pack exclusivo, como "A1-Mewtwo"
  name: string; // Nombre del pack
  image: string; // Imagen del pack
  exclusiveCards: string[]; // IDs de cartas exclusivas en este pack
};

export type Set = {
  id: string; // ID del set, como "A1"
  name: string; // Nombre del set, por ejemplo "Genetic Apex"
  image: string; // Imagen del set
  packs: Pack[]; // Lista de sobres en el set
};

// Tipo para los jugadores (colección de jugadores)
export type Player = {
  playerId: string; // ID único del jugador
  wanted: string[]; // Lista de IDs de cartas que está buscando
  available: string[]; // Lista de IDs de cartas que está ofreciendo
};
