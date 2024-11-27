import Card from "../components/Card";
import "../styles/main.scss";
import data from "../logements";
import Barniere from "../components/Baniere";

function Home() {
  return (
    <main>
      <Barniere />
      <section className="cards">
        {data.map((location) => (
          <Card
            key={location.id}
            id={location.id}
            title={location.title}
            cover={location.cover}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
