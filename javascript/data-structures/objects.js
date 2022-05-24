// console.log("objects");

// Structure objects with key value pairs.

// Objects can store ANY data type, INCLUDING other objects.

const course = {
  name: "Intro to JavaScript",
  awesome: true,
  studentCount: 16,
  students: ["Jim", "Kathy", "Larry", "Susy"],
  instructor: {
    firstName: "Jonathan",
    lastName: "Watson",
    company: "Tech Talent South",
  },
};

// Dot notation and bracket notation
// Dot notation is preferred

// console.log(course["name"]);
console.log(course.students);
console.log(course.students[0]);

console.log(course["students"][0]);

console.log(course.instructor.firstName);
console.log(course.instructor.banana);

// console.log(course.schedule.firstDay); // SCHEDULE DOES NOT EXIST!

const students = [
  {
    firstName: "Adam",
    computerType: "Mac",
  },
  {
    firstName: "Julian",
    computerType: "Windows",
  },
];

console.log(students[0].computerType);

// const name = "Jonathan";
// const students = ["Jonathan", "Larry"];

course.name = "Amazing Coding Class!";
course.fun = true;
delete course.studentCount;
console.log(course);