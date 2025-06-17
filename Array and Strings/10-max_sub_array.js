const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let maxi_sum = Number.NEGATIVE_INFINITY;
let sum = 0;

let start = 0;
let end = 0;
let tempStart = 0;

for (let i = 0; i < nums.length; i++) {
  sum += nums[i];

  //   maxi_sum = Math.max(maxi_sum, sum);
  //   if (sum < 0) sum = 0;

  if (sum > maxi_sum) {
    maxi_sum = sum;
    start = tempStart;
    end = i;
  }

  if (sum < 0) {
    sum = 0;
    tempStart = i + 1;
  }
}

const maxSubarray = nums.slice(start, end + 1);
console.log(maxSubarray);

console.log("Max Subarray Sum:", maxi_sum); // Output: 6

for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
  if (sum > maxi_sum) {
    maxi_sum = sum;
    start = tempStart;
    end = i;
  }

  if (sum < 0) {
    sum = 0;
    tempStart = i + 1;
  }
}
