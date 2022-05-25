// console.log("rps");

// Define a hands array with the values 'rock', 'paper', and 'scissors'
const hands = ["rock", "paper", "scissors"];
console.log(hands[0]);
// Define a function getComputerHand() that returns a hand from the array using parseInt(Math.random()*10) % 3)

// console.log(randomNumber);
function getComputerHand() {
  const randomNumber = parseInt(Math.random() * 10) % 3;
  const computerHand = hands[randomNumber];
  return computerHand;
}

console.log(getComputerHand());
// Define a function called compare() that
// Takes two choices as arguments
// Determines the winner
// Logs the hands played by each
// Returns a string indicating the result
// Play a game
