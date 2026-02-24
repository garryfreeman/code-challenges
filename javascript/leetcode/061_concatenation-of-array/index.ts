import { test } from '../../tools';

function getConcatenation(nums: number[]): number[] {
  const ans = new Array(nums.length * 2);

  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[i];
    ans[i + nums.length] = nums[i];
  }

  return ans;
}

// function getConcatenation(nums: number[]): number[] {
//   return [...nums, ...nums];
// }

test(() => getConcatenation([1, 2, 1]), [1, 2, 1, 1, 2, 1]);
test(() => getConcatenation([1, 3, 2, 1]), [1, 3, 2, 1, 1, 3, 2, 1]);
