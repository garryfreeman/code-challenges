import { test } from '../../tools';

function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] <= nums[right]) {
      return nums[left];
    }

    const midI = Math.floor((left + right) / 2);

    if (nums[midI] < nums[right]) {
      right = midI;
    } else {
      left = midI + 1;
    }
  }

  return nums[left];
}

test(() => findMin([3, 4, 5, 1, 2]), 1);
test(() => findMin([4, 5, 6, 7, 0, 1, 2]), 0);
test(() => findMin([11, 13, 15, 17]), 11);
test(() => findMin([5, 1, 2, 3, 4]), 1);
test(() => findMin([3, 1, 2]), 1);
test(() => findMin([2, 1]), 1);
test(() => findMin([1]), 1);
