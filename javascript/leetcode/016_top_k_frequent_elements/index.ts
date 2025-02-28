import { test } from '../../tools';

// function topKFrequent(nums: number[], k: number): number[] {
//   const map = new Map<number, number>();

//   for (const num of nums) {
//     let currentCount = map.get(num) || 0;

//     map.set(num, ++currentCount);
//   }

//   return Array.from(map.entries())
//     .sort((a, b) => b[1] - a[1])
//     .slice(0, k)
//     .map((n) => n[0]);
// }

function topKFrequent(nums: number[], k: number): number[] {
  const freqMap = new Map<number, number>();
  const sorted: number[][] = [];
  const result: number[] = [];

  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  for (const [num, repeats] of freqMap) {
    if (!sorted[repeats]) {
      sorted[repeats] = [num];
    } else {
      sorted[repeats].push(num);
    }
  }

  for (let i = sorted.length - 1; i >= 0; i--) {
    if (!sorted[i]) {
      continue;
    }

    result.push(...sorted[i]);

    if (result.length >= k) {
      break;
    }
  }

  return result;
}

test(() => topKFrequent([1, 1, 1, 2, 2, 3], 2), [1, 2]);
test(() => topKFrequent([1], 1), [1]);
test(() => topKFrequent([4, 1, -1, 2, -1, 2, 3], 2), [-1, 2]);
