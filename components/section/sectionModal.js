
class SectionModal {
  constructor(scData, callbacks) {
    this.data = scData;
    this.callbacks = callbacks;
    this.handleClick = this.handleClick.bind(this);
    this.dom={};
  }
  handleClick(e){
    if(e) e.preventDefault();
    this.callbacks.click(this);
    
  }
  render() {
    var playingCard = this.dom.playingCard = $("<div>", {
      class: `playing-card col-md-2`,
      click: this.handleClick
    })
    var cardInner = this.dom.cardInner =  $("<div>", {
      class: `card-inner`
    })
    var cardFront = this.dom.cardFront =  $("<div>", {
      class: `card-front ${this.data.card}`
    })
    var cardBack = this.dom.cardBack = $("<div>", {
      class: `card-back`
    })
    cardInner.append(cardFront, cardBack);
    playingCard.append(cardInner);
    return playingCard;
  }
}