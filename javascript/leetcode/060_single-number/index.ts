import { test } from '../../tools';

function singleNumber(nums: number[]): number {
  let result = 0;

  for (const num of nums) {
    result ^= num;
  }

  return result;
}

test(() => singleNumber([2, 2, 1]), 1);
test(() => singleNumber([4, 1, 2, 1, 2]), 4);
test(() => singleNumber([1]), 1);
