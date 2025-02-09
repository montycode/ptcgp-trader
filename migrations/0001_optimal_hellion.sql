ALTER TABLE "users" RENAME COLUMN "user_id" TO "player_id";--> statement-breakpoint
ALTER TABLE "users" DROP CONSTRAINT "users_user_id_unique";--> statement-breakpoint
ALTER TABLE "cards" DROP CONSTRAINT "cards_exclusive_pack_packs_id_fk";
--> statement-breakpoint
ALTER TABLE "cards" ALTER COLUMN "hp" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "cards" ALTER COLUMN "stage" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "cards" ALTER COLUMN "retreat_cost" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "cards" ALTER COLUMN "attacks" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "wanted" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "available" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "cards" ADD COLUMN "effect" text;--> statement-breakpoint
ALTER TABLE "packs" ADD COLUMN "set_id" varchar(50) NOT NULL;--> statement-breakpoint
ALTER TABLE "packs" ADD CONSTRAINT "packs_set_id_sets_id_fk" FOREIGN KEY ("set_id") REFERENCES "public"."sets"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cards" DROP COLUMN "exclusive_pack";--> statement-breakpoint
ALTER TABLE "packs" DROP COLUMN "exclusive_cards";--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_player_id_unique" UNIQUE("player_id");