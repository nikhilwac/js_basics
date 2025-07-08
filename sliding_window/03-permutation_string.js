function permutationString(s, p) {
  const sLen = s.length;
  const pLen = p.length;
  if (sLen < pLen) {
    permutationString(p, s); // Swap to ensure s is always longer or equal to p
  }

  const result = [];
  const pCount = Array(26).fill(0);
  const sCount = Array(26).fill(0);

  for (let i = 0; i < pLen; i++) {
    pCount[p.charCodeAt(i) - "a".charCodeAt(0)]++;
    sCount[s.charCodeAt(i) - "a".charCodeAt(0)]++;
  }
  console.log(pCount, sCount);
  if (arraysEqual(pCount, sCount)) {
    result.push(0);
  }

  for (let i = pLen; i < sLen; i++) {
    sCount[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    sCount[s.charCodeAt(i - pLen) - "a".charCodeAt(0)]--;

    if (arraysEqual(pCount, sCount)) {
      result.push(i - pLen + 1);
    }
  }

  return result;
}

function arraysEqual(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

console.log(permutationString("cbaebabacd", "abc")); // [0, 6]