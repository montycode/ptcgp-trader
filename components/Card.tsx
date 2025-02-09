import React from "react";
import CardCover from "@/components/CardCover";
import { Card } from "@/types";
import { cn } from "@/lib/utils";

const CardComponent = ({ id, image, name }: Card) => (
  <li
    className={cn(
      "xs:w-auto w-full flex flex-col justify-center items-center",
      "p-2"
    )}
  >
    <CardCover coverImage={image} alt={name} variant="medium" />
    <div className={cn("mt-4", "xs:max-w-40 max-w-28")}>
      <p className="card-title p-1">{name}</p>
      <p className="card-id p-1 text-center">{id.replace("-", " ")}</p>
    </div>
  </li>
);

export default CardComponent;
