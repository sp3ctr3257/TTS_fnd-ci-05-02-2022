// console.log("arrays!");

const teachers = ["Shane", "Zach"];
// Shane is the first, index of 0
// Zach is the second, index of 1

// Index for each item.

console.log(teachers);

console.log(teachers[1]);

teachers.push("Beatrice"); // .push() adds the element to the END
console.log(teachers.length); // What will the length be? 3
console.log(teachers);

teachers.push("Sophie");
console.log(teachers);
teachers.pop(); // removes the last element in the array
console.log(teachers);

const beatriceIndex = teachers.indexOf("Jerry");
console.log(beatriceIndex);

for (let i = 0; i < teachers.length; i++) {
  console.log(teachers[i]);
  // teachers[0]
  // teachers[1]
  // teachers[2]
}

// const teachersCopy = [...teachers];
teachers.sort();

console.log(teachers);

teachers[0] = "Beezie";

console.log(teachers);
console.log(teachersCopy);

// const badArray = [0, "Shane", false, "banana", true, 42];
// // DON'T DO THIS!

// const numbersArray = [21, 28, 31, 18, 20, 19, 27, 23];

// // .length

// console.log(numbersArray.length);
