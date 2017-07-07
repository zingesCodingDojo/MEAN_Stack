// Assignment: Deck of Cards
// Assignment: Deck of Cards
// Assignment: Deck of Cards
// Assignment: Deck of Cards

class Card{
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
    }
}

class Deck extends Card{
    constructor(suit, value){
        super(suit, value);
        this.suit = ["Heart", "Diamond", "Club", "Spade"]
        this
        this.value = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]
        this._Deck = {};
        this.getDeck();
    }
    getDeck(){
        for(let i = 0; i < this.suit.length; i++){
            this._Deck[this.suit[i]] = [];
            for(let j = 0; j < this.value.length; j++){
                this._Deck[this.suit[i]].push(new Card(this.suit[i], this.value[j]));
            }
        }
        return this
    }
    get newDeck(){
        return this._Deck;
    }
    get lengthDeck(){
        this.counter = 0;
        for(let item in this._Deck){
            for(let stuff in this._Deck[item]){
                this.counter++;
            }
        }
        return this.counter;
    }
    makeShuffle(){
        for(let k = 0; k < this.suit.length; k++){
            for(let i = 0; i < 13; i++){
                for(let eachItem in this._Deck[this.suit[k]]){
                    let randoHolder = Math.floor(Math.random() * 13);
                    let tempHeart = this._Deck[this.suit[k]][randoHolder];
                    this._Deck[this.suit[k]][randoHolder] = this._Deck[this.suit[k]][eachItem];
                    this._Deck[this.suit[k]][eachItem] = tempHeart;
                }
            }
        }
        return this._Deck;
    }
    makeReset(){
        this._Deck = {};
        this.getDeck();
    }
    dealCard(){
        this.makeShuffle();
        for(let item in this._Deck){
            // console.log(this._Deck[item][0]);
            let holdMyCard = this._Deck[item][0];
            delete this._Deck[item][0];
            break;
        }
        return holdMyCard;
    }
}

class Player{
    constructor(name, hand){
        this.name = name;
        this.hand = [];
    }
    takeCard(someDeck){
        this.hand.push(someDeck.dealCard());
    }
    get myCards(){
        return this.hand;
    }
    discardCard(){
        delete this.hand[0];
    }
}
