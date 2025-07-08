const nums = [1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3];

function topFreequent(nums, k = 2) {
  let freeqMap = new Map();

  for (let num of nums) {
    freeqMap.set(num, (freeqMap.get(num) || 0) + 1);
  }

  const sorted = [...freeqMap.entries()].sort((a, b) => b[1] - a[1]);

  return sorted.slice(0, k).map((pair) => pair[0]);
}

console.log(freequentElements(nums, 2)); // Output: [3, 1]

function freequentElements(nums, k) {
  const freeqMap = new Map();

  for (const num of nums) {
    freeqMap.set(num, (freeqMap.get(num) || 0) + 1);
  }

  console.log(freeqMap);

  const sorted = [...freeqMap.entries()].sort((a, b) => b[1] - a[1]);
  console.log(sorted);
  return sorted.slice(0, k).map((pair) => pair[0]);
}
