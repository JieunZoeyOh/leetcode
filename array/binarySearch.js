/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  let first = 0;
  let last = nums.length - 1;

  while (first <= last) {
    let middle = Math.floor((first + last) / 2);
    if (nums[middle] === target) {
        return middle;
    }

    if (nums[middle] < target) {
      first = middle + 1;
    } else {
      last = middle - 1;
    }
  }

  return -1;
}
