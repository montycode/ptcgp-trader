import { Card, STAGE_ENUM } from "@/types";

// Función principal para convertir la carta
export const parseCardData = (data: unknown[]): Card => {
  const [
    id,
    ,
    ,
    name,
    setId,
    ,
    rarity,
    type,
    ,
    ,
    hp,
    stage,
    packPoints,
    retreatCost,
    ,
    ,
    ,
    ,
    ,
    ,
  ] = data;

  return {
    id,
    name,
    setId,
    image: `https://static.dotgg.gg/pokepocket/card/${(id as string).toUpperCase()}.webp`,
    rarity,
    type,
    hp: parseInt(hp as string) || null,
    stage: stage as STAGE_ENUM,
    packPoints: parseInt(packPoints as string),
    retreatCost: retreatCost ? parseInt(retreatCost as string) : null,
  } as Card;
};
