/**
 * Variables in JavaScript
 *
 * Variables are used to store data that can be changed later.
 * In JavaScript, we can declare variables using var, let, or const.
 *
 * - var: function-scoped or globally-scoped variable
 * - let: block-scoped variable
 * - const: block-scoped constant (cannot be reassigned)
 *
 * Best practice: use let for variables that will change and const for constants.
 *
 * Example:
 * let name = "Alice";
 * const age = 25;
 *
 * In this example, name is a variable that can be changed later,
 * while age is a constant that cannot be reassigned.
 *
 * Note: var is generally avoided in modern JavaScript due to its function-scoping behavior,
 * which can lead to unexpected results in block-scoped code.
 */

let name = "Alice";
const age = 25;

let isStudent = true; // Boolean
let number = 42; // Number
let greeting = "Hello, World!"; // String
let score = 95.5; // Float
let hobbies = ["reading", "gaming", "coding"]; // Array

let address = {
  street: "123 Main St",
  city: "New York",
  zip: "10001",
}; // Object

let date = new Date(); // Date object
let regex = /[a-z]/; // Regular expression
let nullValue = null; // Null
let undefinedValue = undefined; // Undefined
let bigIntValue = 1234567890123456789012345678901234567890n; // BigInt
let symbolValue = Symbol("unique"); // Symbol

function printVariables() {
  console.log("Name:", name);
  console.log("Age:", age);
  console.log("Is Student:", isStudent);
  console.log("Number:", number);
  console.log("Greeting:", greeting);
  console.log("Score:", score);
  console.log("Hobbies:", hobbies);
  console.log("Address:", address);
  console.log("Date:", date);
  console.log("Regex:", regex);
  console.log("Null Value:", nullValue);
  console.log("Undefined Value:", undefinedValue);
  console.log("BigInt Value:", bigIntValue);
  console.log("Symbol Value:", symbolValue);
}
printVariables();
