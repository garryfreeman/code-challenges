import { test } from '../../tools';

function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    const num = nums[mid];

    if (num === target) {
      return mid;
    }

    if (num < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

test(() => search([-1, 0, 3, 5, 9, 12], 9), 4);
test(() => search([-1, 0, 3, 5, 9, 12], 2), -1);
