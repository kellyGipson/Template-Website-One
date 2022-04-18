type propTypes = {
  url: string;
  imageAlt: string;
  heading: string;
  text: string;
};

const InfoCard = (props: propTypes) => {
  return (
    <div className="infoCard">
      <img src={props.url} alt={props.imageAlt} />
      <h3>{props.heading}</h3>
      <p>{props.text}</p>
    </div>
  );
};

export default InfoCard;
