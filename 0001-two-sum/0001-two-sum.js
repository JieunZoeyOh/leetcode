const twoSum = (nums, target) => {
  const maps = new Map();

  for (let i = 0; i < nums.length; i++) {
    maps.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];
    const index = maps.get(difference);
    if (index && i !== index) {
      return [i, index];
    }
  }
};
