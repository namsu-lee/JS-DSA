/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const deDuplicate = [...new Set(nums)];

  return nums.length !== deDuplicate.length;
};
