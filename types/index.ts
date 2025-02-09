// RARITY_ENUM
export type RARITY_ENUM =
  | "◇"
  | "◇◇"
  | "◇◇◇"
  | "◇◇◇◇"
  | "☆"
  | "☆☆"
  | "☆☆☆"
  | "♛";

// STAGE_ENUM
export type STAGE_ENUM = "Basic" | "Stage 1" | "Stage 2";

// TYPE_ENUM
export type TYPE_ENUM =
  | "Grass"
  | "Fire"
  | "Water"
  | "Lightning"
  | "Fighting"
  | "Psychic"
  | "Colorless"
  | "Darkness"
  | "Metal"
  | "Dragon"
  | "Item"
  | "Supporter"
  | "Pokemon Tool";

export interface AuthCredentials {
  username: string;
  email: string;
  password: string;
  playerId: number | null;
}

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
  id: string; // varchar("id", { length: 50 })
  name: string; // text("name")
  setId: string; // varchar("set_id", { length: 50 })
  image: string; // text("image")
  rarity: RARITY_ENUM; // RARITY_ENUM("rarity")
  type: TYPE_ENUM; // TYPE_ENUM("type")
  hp: number | null; // integer("hp")
  stage?: STAGE_ENUM | null; // STAGE_ENUM("stage")
  packPoints: number; // integer("pack_points")
  retreatCost?: number | null; // integer("retreat_cost")
  attacks: unknown; // jsonb("attacks")
  ability: unknown; // jsonb("ability")
  effect?: string | null; // text("effect")
  howToGet: string; // text("how_to_get")
};

// Tipo para los packs
export type Pack = {
  id: string; // ID del pack exclusivo, como "A1-Mewtwo"
  name: string; // Nombre del pack
  image: string; // Imagen del pack
  setId: string; // ID del set al que pertenece el pack
};

// Tipo para los sets
export type Set = {
  id: string; // ID del set, como "A1"
  name: string; // Nombre del set, por ejemplo "Genetic Apex"
  image: string; // Imagen del set
  packIds: string[]; // Lista de IDs de packs en el set
};

// Tipo para los jugadores (colección de jugadores)
export type Player = {
  email: string; // Correo electrónico del jugador
  username: string; // Nombre de usuario del jugador
  password: string; // Contraseña del jugador
  playerId: string; // ID único del jugador
  wanted: string[]; // Lista de IDs de cartas que está buscando
  available: string[]; // Lista de IDs de cartas que está ofreciendo
};
