const DIRECTIONS = [[-1, 0], [0, 1], [1, 0], [0, -1]];

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = (mat) => {
  const rowLength = mat.length;
  const columnLength = mat[0].length;
  const arr = Array.from({ length: rowLength }, () => Array(columnLength).fill(Infinity));
  const memory = [];

  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < columnLength; j++) {
      if (mat[i][j] === 0) {
        arr[i][j] = 0;
        memory.push([i, j]);
      }
    }
  }

  while (memory.length > 0) {
    const [x, y] = memory.shift();

    for (const [dx, dy] of DIRECTIONS) {
      const nx = x + dx;
      const ny = y + dy;

      if (0 <= nx && nx < rowLength && 0 <= ny && ny < columnLength) {
        if (arr[nx][ny] > arr[x][y] + 1) {
          arr[nx][ny] = arr[x][y] + 1;
          memory.push([nx, ny]);
        }
      }
    }
  }

  return arr;
};
