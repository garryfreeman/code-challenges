import { test } from '../../tools';

function fourSum(nums: number[], target: number): number[][] {
  if (nums.length < 4) return [];
}

test(
  () => fourSum([1, 0, -1, 0, -2, 2], 0),
  [
    [-2, -1, 1, 2],
    [-2, 0, 0, 2],
    [-1, 0, 0, 1],
  ]
);

test(() => fourSum([2, 2, 2, 2, 2], 8), [[2, 2, 2, 2]]);
