import InfoCard from "./InfoCard";

const Cards = () => {
  return (
    <article className="Cards">
      <div className="infoCardsContainer">
        <InfoCard
          url={require("../assets/drilling.webp")}
          imageAlt="Drilling"
          header="Drilling"
          text="Description of this step in development."
        />
        <InfoCard
          url={require("../assets/construction.webp")}
          imageAlt="Construction"
          header="Construction"
          text="Description of this step in development."
        />
        <InfoCard
          url={require("../assets/drafting.webp")}
          imageAlt="Drafting"
          header="Drafting"
          text="Description of this step in development."
        />
        <InfoCard
          url={require("../assets/project-development.webp")}
          imageAlt="Project Development"
          header="Project Development"
          text="Description of this step in development."
        />
      </div>
    </article>
  );
};

export default Cards;
