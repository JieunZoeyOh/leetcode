/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (map.has(diff)) {
      return [i, map.get(diff)];
    }

    map.set(nums[i], i);
  }
};

// const twoSum = (nums, target) => {
//   const map = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     map.set(nums[i], i);
//   }

//   for (let i = 0; i < nums.length; i++) {
//     const diff = target - nums[i];
//     const diffIndex = map.get(diff);

//     if (diffIndex !== undefined && diffIndex !== i) {
//       return [i, diffIndex];
//     }
//   }
// };
