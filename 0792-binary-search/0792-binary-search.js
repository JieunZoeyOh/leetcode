/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  let startIndex = 0;
  let endIndex = nums.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = Math.ceil((startIndex + endIndex) / 2);

    if (nums[middleIndex] === target) {
      return middleIndex;
    } else if (nums[middleIndex] < target) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }

  return -1;
};
