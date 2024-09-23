import { test } from '../tools';

function nextGreatestLetter(letters: string[], target: string): string {
  let start = 0;
  let end = letters.length;

  while (start < end) {
    const middle = Math.floor((end - start) / 2 + start);

    if (letters[middle] <= target) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }

  return letters[start % letters.length];
}

test(() => nextGreatestLetter(['c', 'f', 'j'], 'a'), 'c');
test(() => nextGreatestLetter(['c', 'f', 'j'], 'c'), 'f');
test(() => nextGreatestLetter(['x', 'x', 'y', 'y'], 'z'), 'x');
