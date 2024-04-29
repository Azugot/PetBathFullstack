import "./CardDisplay.css";
import Card from "../Card";
const CardDisplay = (props) => {
  return (
    <section className="card-display">
      <h3>{props.label}</h3>
      <div className="side-by-side">
        {props.cardsList.map((card) => (
          <Card
            key={card.id}
            name={card.name}
            distance={card.distance}
            smallDogPrice={card.smallDogPrice}
            image={card.image}
          />
        ))}
      </div>
    </section>
  );
};

export default CardDisplay;
