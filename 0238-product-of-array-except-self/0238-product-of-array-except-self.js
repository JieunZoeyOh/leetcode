/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
  const result = new Array(nums.length).fill(1);

  let before = 1;
  for (let i = 1; i < nums.length; i++) {
    before *= nums[i - 1];
    result[i] = before;
  }

  let after = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    after *= nums[i + 1];
    result[i] *= after;
  }

  return result;
};
