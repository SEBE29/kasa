import Card from "./Card";
import "../styles/main.scss";
import data from "../logements";

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="overlay"></div>
        <h1>Chez vous, partout et ailleurs</h1>
      </section>
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
