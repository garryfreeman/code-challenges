import { test } from '../../tools';

function lengthOfLastWord(s: string): number {
  let left = 0;
  let right: number | null = null;

  for (let i = s.length - 1; i >= 0; i--) {
    if (!right) {
      if (s[i] !== ' ') {
        right = i;
      }

      continue;
    }

    if (s[i] === ' ') {
      return right - i;
    }
  }

  return (right ?? s.length) - left + 1;
}

test(() => lengthOfLastWord('Hello World'), 5);
test(() => lengthOfLastWord('   fly me   to   the moon  '), 4);
test(() => lengthOfLastWord('luffy is still joyboy'), 6);
test(() => lengthOfLastWord('a'), 1);
test(() => lengthOfLastWord('a '), 1);
test(() => lengthOfLastWord(' a'), 1);
