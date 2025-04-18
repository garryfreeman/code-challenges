import { test } from '../../tools';

// Solution 1: Iterative
function isPowerOfThree(n: number): boolean {
  while (n > 0) {
    if (n === 1) {
      return true;
    }

    if (n % 3) {
      return false;
    }

    n /= 3;
  }

  return false;
}

// Solution 2: Recursive
// function isPowerOfThree(n: number): boolean {
//   if (n === 3 || n === 1) {
//     return true;
//   }

//   if (n < 3 || n % 3) {
//     return false;
//   }

//   return isPowerOfThree(n / 3);
// }

test(() => isPowerOfThree(27), true);
test(() => isPowerOfThree(9), true);
test(() => isPowerOfThree(1), true);
test(() => isPowerOfThree(-1), false);
test(() => isPowerOfThree(0), false);
test(() => isPowerOfThree(45), false);
test(() => isPowerOfThree(12), false);
