const DIRECTIONS = [[-1, 0], [1, 0], [0, -1], [0, 1]];

/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = (grid) => {
  const row = grid.length;
  const column = grid[0].length;

  const visited = Array.from ({ length: row }, () => Array(column).fill(false));
  const queue = [];
  let maxMinutes = 0;
  let freshOranges = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (grid[i][j] === 1) { // fresh orange
        freshOranges++;
      } else if (grid[i][j] === 2) { // rotten orange
        visited[i][j] = true;
        queue.push([i, j, 0]);
      }
    }
  }

  if (freshOranges === 0) return 0;

  let head = 0;
  while (head < queue.length) {
    const [i, j, minutes] = queue[head++];
    maxMinutes = Math.max(maxMinutes, minutes);

    for (const [x, y] of DIRECTIONS) {
      const [newX, newY] = [i + x, j + y];

      if (0 <= newX && newX < row &&
        0 <= newY && newY < column &&
        grid[newX][newY] === 1 &&
        !visited[newX][newY]
      ) {
        visited[newX][newY] = true;
        freshOranges--;
        queue.push([newX, newY, minutes + 1]);
      }
    }
  }

  return freshOranges ? -1 : maxMinutes;
};
