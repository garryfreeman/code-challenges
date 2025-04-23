import { test } from '../../tools';

function search(nums: number[], target: number): boolean {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return true;
    }

    if (nums[mid] === nums[left] && nums[mid] === nums[right]) {
      left++;
      right--;

      continue;
    }

    if (nums[left] <= nums[mid]) {
      if (nums[mid] < target || target < nums[left]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else {
      if (nums[mid] > target || target > nums[right]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return false;
}

test(() => search([2, 5, 6, 0, 0, 1, 2], 0), true);
test(() => search([2, 5, 6, 0, 0, 1, 2], 3), false);
test(() => search([1, 0, 1, 1, 1], 0), true);
test(() => search([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1], 2), true);
test(() => search([0, 0, 1, 1, 2, 0], 2), true);
test(() => search([1, 1, 1, 1, 1, 1, 1, 1, 1, 13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 13), true);
test(() => search([5, 1, 3], 3), true);
