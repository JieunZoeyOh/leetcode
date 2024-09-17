/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  const result = [];

  const dfs = (start, remain, nums) => {
    if (remain === 0) {
      result.push([...nums]);
      return;
    } else if (remain < 0) {
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      const num = candidates[i];
      nums.push(num);
      dfs(i, remain - num, nums);
      nums.pop();
    }
  };

  dfs(0, target, []);

  return result;
};
