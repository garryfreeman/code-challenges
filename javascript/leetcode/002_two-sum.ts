import { test } from '../tools';

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (numbers: number[], target: number) {
//   const map = new Map();

//   for (let i = 0; i < numbers.length; i++) {
//     const diff = target - numbers[i];

//     if (map.has(diff)) {
//       return [i, map.get(diff)];
//     }

//     map.set(numbers[i], i);
//   }
// };

function twoSum(nums: number[], target: number): number[] {
  const map: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (map[diff] !== undefined) {
      return [i, map[diff]];
    }

    map[nums[i]] = i;
  }

  return [];
}

test(() => twoSum([2, 7, 11, 15], 9), [1, 0]);
test(() => twoSum([3, 2, 4], 6), [2, 1]);
test(() => twoSum([3, 3], 6), [1, 0]);
