import "./Forms.css";
import React, { useState } from "react";
import TextField from "../TextField";
import Button from "../Button";
import CustomDatePicker from "../CustomDatePicker";
import "react-datepicker/dist/react-datepicker.css";

const Forms = (props) => {
  const [dayOfWeek, setdayOfWeek] = useState(new Date());
  const [smallPetValue, setSmallPetValue] = useState("0");
  const [bigPetValue, setBigPetValue] = useState("0");

  const submitForm = (event) => {
    event.preventDefault();
    props.petShopSubmited({
      smallPetValue,
      bigPetValue,
      dayOfWeek: dayOfWeek.toLocaleDateString(undefined, { weekday: 'long' }),
    });
  };

  return (
    <section className="form">
      <form onSubmit={submitForm}>
        <h2>Preencha para saber quais os melhores preços para você!</h2>
        <div className="side-by-side">
          <TextField
            onlyNumbers={true}
            required={true}
            label="Grandes"
            placeholder="Ex: 5"
            min="0"
            value={bigPetValue}
            onValueChange={(value) => setBigPetValue(value)}
          />
          <TextField
            onlyNumbers={true}
            required={true}
            label="Pequenos"
            placeholder="Ex: 6"
            min="0"
            value={smallPetValue}
            onValueChange={(value) => setSmallPetValue(value)}
          />
          <CustomDatePicker
            label="Data"
            selected={dayOfWeek}
            onChange={(date) => setdayOfWeek(date)}
          />
          <Button>Pesquisar!</Button>
        </div>
      </form>
    </section>
  );
};

export default Forms;
