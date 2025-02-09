import { sampleSets, samplePacks, sampleCards } from "@/constants";
import ImageKit from "imagekit";
import { Set, Pack, Card } from "@/types";
import { cards, packs, sets } from "@/database/schema";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { config } from "dotenv";

config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle({ client: sql });

const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
});

const uploadToImageKit = async (
  url: string,
  fileName: string,
  folder: string
) => {
  try {
    const response = await imagekit.upload({
      file: url,
      fileName,
      folder,
    });

    return response.filePath;
  } catch (error) {
    console.error("Error uploading image to ImageKit:", error);
  }
};

const seed = async () => {
  console.log("Seeding data...");

  try {
    // Seed sets
    for (const set of sampleSets as Set[]) {
      const coverUrl = (await uploadToImageKit(
        set.image,
        `${set.name}.jpg`,
        "/sets/covers"
      )) as string;

      await db.insert(sets).values({
        ...set,
        image: coverUrl,
      });
    }

    // Seed packs
    for (const pack of samplePacks as Pack[]) {
      const coverUrl = (await uploadToImageKit(
        pack.image,
        `${pack.name}.jpg`,
        "/packs/covers"
      )) as string;

      await db.insert(packs).values({
        ...pack,
        image: coverUrl,
      });
    }

    // Seed cards
    for (const card of sampleCards as Card[]) {
      const image = (await uploadToImageKit(
        card.image,
        `${card.name}.jpg`,
        "/cards/covers"
      )) as string;

      await db.insert(cards).values({
        ...card,
        image,
      });
    }

    console.log("Data seeded successfully!");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};

seed();
