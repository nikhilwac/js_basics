function groupAnagrams(strs) {
  const anagramMap = new Map();

  for (const word of strs) {
    const key = word.split("").sort().join("");
    if (!anagramMap.has(key)) {
      anagramMap.set(key, []);
    }
    anagramMap.get(key).push(word);
  }
  console.log(anagramMap.values());
}

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams2(input);

function groupAnagrams2(strs) {
  const anagramMap = new Map();
  for (const word of strs) {
    const key = word.split("").sort().join("");
    console.log(key);

    if (!anagramMap.has(key)) {
      anagramMap.set(key, []);
    }
    console.log(anagramMap);

    anagramMap.get(key).push(word);
  }
  console.log(anagramMap);

  console.log(anagramMap.values());
}
