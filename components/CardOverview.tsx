import { Card } from "@/types";
import { FC } from "react";
import Image from "next/image";

const CardOverview: FC<Card> = ({
  id,
  name,
  image,
  rarity,
  exclusivePack,
  type,
  hp,
  stage,
  packPoints,
  retreatCost,
  attacks,
  howToGet,
  ability,
}) => {
  return (
    <section className="card-overview">
      <div className="flex flex-1 flex-col gap-5">
        <h1 className="font-bebas-neue text-4xl text-light-100">
          {name} ({id})
        </h1>
        <Image
          src={image}
          alt={name}
          width={250} // Puedes ajustar el tamaño a tu preferencia
          height={350} // También ajusta la altura según necesites
          layout="intrinsic" // Hace que la imagen mantenga sus proporciones
        />
        <div>
          <strong>Type:</strong> {type}
        </div>
        <div>
          <strong>Rarity:</strong> {rarity}
        </div>
        <div>
          <strong>HP:</strong> {hp}
        </div>
        <div>
          <strong>Stage:</strong> {stage}
        </div>
        <div>
          <strong>Pack Points:</strong> {packPoints}
        </div>
        <div>
          <strong>Retreat Cost:</strong> {retreatCost}
        </div>
        <div>
          <strong>How to Get:</strong> {howToGet}
        </div>
        {exclusivePack && (
          <div>
            <strong>Exclusive Pack:</strong> {exclusivePack}
          </div>
        )}
        {ability && (
          <div>
            <strong>Ability:</strong>
            <p>
              {ability.name}: {ability.description}
            </p>
          </div>
        )}
        <div>
          <strong>Attacks:</strong>
          <ul>
            {attacks.map((attack) => (
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
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CardOverview;
