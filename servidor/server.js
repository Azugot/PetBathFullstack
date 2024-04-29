const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log("Server is listening on port 5000");
});

const petShops = [
  {
    id: 0,
    name: "Meu Canino Feliz",
    distance: 2000,
    smallDogPrice: 20,
    bigDogPrice: 40,
    multiplierType: "%",
    priceMultiplier: 1.2,
    image: "/images/PetShopsImages/Canino.webp",
  },
  {
    id: 1,
    name: "Vai Rex",
    distance: 1700,
    smallDogPrice: 15,
    bigDogPrice: 50,
    multiplierType: "+",
    priceMultiplier: 5,
    image: "/images/PetShopsImages/Rex.webp",
  },
  {
    id: 2,
    name: "ChowChawgas",
    distance: 800,
    smallDogPrice: 30,
    bigDogPrice: 45,
    multiplierType: "%",
    priceMultiplier: 1,
    image: "/images/PetShopsImages/ChowC.webp",
  },
];

app.get("/api/petshops", (req, res) => {
  console.log("Petshops requested");
  res.send(petShops);
});

app.post("/api/results", (req, res) => {
  console.log("Results requested");
  const recievedDay = req.body.dayOfWeek;
  const smallDogs = req.body.smallPetValue;
  const largeDogs = req.body.bigPetValue;
  const isWeekend = recievedDay === "Saturday" || recievedDay === "Sunday";

  let bestPrice = Infinity;
  let bestPetShop = null;
  let display = false;

  if (!(smallDogs == 0) || !(largeDogs == 0)) {
    display = true;
    petShops.forEach((shop) => {
      let totalPrice;

      if (isWeekend) {
        if (shop.multiplierType === "%") {
          totalPrice =
            smallDogs * shop.smallDogPrice * shop.priceMultiplier +
            largeDogs * shop.bigDogPrice * shop.priceMultiplier;
        } else if (shop.multiplierType === "+") {
          totalPrice =
            smallDogs * shop.smallDogPrice +
            shop.priceMultiplier +
            largeDogs * shop.bigDogPrice +
            shop.priceMultiplier;
        }
      } else {
        totalPrice =
          smallDogs * shop.smallDogPrice + largeDogs * shop.bigDogPrice;
      }
      //console.log(shop.name, totalPrice);

      if (totalPrice < bestPrice) {
        bestPrice = totalPrice;
        bestPetShop = shop.id;
        //console.log("Melhor => ", shop.name, totalPrice);
      } else if (bestPrice === totalPrice) {
        console.log(
          "Igual => ",
          shop.name,
          petShops[bestPetShop].name,
          totalPrice
        );
        if (shop.distance < petShops[bestPetShop].distance) {
          bestPrice = totalPrice;
          bestPetShop = shop.id;
          console.log("Melhor => ", shop.name, totalPrice);
        }
      }
    });
  } else {
    bestPetShop = -1;
    bestPrice = 0;
    display = false;
  }

  //console.log(req.body);
  res.send({
    bestPetShop: bestPetShop,
    bestPrice: bestPrice,
    display: display,
  });
});
