import React from "react";
import Panorama from "../Card/CardImage/WelcomeToCardPanorama.jpg";
import Fences from "../Card/CardImage/WelcomeToCardFences.jpg";
import Work from "../Card/CardImage/WelcomeToCardWork.jpg"
import Bis from "../Card/CardImage/WelcomeToCardBis.jpg";
import Swimpool from "../Card/CardImage/WelcomeToCardSwimpoll.jpg";
import Market from "../Card/CardImage/WelcomeToCardMarket.jpg";


import "./Card.css";


function BackCard(prop) {
const cardSymbol = {
  Panorama: Panorama,
  Fences: Fences,
  Work: Work,
  Bis: Bis,
  SwimmingPool: Swimpool,
  Market: Market,
};

  const SpecificCard = cardSymbol[prop.card.suit];
  
  return (
    console.log("FROM BACKCARD", prop.card.value),
    (<img src={SpecificCard} alt="card-back" className="card-back" />)
  );
}

export default BackCard;
