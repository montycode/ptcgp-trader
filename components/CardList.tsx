import { FC } from "react";
import { Card } from "@/types";
import CardComponent from "./Card";
import CaptureListScreenshot from "@/components/CaptureListScreenshot";

interface CardListProps {
  title: string;
  cards: Card[] | [];
  containerClassName?: string;
}

const CardList: FC<CardListProps> = ({ title, cards, containerClassName }) => {
  return (
    <section
      className={`font-bebas-neue text-4xl text-light-100 ${containerClassName}`}
    >
      <div className="flex justify-between items-center">
        <h2 className="font-bebas-neue text-4xl text-light-100">{title}</h2>
        <CaptureListScreenshot
          listId="trade-list"
          buttonLabel="Guardar Lista"
        />
      </div>
      <ul className="card-list p-2" id="trade-list">
        {cards.map((card) => (
          <CardComponent key={card.id} {...card} />
        ))}
      </ul>
    </section>
  );
};

export default CardList;
