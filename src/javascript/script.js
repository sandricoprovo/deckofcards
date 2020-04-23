(function () {
  /**
   *  Author: Sandrico Provo
   *  Date: January 2020
   *  Program: Deck of Cards
   */

  const newCardBtn = document.querySelector('.newcard--btn');
  const newGameBtn = document.querySelector('.newgame--btn');

  let cardDeck = {};
  let currentCard = {};
  let cardsRemaining = 52;

  function startNewGame() {
    // calls the deck data
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => (res.status === 200 ? res.json() : null))
      .then(data => {
        cardDeck = data;
        drawCard();
      });
    resetGameDetails(); // function to clear screen of previous game info
  }

  function drawCard() {
    if (cardsRemaining === 0) {
      // insert restart game method?
      document.querySelector('.remaining').textContent = 'There are no more cards in the deck. Good Game!';
    } else {
      fetch(`https://deckofcardsapi.com/api/deck/${cardDeck.deck_id}/draw/?count=1`)
        .then(res => (res.status === 200 ? res.json() : null))
        .then(data => {
          cardsRemaining = data.remaining;
          if (cardsRemaining < 51 && cardsRemaining > 0) {
            displayPreviousCard(currentCard);
          }
          // assign card to object
          currentCard = data.cards[0];
          // display remaining cards in deck to screen
          document.querySelector('.remaining').textContent = `There are ${cardsRemaining} cards left in the deck.`;
          // display card image to screen
          document.querySelector('.current--img').src = `${currentCard.image}`;
          // display card info to screen
          document.querySelector('.current--info').textContent = `${currentCard.value} of ${currentCard.suit}`;

        });
    }
  }

  function displayPreviousCard({ image: cardImage, value: cardValue, suit: cardSuit }) {
    // display card image to screen
    document.querySelector('.prev--img').src = `${cardImage}`;
    // display card info to screen
    document.querySelector('.prev--info').textContent = `${cardValue} of ${cardSuit}`;
  }

  function resetGameDetails() {
    cardsRemaining = 52;
    // reset end of game message
    document.querySelector('.remaining').textContent = '';
    // reset prev card image to screen
    document.querySelector('.prev--img').src = '';
    // reset prev card info to screen
    document.querySelector('.prev--info').textContent = '';
  }

  newCardBtn.addEventListener('click', drawCard);
  newGameBtn.addEventListener('click', () => {
    /* eslint-disable */
    if (cardsRemaining > 50) {
      startNewGame();
    }
    else {
      const continueBoolean = confirm('Are you sure you want to start a new game? Your place in the deck will be lost.');
      continueBoolean === true ? startNewGame() : null;
    }
  });
})();
