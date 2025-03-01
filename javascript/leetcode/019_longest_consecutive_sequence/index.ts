import { test } from '../../tools';

const a = {
  100: 1,
  4: 2,
  200: 1,
  1: 1,
  3: 1,
  2: 1,
};

function longestConsecutive(nums: number[]): number {
  if (!nums.length) {
    return 0;
  }

  const set = new Set(nums);
  let max = 1;

  for (const num of set) {
    if (set.has(num - 1)) continue;

    let localMax = 1;

    while (set.has(num + localMax)) {
      localMax++;
    }

    if (localMax > max) {
      max = localMax;
    }
  }

  return max;
}

test(() => longestConsecutive([100, 4, 200, 1, 3, 2]), 4);
test(() => longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]), 9);
test(() => longestConsecutive([1, 0, 1, 2]), 3);
test(() => longestConsecutive([0, -1]), 2);
