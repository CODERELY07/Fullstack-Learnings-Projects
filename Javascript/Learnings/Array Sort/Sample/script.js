// Array of card values (pairs for memory game)
const cardValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

let cards = [];
let flippedCards = [];
let matchedCards = [];

// Function to create and shuffle cards
function createCards() {
  // Clear previous cards
  cards = [];
  flippedCards = [];
  matchedCards = [];

  // Shuffle cardValues array
  cardValues.sort(() => 0.5 - Math.random());

  // Create card elements
  const cardGrid = document.getElementById('cardGrid');
  cardGrid.innerHTML = '';

  for (let i = 0; i < cardValues.length; i++) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.value = cardValues[i];
    card.textContent = '?'; // Initially hide card content
    card.addEventListener('click', flipCard);
    cardGrid.appendChild(card);
    cards.push(card);
  }
}

// Function to handle card click (flip card)
function flipCard() {
  if (flippedCards.length < 2 && !flippedCards.includes(this)) {
    this.textContent = this.dataset.value; // Reveal card value
    flippedCards.push(this);

    if (flippedCards.length === 2) {
      setTimeout(checkMatch, 1000); // Delay to show second card before checking
    }
  }
}

// Function to check if flipped cards match
function checkMatch() {
  const [card1, card2] = flippedCards;

  if (card1.dataset.value === card2.dataset.value) {
    matchedCards.push(card1, card2);
    card1.removeEventListener('click', flipCard);
    card2.removeEventListener('click', flipCard);
  } else {
    card1.textContent = '?'; // Hide again
    card2.textContent = '?';
  }

  flippedCards = [];

  // Check if game is over (all cards matched)
  if (matchedCards.length === cards.length) {
    alert('Congratulations! You won!');
  }
}

// Function to start a new game
function startGame() {
  createCards();
}

// Initialize game
startGame();
