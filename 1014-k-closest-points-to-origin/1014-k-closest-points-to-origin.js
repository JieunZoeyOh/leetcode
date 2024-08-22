/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = (points, k) => {
  const memory = {};

  for (const [x, y] of points) {
    const distance = x ** 2 + y ** 2;
    memory[distance] = memory[distance] ? [...memory[distance], [x, y]] : [[x, y]];
  }

  const keys = Object.keys(memory).sort((a, b) => a - b);

  const result = [];
  for (let i = 0; i < k; i++) {
    const items = memory[keys[i]];
    result.push(...items);
    i += (items.length - 1);
  }

  return result;
};
