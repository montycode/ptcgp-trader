import {
  varchar,
  uuid,
  integer,
  text,
  pgTable,
  jsonb,
  pgEnum,
  timestamp,
  date,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").notNull().primaryKey().defaultRandom(),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  playerId: integer("player_id").notNull().unique(),
  password: text("password").notNull(),
  wanted: jsonb("wanted"), // Lista de IDs de cartas que está buscando
  available: jsonb("available"), // Lista de IDs de cartas que está ofreciendo
  lastActivityDate: date("last_activity_date").defaultNow(),
  createdAt: timestamp("created_at", {
    withTimezone: true,
  }).defaultNow(),
});

// Enums
export const RARITY_ENUM = pgEnum("rarity", [
  "◇",
  "◇◇",
  "◇◇◇",
  "◇◇◇◇",
  "☆",
  "☆☆",
  "☆☆☆",
  "♛",
]);
export const STAGE_ENUM = pgEnum("stage", ["Basic", "Stage 1", "Stage 2"]);
export const TYPE_ENUM = pgEnum("type", [
  "Grass",
  "Fire",
  "Water",
  "Lightning",
  "Fighting",
  "Psychic",
  "Colorless",
  "Darkness",
  "Metal",
  "Dragon",
  "Item",
  "Supporter",
  "Pokemon Tool",
]);

// Cards Table
export const cards = pgTable("cards", {
  id: varchar("id", { length: 50 }).notNull().primaryKey(),
  name: text("name").notNull(),
  setId: varchar("set_id", { length: 50 })
    .notNull()
    .references(() => sets.id, { onDelete: "cascade" }),
  image: text("image").notNull(),
  rarity: RARITY_ENUM("rarity").notNull(),
  type: TYPE_ENUM("type").notNull(),
  hp: integer("hp"),
  stage: STAGE_ENUM("stage"),
  packPoints: integer("pack_points").notNull(),
  retreatCost: integer("retreat_cost"),
  attacks: jsonb("attacks"),
  ability: jsonb("ability"),
  effect: text("effect"),
  howToGet: text("how_to_get").notNull(),
});

// Packs Table
export const packs = pgTable("packs", {
  id: varchar("id", { length: 50 }).notNull().primaryKey(),
  name: text("name").notNull(),
  image: text("image").notNull(),
  setId: varchar("set_id", { length: 50 })
    .notNull()
    .references(() => sets.id),
});

// Sets Table
export const sets = pgTable("sets", {
  id: varchar("id", { length: 50 }).notNull().primaryKey(),
  name: text("name").notNull(),
  image: text("image").notNull(),
});

// Relationship table for exclusive cards in packs
export const packExclusiveCards = pgTable("pack_exclusive_cards", {
  packId: varchar("pack_id", { length: 50 })
    .notNull()
    .references(() => packs.id, { onDelete: "cascade" }),
  cardId: varchar("card_id", { length: 50 })
    .notNull()
    .references(() => cards.id, { onDelete: "cascade" }),
});
