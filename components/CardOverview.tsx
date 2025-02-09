"use client";
import { Card, Ability, Attack } from "@/types";
import { FC, useEffect, useState } from "react";
import CardCover from "./CardCover";

const CardOverview: FC<Card> = ({
  id,
  name,
  image,
  rarity,
  type,
  hp,
  stage,
  packPoints,
  retreatCost,
  attacks = [],
  howToGet,
  ability,
}) => {
  const [typedAttacks, setTypedAttacks] = useState<Attack[]>([]);

  // Asegurarse de que typedAttacks es un array
  useEffect(() => {
    if (Array.isArray(attacks)) {
      setTypedAttacks(attacks); // Si es un array, actualizamos el estado
    } else {
      setTypedAttacks([]); // Si no es un array, dejamos el array vacío
    }
  }, [attacks]); // Dependencia en `attacks`, se ejecuta cuando cambia

  const typedAbility = ability as Ability | undefined;

  return (
    <section className="card-overview">
      <div className="flex flex-1 flex-col gap-5">
        <h3 className="font-bebas-neue text-3xl text-light-100">
          Carta del Día
        </h3>
        <h1 className="font-bebas-neue text-3xl text-light-100">
          {name} ({id.replace("-", " ")})
        </h1>
        <div className="card-info">
          <p>
            Type <span className="font-semibold text-light-200">{type}</span>
          </p>
          <p>
            Rarity{" "}
            <span className="font-semibold text-light-200">{rarity}</span>
          </p>
          <div>
            <strong>Retreat Cost:</strong> {retreatCost}
          </div>
        </div>
        <div className="card-copies">
          <p>
            HP <span>{hp}</span>
          </p>
          <p>
            Stage <span>{stage}</span>
          </p>
          <p>
            Pack Points: <span>{packPoints}</span>
          </p>

          {typedAbility && (
            <p>
              Ability: <span>{typedAbility.name}:</span>{" "}
              {typedAbility.description}
            </p>
          )}
          <p>
            How to Get: <span>{howToGet}</span>
          </p>
        </div>
        <div className="card-attacks font-bebas-neue text-3xl text-light-100">
          <strong>Attacks:</strong>
          <ul>
            {typedAttacks.length > 0 ? (
              typedAttacks.map((attack) => (
                <li key={attack.name}>
                  <strong>{attack.name}</strong> - {attack.damage} damage
                  <div>
                    <strong>Energy Cost:</strong>
                    {Object.entries(attack.energyCost).map(
                      ([energyType, cost]) => (
                        <span key={energyType}>
                          {energyType}: {cost}{" "}
                        </span>
                      )
                    )}
                  </div>
                  {attack.effect && (
                    <div>
                      <strong>Effect:</strong> {attack.effect}
                    </div>
                  )}
                </li>
              ))
            ) : (
              <p>No attacks available</p>
            )}
          </ul>
        </div>
      </div>
      <div className="relative flex flex-1 justify-center">
        <div className="relative">
          <CardCover
            variant="wide"
            className="z-10"
            coverImage={image}
            alt={name}
          />

          <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
            <CardCover
              variant="wide"
              className="z-10"
              coverImage={image}
              alt={name}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardOverview;
