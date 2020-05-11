import Card from "./Card";

let panoramaNumber = [5, 7, 8, 9, 11];
let fenceNumber = [5, 6, 8, 10, 11];
let marketNumber = [5, 7, 8, 9, 11];

let panoramaFilter = [3, 13];
let fenceFilter = [4, 12];
let marketFilter = [3, 13];

let deck = [];
let deck1 = [];
let deck2 = [];
let deck3 = [];

let buildeck = function (card_names, card_suits) {
  for (var s = 0; s < card_suits.length; s++) {
    for (var n = 0; n < card_names.length; n++) {
      deck.push(new Card(n + 1, card_names[n], card_suits[s]));

      if (card_suits[s] === "Panorama" && panoramaNumber.indexOf(n + 1) > -1) {
        deck.push(new Card(n + 1, card_names[n], card_suits[s]));
      } else if (
        card_suits[s] === "Panorama" &&
        panoramaFilter.indexOf(n + 1) > -1
      ) {
        deck.pop(new Card(n + 1, card_names[n], card_suits[s]));
      } else if (
        card_suits[s] === "Market" &&
        marketNumber.indexOf(n + 1) > -1
      ) {
        deck.push(new Card(n + 1, card_names[n], card_suits[s]));
      } else if (
        card_suits[s] === "Market" &&
        marketFilter.indexOf(n + 1) > -1
      ) {
        deck.pop(new Card(n + 1, card_names[n], card_suits[s]));
      } else if (
        card_suits[s] === "Fences" &&
        fenceNumber.indexOf(n + 1) > -1
      ) {
        deck.push(new Card(n + 1, card_names[n], card_suits[s]));
      } else if (
        card_suits[s] === "Fences" &&
        fenceFilter.indexOf(n + 1) > -1
      ) {
        deck.pop(new Card(n + 1, card_names[n], card_suits[s]));
      }
    }
  }
};

// Shuffle total deck
let randomShuffle = function (deck) {
  return deck.sort(function () {
    return Math.floor(Math.random() * 3 + 1) - 2;
  });
};

// Build new deck - pass number & suit - shuffle - separate in 3 different deck
function launchDeckNew() {
  buildeck(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    ["Panorama", "Market", "Fences"]
  );

  buildeck([3, 4, 6, 7, 8, 9, 10, 12, 13], ["Work", "SwimmingPool", "Bis"]);

  randomShuffle(deck);

  deck1 = deck.splice(0, 27);

  deck2 = deck.splice(0, 27);

  deck3 = deck.splice(0, 27);

  // console.log("DECK CREATO " + deck1);
}

export { launchDeckNew, deck1, deck2, deck3 };
