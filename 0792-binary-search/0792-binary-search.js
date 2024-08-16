/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  return compare(0, nums.length - 1, nums, target);
};

const compare = (startIndex, endIndex, nums, target) => {
  const middleIndex = Math.ceil((startIndex + endIndex) / 2);

  if (startIndex > endIndex) return -1;

  if (nums[middleIndex] === target) {
    return middleIndex;
  } else if (nums[middleIndex] < target) {
    return compare(middleIndex + 1, endIndex, nums, target);
  } else {
    return compare(startIndex, middleIndex - 1, nums, target);
  }
};
