/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const complement = target - currentNum;
    const complementIndex = nums.indexOf(complement, i + 1);

    if (complementIndex !== -1) {
      return [i, complementIndex];
    }
  }
};
