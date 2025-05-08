// Exercise:
// Using the prompt() method, ask the user for their name and age
// Store the name and age in variables
// Log the name and age to the console saying "Hello, [name]", then on the next line "You're going to be [age + 4] in the next 4 years"

const userName = prompt("What is your name?");
const userAge = prompt("How old are you?");

console.log("Hello!", userName);
console.log(
  "You are going to be",
  parseInt(userAge) + 4,
  "in the next 4 years"
);

const numberOfPupils = 26;
const nameOfSchool = "Prince Charles International School,";

console.log(
  "The name of my school is",
  nameOfSchool,
  "and we are only",
  numberOfPupils,
  "pupils in my class"
);
