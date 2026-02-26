import { test } from '../../tools';

function majorityElement(nums: number[]): number {
  let candidate = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === candidate) {
      count++;
    } else {
      count--;
    }

    if (count < 1) {
      candidate = nums[i];
      count = 1;
    }
  }

  return candidate;
}

test(() => majorityElement([3, 2, 3]), 3);
test(() => majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);
