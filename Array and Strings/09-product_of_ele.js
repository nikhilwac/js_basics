let nums = [1, 2, 3, 4];
// result = [1, 1, 2, 6][(24, 12, 8, 6)];

function productExceptSelf(nums) {
  const n = nums.length;
  const result = new Array(n).fill(1);

  let prefix = 1;
  for (let i = 0; i < n; i++) {
    console.log(
      `i: ${i}, result[i]: ${result[i]},  prefix: ${prefix}, nums[i]: ${nums[i]}\n`
    );

    result[i] = prefix;
    prefix *= nums[i];
  }

  console.log(result);

  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    console.log(
      `i: ${i}, result[i]: ${result[i]},  suffix: ${suffix}, nums[i]: ${nums[i]}\n`
    );

    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
}

console.log(productExceptSelf2(nums));

function productExceptSelf2(nums) {
  const n = nums.length;
  const result = new Array(n).fill(1);

  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  console.log(result);

  let suffix = 1;

  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  console.log(result);
}
