import { test } from '../../tools';

function search(nums: number[], target: number): boolean {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    const num = nums[mid];

    if (num === target) {
      return true;
    }

    if (num < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

function searchMatrix(matrix: number[][], target: number): boolean {
  let left = 0;
  let right = matrix.length - 1;

  while (left <= right) {
    const midArrayI = Math.floor((left + right) / 2);
    const midArray = matrix[midArrayI];

    if (midArray[0] > target) {
      right = midArrayI - 1;

      continue;
    }

    if (midArray.at(-1)! < target) {
      left = midArrayI + 1;

      continue;
    }

    return search(midArray, target);
  }

  return false;
}

test(
  () =>
    searchMatrix(
      [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ],
      3
    ),
  true
);

test(
  () =>
    searchMatrix(
      [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ],
      13
    ),
  false
);

test(() => searchMatrix([[1]], 0), false);

test(() => searchMatrix([[1]], 2), false);

test(() => searchMatrix([[1], [3]], 2), false);

test(
  () =>
    searchMatrix(
      [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ],
      3
    ),
  true
);
