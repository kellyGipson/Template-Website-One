import InfoCard from "./InfoCard";

const Cards = () => {
  return (
    <article className="Cards">
      <h1>Business Processes</h1>
      <div className="infoCardsContainer">
        <InfoCard
          url={require("../assets/drafting.webp")}
          imageAlt="Drafting"
          heading="Drafting"
          text="Description of this step in development."
        />
        <InfoCard
          url={require("../assets/project-development.webp")}
          imageAlt="Project Development"
          heading="Project Development"
          text="Description of this step in development."
        />
        <InfoCard
          url={require("../assets/drilling.webp")}
          imageAlt="Drilling"
          heading="Machining"
          text="Description of this step in development."
        />
        <InfoCard
          url={require("../assets/construction.webp")}
          imageAlt="Construction"
          heading="Construction"
          text="Description of this step in development."
        />
      </div>
    </article>
  );
};

export default Cards;
