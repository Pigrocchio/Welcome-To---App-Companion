class Card {
    constructor(value, name, suit) {
        this.value = value;
        this.name = name;
        this.suit = suit;
    }
    toString() {
        if (this.suit === undefined) {
            return this.name;
        }
        return this.name + " of " + this.suit;
    }
}



export default Card;
