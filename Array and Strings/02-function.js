// function add(a, b) {
//   return a + b;
// }

// console.log(add(5, 10)); // Output: 15

// const addd = (a, b) => {
//   return a + b;
// };

function operate(a, b, fn) {
  return fn(a, b);
}

let result = operate(5, 10, (x, y) => x * y);

console.log(result); // Output: 50
