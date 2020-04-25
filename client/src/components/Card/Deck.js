import React from "react";
import deckimage from "../Card/CardImage/WelcomeToCardSampleBack.jpg";
import EmptyCard from './CardImage/WelcomeToCardEmptyBack.jpg'


function Deck(prop) {
  // To split the number into two div in rendering
  
  let deckA = prop.deck.slice(-1)[0];
  console.log('DECk Total', prop.deck);
  console.log('Ultimo elemento',prop.deck.slice(-1)[0]);

  let numberString;

  !deckA ? (numberString = "") : (numberString = deckA.value.toString());


 

  return (
    <>
      {!deckA ? (
        <div>
          <img src={EmptyCard} alt="empty-card" className="empty-card "></img>
        </div>
      ) : (
        <>
          <div className="card-container">
              <img src={deckimage} alt={deckA.value} className="card-back" />
            <div className="number-container">
              <div className="deck-number-high">
                <h3>{deckA.value}</h3>
              </div>

              <div className="deck-number-center">
                {numberString.length === 1 ? (
                  <h2 className="deck-number-c-single">{deckA.value}</h2>
                ) : (
                  <>
                    <div className="deck-number-c-double">
                      <h2>{numberString.charAt(0)}</h2>
                      <h2>{numberString.charAt(1)}</h2>
                    </div>
                  </>
                )}
              </div>
              <div className="deck-number-low">
                <h3>{deckA.value}</h3>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Deck;
