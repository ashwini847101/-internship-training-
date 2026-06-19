let name = "Ashwini";
const age = 21;

let isStudent = true;
let city = null;
let course;

let skills = ["HTML", "CSS", "JavaScript"];

let student = {
    name: "Ashwini",
    age: 21,
    college: "B.Tech"
};

// typeof
console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof city);
console.log(typeof course);

// Arithmetic
console.log(age + 5);
console.log(age - 1);

// Comparison
console.log(age > 18);
console.log(age == 21);

// Template Literal
let message = `My name is ${name} and I am ${age} years old.`;
console.log(message);

// Array & Object
console.log(skills);
console.log(student);