import CardList from "@/components/CardList";
import CardOverview from "@/components/CardOverview";
import { sampleCards } from "@/constants";

const Home = () => {
  return (
    <div>
      <CardOverview {...sampleCards[3]} />
      <CardList
        title="Cartas Populares"
        cards={sampleCards}
        containerClassName="mt-28"
      />
    </div>
  );
};

export default Home;
