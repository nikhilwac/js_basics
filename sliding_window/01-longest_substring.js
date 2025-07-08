function longestSubstring(str) {
  const charIndexMap = new Map();
  let start = 0;
  let maxLength = 0;
  let longestSubstring = "";

  for (let end = 0; end < str.length; end++) {
    const currrentChar = str[end];

    // If the character is already in the map, move the start pointer
    if (charIndexMap.has(currrentChar)) {
      start = Math.max(start, charIndexMap.get(currrentChar) + 1);
    }
    // Update the character's index in the map
    charIndexMap.set(currrentChar, end);

    // Calculate the length of the current substring
    const currentLength = end - start + 1;
    // Update maxLength and longestSubstring if current is longer
    if (currentLength > maxLength) {
      maxLength = currentLength;
      longestSubstring = str.substring(start, end + 1);
    }
  }
  return { longestSubstring, maxLength };
}

console.log(longestSubstring("abcabtcdbb")); // Output: "abc"
console.log(longestSubstring("pwwkew")); // Output: "wke"
