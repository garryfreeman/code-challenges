import { test } from '../../tools';

function guess(number: number): number {
  return 0;
}

function guessNumber(n: number): number {
  let left = 1;
  let right = n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const result = guess(mid);

    if (result === 0) {
      return mid;
    } else if (result < 0) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return 0;
}

test(() => guessNumber(10), 6);
test(() => guessNumber(1), 1);
test(() => guessNumber(2), 1);
