/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums, items=[], result=[]) => {
  if (nums.length === 0) result.push([...items]);

  for (let i = 0; i < nums.length; i++) {
    const newNums = nums.filter((n, index) => i !== index);
    items.push(nums[i]);
    permute(newNums, items, result);
    items.pop();
  }

  return result;
};
