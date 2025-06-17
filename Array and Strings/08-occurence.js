let words = ["apple", "banana", "apple", "orange", "banana", "apple"];
let wordCount = {};

words.forEach((word) => {
  wordCount[word] = (wordCount[word] || 0) + 1;
});

console.log(wordCount);

let wordMap = new Map();
words.forEach((word) => {
  wordMap.set(word, wordMap.get(word) || 0) + 1;
});

let str = "apple banana apple orange banana apple";
console.log(str);
let wordss = str.split(" ");

console.log(wordss);
