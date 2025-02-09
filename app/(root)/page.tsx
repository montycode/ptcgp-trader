import CardList from "@/components/CardList";
import CardOverview from "@/components/CardOverview";
import { db } from "@/database/drizzle";
import { cards } from "@/database/schema";

const Home = async () => {
  const result = await db.select().from(cards);

  if (result.length <= 0) return <div>Loading...</div>;

  return (
    <div>
      <CardOverview {...result[0]} />
      <CardList
        title="Cartas Populares"
        cards={result}
        containerClassName="mt-28"
      />
    </div>
  );
};

export default Home;
