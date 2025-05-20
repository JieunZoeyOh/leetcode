/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  return getMaxSum(nums, 0, nums.length - 1);
};

const getMaxSum = (nums, left, right) => {
  if (left === right) return nums[left];

  const mid = Math.floor((left + right) / 2);
  const leftMaxSum = getMaxSum(nums, left, mid);
  const rightMaxSum = getMaxSum(nums, mid + 1, right);
  const centerMaxSum = getCenterSum(nums, left, right, mid);

  return Math.max(leftMaxSum, rightMaxSum, centerMaxSum);
};

const getCenterSum = (nums, left, right, mid) => {
  let leftAcc = 0;
  let leftMaxSum = -Infinity;
  for (let i = mid; i >= left; i--) {
    leftAcc += nums[i];
    leftMaxSum = Math.max(leftMaxSum, leftAcc);
  }

  let rightAcc = 0;
  let rightMaxSum = -Infinity;
  for (let i = mid + 1; i <= right; i++) {
    rightAcc += nums[i];
    rightMaxSum = Math.max(rightMaxSum, rightAcc);
  }

  return leftMaxSum + rightMaxSum;
};
