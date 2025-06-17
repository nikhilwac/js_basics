function lengthOfLongestSubstring(str) {
  let left = 0;
  let right = 0;
  let maxLength = 0;
  const charIndexMap = new Map();

  if (str.length === 0) return 0;

  while (right < str.length) {
    const currentChar = str[right];

    if (charIndexMap.has(currentChar)) {
      left = Math.max(charIndexMap.get(currentChar) + 1, left);
    }

    charIndexMap.set(currentChar, right);
    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }

  return maxLength;
}
