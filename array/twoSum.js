/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const theOtherNumber = target - nums[i];
    const theOtherIndex = nums.indexOf(theOtherNumber, i + 1);
    if (theOtherIndex != -1) {
      return [i, theOtherIndex];
    }
  }
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum2 (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const candidate = map.get(target-nums[i]);
    if (candidate !== undefined) {
      return [candidate, i];
    }

    map.set(nums[i], i);
  }
}
