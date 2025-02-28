import { test } from '../../tools';

function productExceptSelf(nums: number[]): number[] {
  const result: number[] = new Array(nums.length).fill(1);

  let leftProduct = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] *= leftProduct;
    leftProduct *= nums[i];
  }

  let rightProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return result;
}

test(() => productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]);
test(() => productExceptSelf([-1, 1, 0, -3, 3]), [0, 0, 9, 0, 0]);
