import "./Card.css";

const Card = ({ name, distance, smallDogPrice, image }) => {
  const distanceC = `Distancia : ${distance}m`;
  const smallDogPriceC = `A partir de: R$${smallDogPrice},00`;

  return (
    <div className="card">
      <div className="header">
        <img src={image} alt="/images/WetDog.bmp" />
      </div>
      <div className="description">
        <h4>{name}</h4>
        <h5>{distanceC}</h5>
        <h5>{smallDogPriceC}</h5>
      </div>
    </div>
  );
};

export default Card;
