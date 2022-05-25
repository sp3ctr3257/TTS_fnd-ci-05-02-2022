console.log("Gratuity");
// Create a variable billAmount and store a random number (ie: 100)
const billAmount = 100;
// const billAmount = parseFloat(prompt("What is your bill amount?"));
// Create a function gratuity()
function gratuity(tipPercentage = 0.2) {
  const gratuityAmount = billAmount * tipPercentage;
  return gratuityAmount;
}
// gratuity should multiply the value of billAmount by 20% (hint: use 0.2) and return the value

// Create a function totalWithGrat()
function totalWithGrat(amount) {
  const tip = gratuity();
  const total = tip + amount;
  return total;
}
// totalWithGrat should take in the amount as an argument, call the gratuity function, add the returned value to the original bill amount, and return the total bill + gratuity

// Append the return value of totalWithGrat to the following phrase: "Your total including gratuity is:" and log it to the console
console.log(
  `Your total including gratuity is: $${totalWithGrat(billAmount).toFixed(2)}`
);
// Only invoke the totalWithGrat function when logging the result

// Bonus: Find a way to fix the decimal point to only 2 places (ie: 120.00)
