/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  const result = [];

  const backtrack = (currentCombination, currentSum, startIndex) => {
    if (currentSum === target) {
      result.push(currentCombination);
      return;
    }

    if (currentSum > target) {
      return;
    }

    for (let i = startIndex; i < candidates.length; i++) {
      const candidate = candidates[i];
      backtrack([...currentCombination, candidate], currentSum + candidate, i);
    }
  };

  backtrack([], 0, 0);

  return result;
};
