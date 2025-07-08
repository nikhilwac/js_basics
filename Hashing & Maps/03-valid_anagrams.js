function validAnagram(s, t) {
  if (s.length != t.length) return false;

  return s.split("").sort().join("") === t.split("").sort().join("");
}

console.log(validAnagram2("anagram", "nagaram")); // Output: true

function validAnagram2(s, t) {
  if (s.length !== t.length) return false;
  const coutmap = new Map();
  for (let i = 0; i < s.length; i++) {
    console.log(`s[i]: ${s[i]}, t[i]: ${t[i]}`);

    coutmap.set(s[i], (coutmap.get(s[i]) || 0) + 1);
    coutmap.set(t[i], (coutmap.get(t[i]) || 0) - 1);
    console.log(coutmap);
  }
  for (const count of coutmap.values()) {
    if (count !== 0) return false;
  }
  return true;
}
