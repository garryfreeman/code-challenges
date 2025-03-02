import { test } from '../../tools';

function twoSum(numbers: number[], target: number): number[] {
  const map: Record<number, number> = {};

  for (let i = 1; i <= numbers.length; i++) {
    const current = numbers[i - 1];
    const diff = target - current;

    if (map[diff] !== undefined) {
      return [map[diff], i];
    }

    map[current] = i;
  }

  return [];
}

function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const currentSum = numbers[left] + numbers[right];

    if (currentSum === target) {
      return [left + 1, right + 1];
    }

    currentSum > target ? right-- : left++;
  }

  return [];
}

test(() => twoSum([2, 7, 11, 15], 9), [1, 2]);
test(() => twoSum([2, 3, 4], 6), [1, 3]);
test(() => twoSum([-1, 0], -1), [1, 2]);
