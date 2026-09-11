import { test } from '../../tools';

function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const current = nums[mid];

    if (current === target) {
      return mid;
    }

    if (current > target) {
      right = mid - 1;
    }

    if (current < target) {
      left = mid + 1;
    }
  }

  return left;
}

test(() => searchInsert([1, 3, 5, 6], 5), 2);
test(() => searchInsert([1, 3, 5, 6], 2), 1);
test(() => searchInsert([1, 3, 5, 6], 7), 4);
test(() => searchInsert([1, 3, 5, 6], 0), 0);
test(() => searchInsert([1, 3], 2), 1);
