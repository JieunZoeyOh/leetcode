/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = (grid) => {
  const m = grid.length;
  const n = grid[0].length;

  const queue = [];
  let freshOranges = 0;
  let minutes = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) continue;

      if (grid[i][j] === 1) {
        freshOranges++;
      } else {
        queue.push([i, j, 0]);
      }
    }
  }

  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  while (queue.length > 0) {
    const [x, y, time] = queue.shift();
    minutes = Math.max(minutes, time);

    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;
   
      if (newX >= 0 && newX < m && newY >= 0 && newY < n && grid[newX][newY] === 1) {
        grid[newX][newY] = 2;
        queue.push([newX, newY, time + 1]);
        freshOranges--;
      }
    }
  }

  return freshOranges === 0 ? minutes : -1;
};
