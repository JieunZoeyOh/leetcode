/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  if (nums.length < 3) return [];

  const result = [];
  const arr = nums.toSorted((a, b) => a - b);

  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] === arr[i - 1]) continue; // 그 전과 같다면 중복되므로
    if (arr[i] > 0) break; // 모든 수가 양수

    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];

      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else { // 0일 경우
        result.push([arr[i], arr[left], arr[right]]);

        while (arr[left] === arr[left + 1]) {
          left++;
        }

        left++;
        right--;
      }
    }
  }

  return result;
};
