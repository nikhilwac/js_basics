const nums = [1, 2, 3, 4, 5, 6, 3, 4];

// function containDuplicate(nums) {
//   let seen = [];

//   for (let num of nums) {
//     if (seen.includes(num)) {
//       return true;
//     }
//     seen.push(num);
//   }

//   return false;
// }

// console.log(containDuplicate(nums));

let index = nums.lastIndexOf(3);
console.log(index);

let unique = [...new Set(nums)];
console.log(unique);

let uniq = nums.filter((num) => nums.indexOf(num) === nums.lastIndexOf(num));
console.log(uniq);

function containDuplicate(nums) {
  let seen = new Set();
  for (let num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}
console.log(containDuplicate(nums)); // Output: true
