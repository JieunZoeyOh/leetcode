const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]];

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = (mat) => {
  const rowLength = mat.length;
  const columnLength = mat[0].length;
  const result = Array.from({ length: rowLength }, () => Array(columnLength).fill(Infinity));
  const queue = [];
  let pointer = 0;

  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < columnLength; j++) {
      if (mat[i][j] === 0) {
        result[i][j] = 0;
        queue.push([i, j]);
      }
    }
  }

  while (pointer < queue.length) {
    const [dx, dy] = queue[pointer++];
    const value = result[dx][dy];

    for (const [x, y] of DIRECTIONS) {
      const [nx, ny] = [dx + x, dy + y];
      if (0 <= nx && nx < rowLength && 0 <= ny && ny < columnLength && result[nx][ny] > value + 1) {
        result[nx][ny] = value + 1;
        queue.push([nx, ny]);
      }
    }
  }

  return result;
};
