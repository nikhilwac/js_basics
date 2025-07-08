// let a = "e" - "a";

// console.log(a);
// let data = "a".charCodeAt(0); // 97
// console.log(data);

const fruits = [
  { name: "apple", price: 100, quantity: 10 },
  { name: "banana", price: 50, quantity: 20 },
  { name: "orange", price: 80, quantity: 15 },
  { name: "grape", price: 120, quantity: 5 },
];

const fruitsWithoutName = fruits.map(({ name, ...data }) => data);
console.log(fruitsWithoutName);

let data = [...fruits];

console.log("data:", data);
