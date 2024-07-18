import "./Card.css";
const Card = ({ card }) => {
  return (
    <div className="card">
      <h3>{card.tagline}</h3>
      <p>{card.description}</p>
      <div className="background">
      <input type="search" name="search" id="search" value={card.buttonText} />
      </div>
    </div>
  );
};

export default Card;
