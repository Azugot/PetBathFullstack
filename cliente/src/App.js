import "./App.css";
import Banner from "./components/Banner";
import CardDisplay from "./components/CardDisplay";
import Forms from "./components/Forms";
import React, { useEffect, useState } from "react";
import ShopDisplay from "./components/ShopDisplay";
import Navbar from "./components/NavBar";

function App() {
  const [backendResults, setBackendResults] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:5000/api/petshops")
      .then((res) => res.json())
      .then((data) => setPetShopList(data));
  }, []);

  const [petShopList, setPetShopList] = useState([{}]);

  const [, setPetShopSearchValues] = useState([]);

  const bestShop = petShopList.find(
    (shop) => shop.id === backendResults.bestPetShop
  );

  const petValuesRecieved = (petShopSearchValues) => {
    setPetShopSearchValues(petShopSearchValues);
    console.log(petShopSearchValues);

    // Send a POST request to the back-end
    fetch("http://localhost:5000/api/results", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(petShopSearchValues),
    })
      .then((response) => response.json())
      .then((data) => {
        setBackendResults(data);
        console.log("Success:", backendResults);
        console.log("Success:", backendResults.bestPetShop);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="app">
      <Navbar />
      <div className="app-banner">
        <Banner />
      </div>
      <div className="app-header">
        <h1 className="Title">Seja bem-vindo ao Lave Pet!</h1>
      </div>
      <Forms
        petShopSubmited={(petShopSearchValues) =>
          petValuesRecieved(petShopSearchValues)
        }
      />
      <div className="shop-results">
        <ShopDisplay
          shopId={backendResults.bestPetShop}
          price={backendResults.bestPrice}
          display={backendResults.display}
          shop={bestShop}
        />
      </div>

      <CardDisplay label="Pet Shops Cadastradas!" cardsList={petShopList} />
    </div>
  );
}

export default App;
