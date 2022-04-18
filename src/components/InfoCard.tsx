type propTypes = {
  url: string;
  imageAlt: string;
  header: string;
  text: string;
};

const InfoCard = (props: propTypes) => {
  return (
    <div className="infoCard">
      <img src={props.url} alt={props.imageAlt} />
      <h3>{props.header}</h3>
      <p>{props.text}</p>
    </div>
  );
};

export default InfoCard;
