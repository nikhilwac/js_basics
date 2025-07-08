const { max } = require("date-fns");

function longestSubstringWithoutRepeating(s) {
  let map = new Map();
  let left = 0,
    maxLen = 0,
    start = 0;

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    if (map.has(currentChar)) {
      left = Math.max(map.get(currentChar) + 1, left);
    }
    console.log(map);

    map.set(currentChar, right);
    if (right - left + 1 > maxLen) {
      console.log(`left: ${left}, right: ${right}, maxLen: ${maxLen}`);
      maxLen = right - left + 1;
      start = left;
    }
  }
  return s.substring(start, start + maxLen);
}

// for (let right = 0; right < s.length; right++) {
//   const currentChar = s[right];
//   if (map.has(currentChar)) {
//     left = Math.max(map.get(currentChar) + 1, left);
//   }

//   map.set(currentChar, right);

//   if (right - left + 1 > maxLen) {
//     maxLen = right - left + 1;
//     start = left;
//   }
// }

console.log(longestSubstringWithoutRepeating("abcabcbb")); // Output: "abc"
