// function groupAnagrams(strs) {
//   const anagramMap = new Map();

//   for (const word of strs) {
//     const key = word.split("").sort().join("");
//     if (!anagramMap.has(key)) {
//       anagramMap.set(key, []);
//     }
//     anagramMap.get(key).push(word);
//   }
//   console.log(anagramMap.values());
// }

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(input);

function groupAnagrams(strs) {
  const anagramMap = new Map();
  for (const word of strs) {
    const key = word.split("").sort().join("");
    if (!anagramMap.has(key)) {
      anagramMap.set(key, []);
    }
    anagramMap.get(key).push(word);
  }
  return Array.from(anagramMap.values());
}

console.log(groupAnagrams(input));

function groupAnagrams2(strs) {
  const anagramsMap = new Map();
  for (const word of strs) {
    const key = word.split("").sort().join("");
    if (!anagramsMap.has(key)) {
      anagramsMap.set(key, []);
    }
    anagramsMap.get(key).push(word);
  }
  return Array.from(anagramsMap.values());
}
