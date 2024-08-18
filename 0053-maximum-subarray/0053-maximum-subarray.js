/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  if (nums.length === 0) return 0;

  let maxSum = nums[0];
  let tempSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    tempSum = Math.max(tempSum + nums[i], nums[i]);
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
};
