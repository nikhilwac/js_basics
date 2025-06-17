const nums = [1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3];

function topFreequent(nums, k = 2) {
  let freeqMap = new Map();

  for (let num of nums) {
    freeqMap.set(num, (freeqMap.get(num) || 0) + 1);
  }
  console.log(freeqMap);
  console.log([...freeqMap.entries()]);
  console.log([...freeqMap.entries()].sort());
  console.log([...freeqMap.entries()].sort((a, b) => b[1] - a[1]));

  const sorted = [...freeqMap.entries()].sort((a, b) => b[1] - a[1]);

  return sorted.slice(0, k).map((pair) => pair[0]);
}

console.log(topFreequent(nums));

const numbers = [5, 2, 9, 1, 5, 6, 10, 11, 22];
numbers.sort((a, b) => b - a);
console.log(numbers);

console.log(typeof numbers[0]);

// console.log(numbers); // Output: [1, 2, 5, 5, 6, 9]
