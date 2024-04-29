import "./ShopDisplay.css";
import React, { useState, useEffect } from "react";

const ShopDisplay = (props) => {
  const [display, setDisplay] = useState(false);

  const [totalPrice, setTotalPrice] = useState(`Preço total = R$0,00`);

  useEffect(() => {
    if (props.price) {
      setTotalPrice(`Preço total R$${props.price},00`);
    }
  }, [props.price]);

  useEffect(() => {
    if (props.display) {
      setDisplay(props.display);
    }
  }, [props.display]);



  return (
    display === true && (
      <section className="shop-display">
        <h2>Melhor PetShop para suas necessidades:</h2>
        <div className="info">
          <img
            className="shop-image"
            src={props.shop.image ||"/images/WetDog.bmp"}
            alt="Pet Shop"
          />

          
        </div>
        <h3>{props.shop.name||"Nome Indisponível"}</h3>
          <h3>{totalPrice}</h3>
      </section>
    )
  );
};

export default ShopDisplay;
