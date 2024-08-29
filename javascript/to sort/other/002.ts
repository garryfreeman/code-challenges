import { test } from '../tools/test';

// https://www.codewars.com/kata/52c31f8e6605bcc646000082/javascript
// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).
// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
// Based on: http://oj.leetcode.com/problems/two-sum/

// function twoSum(numbers: number[], target: number): [number, number] | undefined {
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }

function twoSum(numbers: number[], target: number): [number, number] | undefined {
  const map = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const diff = target - numbers[i];

    if (map.has(diff)) {
      return [i, map.get(diff)];
    }

    map.set(numbers[i], i);
  }
}

test(() => twoSum([1, 2, 3], 4), [0, 2]);
test(() => twoSum([1234, 5678, 9012], 14690), [1, 2]);
test(() => twoSum([2, 2, 3], 4), [0, 1]);
test(() => twoSum([2, 3, 1], 3), [0, 2]);
