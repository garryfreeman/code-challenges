import { test } from '../tools/test';

function findClosestTo(x: number, arr: number[]): number[] {
  let best: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const diff = Math.abs(arr[i] + arr[j] - x);

      if (diff === 0) {
        return [i, j];
      } else if (diff < best[2]) {
        best = [i, j, diff];
      }
    }
  }

  return best;
}

test(() => findClosestTo(5, [1, 2, 3, 4, 5]), [0, 3]);
