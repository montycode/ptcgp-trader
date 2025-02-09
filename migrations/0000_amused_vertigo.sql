CREATE TYPE "public"."rarity" AS ENUM('◇', '◇◇', '◇◇◇', '◇◇◇◇', '☆', '☆☆', '☆☆☆', '♛');--> statement-breakpoint
CREATE TYPE "public"."stage" AS ENUM('Basic', 'Stage 1', 'Stage 2');--> statement-breakpoint
CREATE TYPE "public"."type" AS ENUM('Grass', 'Fire', 'Water', 'Lightning', 'Fighting', 'Psychic', 'Colorless', 'Darkness', 'Metal', 'Dragon', 'Item', 'Supporter', 'Pokemon Tool');--> statement-breakpoint
CREATE TABLE "cards" (
	"id" varchar(50) PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"set_id" varchar(50) NOT NULL,
	"image" text NOT NULL,
	"rarity" "rarity" NOT NULL,
	"exclusive_pack" varchar(50),
	"type" "type" NOT NULL,
	"hp" integer NOT NULL,
	"stage" "stage" NOT NULL,
	"pack_points" integer NOT NULL,
	"retreat_cost" integer NOT NULL,
	"attacks" jsonb NOT NULL,
	"ability" jsonb,
	"how_to_get" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "pack_exclusive_cards" (
	"pack_id" varchar(50) NOT NULL,
	"card_id" varchar(50) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "packs" (
	"id" varchar(50) PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"image" text NOT NULL,
	"exclusive_cards" jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE "sets" (
	"id" varchar(50) PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"image" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"username" text NOT NULL,
	"email" text NOT NULL,
	"user_id" integer NOT NULL,
	"password" text NOT NULL,
	"wanted" jsonb NOT NULL,
	"available" jsonb NOT NULL,
	"last_activity_date" date DEFAULT now(),
	"created_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "users_username_unique" UNIQUE("username"),
	CONSTRAINT "users_email_unique" UNIQUE("email"),
	CONSTRAINT "users_user_id_unique" UNIQUE("user_id")
);
--> statement-breakpoint
ALTER TABLE "cards" ADD CONSTRAINT "cards_set_id_sets_id_fk" FOREIGN KEY ("set_id") REFERENCES "public"."sets"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cards" ADD CONSTRAINT "cards_exclusive_pack_packs_id_fk" FOREIGN KEY ("exclusive_pack") REFERENCES "public"."packs"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pack_exclusive_cards" ADD CONSTRAINT "pack_exclusive_cards_pack_id_packs_id_fk" FOREIGN KEY ("pack_id") REFERENCES "public"."packs"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pack_exclusive_cards" ADD CONSTRAINT "pack_exclusive_cards_card_id_cards_id_fk" FOREIGN KEY ("card_id") REFERENCES "public"."cards"("id") ON DELETE cascade ON UPDATE no action;