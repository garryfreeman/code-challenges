import { test } from '../tools/test';

// https://www.codewars.com/kata/52fba2a9adcd10b34300094c/train/javascript
// Write a function that outputs the transpose of a matrix - a new matrix where the columns and rows of the original are swapped.
// For example, the transpose of:
// | 1 2 3 |
// | 4 5 6 |
// is
// | 1 4 |
// | 2 5 |
// | 3 6 |

function transpose(matrix: number[][]): number[][] {
  const result: number[][] = new Array(matrix[0].length);

  for (let x = 0; x < matrix[0].length; x++) {
    result[x] = [];

    for (let y = 0; y < matrix.length; y++) {
      result[x][y] = matrix[y][x];
    }
  }

  return result;
}

test(() => transpose([[1]]), [[1]]);

test(
  () =>
    transpose([
      [1, 2, 3],
      [4, 5, 6],
    ]),
  [
    [1, 4],
    [2, 5],
    [3, 6],
  ]
);
