let drawCard = (deck, deckLength) => {
  let count = 0;
  if (count === deckLength) {
    let drawedCards = [];
    count = 0;
    return drawedCards;
  } else {
    let drawedCards = [];
    drawedCards.push(deck.pop(0));
    count++;
    console.log("RITORNO DEL METODO DRAWCARD", drawedCards);
    return drawedCards;
  }
};

export default drawCard;
