import Dropdown from "../components/Dropdown";
import Barniere from "../components/Baniere";

function About() {
  const fiabilite =
    "Les annonces postées sur Kasa garantissent une fiabilité totaale. Les photos sont conformes aux  logements, et toutes les informations sontrégulièrement vérifiées par nos équipes.";
  const respect =
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entrainera une exclusion de notre plateforme.";
  const service =
    "La qualité du service est au coeur de notre engagement che Kasa. Nous veillons à ce que chaque interaction, que ce soit avec hôtes ou nos locataires, soit empreinte de respect et de bienveillance.";
  const securite =
    "La sécurité est lapriorité de Kasa. Aussi bien pour nos hôtes que  pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

  return (
    <main>
      {/* <section className="hero about_hero"></section> */}
      <Barniere cover="hero about_hero" />
      <section className="about_info">
        <Dropdown title="Fiabilité" content={fiabilite} />
        <Dropdown title="Respect" content={respect} />
        <Dropdown title="Service" content={service} />
        <Dropdown title="Sécurité" content={securite} />
      </section>
    </main>
  );
}

export default About;
