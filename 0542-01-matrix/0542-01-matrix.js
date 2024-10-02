/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = (mat) => {
  const d = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  const result = Array.from({ length: mat.length }, () => Array(mat[0].length).fill(0));
  const memory = [];

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 0) {
        memory.push([i, j]);
      } else {
        result[i][j] = Infinity;
      }
    }
  }

  while (memory.length > 0) {
    const [x, y] = memory.shift();
    const count = result[x][y];

    for (let i = 0; i < d.length; i++) {
      const [dx, dy] = d[i];
      const [newX, newY] = [dx + x, dy + y];

      if (0 <= newX && newX < mat.length && 0 <= newY && newY < mat[0].length) {
        if (count + 1 < result[newX][newY]) {
          result[newX][newY] = count + 1;
          memory.push([newX, newY]);
        }
      }
    }
  }

  return result;
};
