//  console.log(test); //console: undefined
//  if(!test){ //true
//    var test = true; //create and assign test
//    console.log(test); //console: true
//  }
//  console.log(test); //this is dangerous!

//  // VAR defines variables in the global scope

for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log(i);

// Don't use var
// Prefer let and const

// let and const are Block Scoped

