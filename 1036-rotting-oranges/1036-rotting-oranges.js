const DIRECTIONS = [[-1, 0], [1, 0], [0, -1], [0, 1]];

/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = (grid) => {
  const row = grid.length;
  const column = grid[0].length;

  // -1: empty cell
  // Infinity: fresh orange
  // else: rotton time(<= 0)
  const oranges = Array.from ({ length: row }, () => Array(column).fill(-1));
  const rottenOrangesQueue = [];
  let result = 0;
  let freshOranges = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (grid[i][j] === 1) {
        oranges[i][j] = Infinity;
        freshOranges++;
      } else if (grid[i][j] === 2) {
        oranges[i][j] = 0;
        rottenOrangesQueue.push([i, j]);
      }
    }
  }

  while (rottenOrangesQueue.length > 0) {
    const [i, j] = rottenOrangesQueue.shift();

    for (const [x, y] of DIRECTIONS){
      const [newX, newY] = [i + x, j + y];
      if (0 <= newX && newX < row && 0 <= newY && newY < column) {
        if (oranges[newX][newY] === -1) continue;

        if (oranges[i][j] + 1 < oranges[newX][newY]) {
          if (oranges[newX][newY] === Infinity) {
            freshOranges--;
          }
          oranges[newX][newY] = oranges[i][j] + 1;
          result = Math.max(result, oranges[i][j] + 1);
          rottenOrangesQueue.push([newX, newY]);
        }
      }
    }
  }

  return freshOranges ? -1 : result;
};
