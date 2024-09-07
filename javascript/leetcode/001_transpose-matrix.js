/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
function transpose(matrix) {
  const result = new Array(matrix[0].length);

  for (let x = 0; x < matrix[0].length; x++) {
    result[x] = [];

    for (let y = 0; y < matrix.length; y++) {
      result[x][y] = matrix[y][x];
    }
  }

  return result;
}
