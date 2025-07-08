function findMissingNumber(arr) {
  const n = arr.length + 1; // Since one number is missing
  console.log("n", n);

  const expectedSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
  const actualSum = arr.reduce((sum, num) => sum + num, 0); // Sum of the array elements
  return expectedSum - actualSum; // The missing number
}

// Example usage:
const arr = [1, 2, 4, 5]; // Missing number is 3
console.log(findMissingNumber(arr)); // Output: 3
