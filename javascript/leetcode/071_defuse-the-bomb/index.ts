import { test } from '../../tools';

function decrypt(code: number[], k: number): number[] {
  const result: number[] = new Array(code.length).fill(0);

  if (k === 0) return result;

  for (let i = 0; i < code.length; i++) {
    if (k > 0) {
      for (let j = 1; j <= k; j++) {
        const prev = i - j >= 0 ? i - j : code.length + i - j;

        result[prev] += code[i];
      }
    } else if (k < 0) {
      for (let j = 1; j <= Math.abs(k); j++) {
        const next = (i + j) % code.length;

        result[next] += code[i];
      }
    }
  }

  return result;
}

test(() => decrypt([5, 7, 1, 4], 3), [12, 10, 16, 13]);
test(() => decrypt([1, 2, 3, 4], 0), [0, 0, 0, 0]);
test(() => decrypt([2, 4, 9, 3], -2), [12, 5, 6, 13]);
