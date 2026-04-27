const greet = (name) => `Hello, ${name}!`;

const name = ["Karma", "Jasmine", "Mocha"];

for (let i = 0; i < name.length; i++) {
  console.log(greet(name[i]));
}   
console.log(greet)