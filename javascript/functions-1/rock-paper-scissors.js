// console.log("rps");

// Define a hands array with the values 'rock', 'paper', and 'scissors'
const hands = ["rock", "paper", "scissors"];
// console.log(hands[0]);
// Define a function getComputerHand() that returns a hand from the array using parseInt(Math.random()*10) % 3)

// console.log(randomNumber);
function getComputerHand() {
  const randomNumber = parseInt(Math.random() * 10) % 3;
  const computerHand = hands[randomNumber];
  return computerHand;
}

// Define a function called compare() that
function compare(computerChoice, personChoice) {
  if (computerChoice === "rock" && personChoice === "paper") {
    return "You win!";
  } else if (computerChoice === "rock" && personChoice === "scissors") {
    return "You lose!";
  } else {
    return "Tie game!";
  }
}
// Takes two choices as arguments
// Determines the winner
// Logs the hands played by each
// Returns a string indicating the result
// Play a game

const computerHand = getComputerHand();
const playerHand = hands[parseInt(Math.random() * 10) % 3];
console.log(computerHand);
console.log(playerHand);

const result = compare(computerHand, playerHand);
console.log(result);
