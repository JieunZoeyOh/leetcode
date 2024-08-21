/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = (mat) => {
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  const result = Array.from({ length: mat.length }, () => new Array(mat[0].length).fill(null));
  const memory = [];
  
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 0) {
        result[i][j] = 0;
        memory.push([i, j]);
      } else {
        result[i][j] = Infinity;
      }
    }
  }

  while (memory.length > 0) {
    const [row, column] = memory.shift();
    const count = result[row][column];

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newColumn = column + dc;

      if (0 <= newRow && newRow < result.length && 0 <= newColumn && newColumn < result[0].length) {
        if (count + 1 < result[newRow][newColumn]) {
          result[newRow][newColumn] = count + 1;
          memory.push([newRow, newColumn]);
        }
      }
    }
  }

  return result;
};
