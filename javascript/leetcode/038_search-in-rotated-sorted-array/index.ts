import { test } from '../../tools';

function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (target === nums[mid]) {
      return mid;
    }

    if (nums[left] <= nums[mid]) {
      if (target > nums[mid] || target < nums[left]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      if (target < nums[mid] || target > nums[right]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return -1;
}

test(() => search([1], 0), -1);
test(() => search([1], 1), 0);
test(() => search([1, 2, 3, 4, 5, 6], 4), 3);
test(() => search([4, 5, 6, 7, 0, 1, 2], 0), 4);
test(() => search([4, 5, 6, 7, 0, 1, 2], 3), -1);
test(() => search([4, 5, 6, 7, 0, 1, 2], 5), 1);
test(() => search([4, 5, 6, 7, 8, 1, 2, 3], 8), 4);
test(() => search([5, 1, 2, 3, 4], 1), 1);
