// Challenge 3

// 99 Bottles

// Using a for loop:
// Write a simple version of "99 bottles of root beer on the wall."
// Note: make sure you're logging the result to the console​
// Once you get the program running, log "Hey! We need more root beer!" to the console when your counter hits 0.
for (let i = 99; i >= 0; i--) {
  console.log(`${i} bottles of root beer on the wall.`);
  if (i === 0) {
    console.log("Hey! We need more root beer!");
  }
}
// console.log("Hey! We need more root beer!");
