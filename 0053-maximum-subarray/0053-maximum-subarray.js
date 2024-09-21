/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  if (nums.length === 0) return 0;

  let max = nums[0];
  let acc = nums[0];

  for (let i = 1; i < nums.length; i++) {
    acc = Math.max(acc + nums[i], nums[i]);
    max = Math.max(max, acc);
  }

  return max;
};
