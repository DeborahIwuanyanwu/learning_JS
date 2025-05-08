// Execise:?

// Redo the last exercise using the + operator and template literals

// Using the prompt() method, ask the user for their name and age
// Store the name and age in variables
// Log the name and age to the console saying "Hello, [name]", then on the next line "You're going to be [age + 4] in the next 4 years"

const yourName = prompt("Enter your name?");
const yourAge = prompt("How old are you?");

console.log;
console.log(`Hello ${yourName}! Thanks for joining our website`);
console.log(
  `Dear ${yourName}, you are going to be ${
    parseInt(yourAge) + 4
  } in the next 4 years`
);

console.log("Hello " + yourName +"!" + " Thanks for joining or team");
console.log(
  "You are going to be " + (parseInt(yourAge) + 4) + " in the next 4 years!"
);
