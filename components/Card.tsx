import React from "react";
import CardCover from "@/components/CardCover";
import { Card } from "@/types";
import { cn } from "@/lib/utils";

const CardComponent = ({ id, image, name }: Card) => (
  <li className={cn("xs:w-52 w-full")}>
    <CardCover coverImage={image} alt={name} />
    <div className={cn("mt-4", "xs:max-w-40 max-w-28")}>
      <p className="card-title p-1">{name}</p>
      <p className="card-id p-1">{id.replace("-", " ")}</p>
    </div>
  </li>
);

export default CardComponent;
