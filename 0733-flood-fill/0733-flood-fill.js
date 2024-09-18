const DIRECTIONS = [[0, -1], [0, 1], [1, 0], [-1, 0]];

/**
 * @param {number[][]} image
 * @param {number} st - start row
 * @param {number} sc - start column
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = (image, sr, sc, color) => {
  const originalColor = image[sr][sc];

  if (color === originalColor) return image;

  const dfs = (row, column) => {
    if (image[row][column] !== originalColor) return;

    image[row][column] = color;

    for (const [r, c] of DIRECTIONS) {
      const newRow = row + r;
      const newColumn = column + c;

      if (0 <= newRow && newRow < image.length && 0 <= newColumn && newColumn < image[0].length) {
        if (image[newRow][newColumn] === originalColor) {
          dfs(newRow, newColumn);
        }
      }
    }
  };

  dfs(sr, sc);

  return image;
};
