/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sumMax = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let sum = 0;

      if (i === j) sum = nums[i];
      else {
        for (let k = i; k <= j; k++) {
          sum += nums[k];
        }
      }
      if (sum > sumMax) sumMax = sum;
    }
  }
  return sumMax;
};
