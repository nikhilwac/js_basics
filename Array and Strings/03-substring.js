function countUniqueSubstrings(str) {
  const substrings = new Set();

  for (let i = 0; i < str.length; i++) {
    let temp = "";
    for (let j = i; j < str.length; j++) {
      temp += str[j];
      substrings.add(temp);
    }
  }

  return substrings.size;
}

console.log(countUniqueSubstrings("abc")); // 6
console.log(countUniqueSubstrings("aaa")); // 3
console.log(countUniqueSubstrings("abca")); // 9

