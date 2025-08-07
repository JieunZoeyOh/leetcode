/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
  const rowLength = grid.length;
  const columnLength = grid[0].length;
  const visited = Array.from({ length: rowLength }, () => new Array(columnLength).fill("0"));

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        visited[i][j] = false;
      }
    }
  }

  let count = 0;

  for (let i = 0; i < visited.length; i++) {
    for (let j = 0; j < visited[0].length; j++) {
      if (visited[i][j] === false) {
        count++;
        dfs(i, j, visited);
      }
    }
  }

  return count;
};

const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

const dfs = (i, j, arr) => {
  arr[i][j] = true;

  for (const [x, y] of directions) {
    const [newX, newY] = [i + x, j + y];
    if (0 <= newX && newX < arr.length && 0 <= newY && newY < arr[0].length) {
      if (arr[newX][newY] === false) {
        dfs(newX, newY, arr);
      }
    }
  }
};
