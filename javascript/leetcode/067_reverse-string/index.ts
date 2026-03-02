import { test } from '../../tools';

function reverseString(s: string[]): void {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const tmp = s[left];
    s[left] = s[right];
    s[right] = tmp;

    left++;
    right--;
  }
}

const s1 = ['h', 'e', 'l', 'l', 'o'];
const s1_result = ['o', 'l', 'l', 'e', 'h'];

const s2 = ['H', 'a', 'n', 'n', 'a', 'h'];
const s2_result = ['h', 'a', 'n', 'n', 'a', 'H'];

test(() => {
  reverseString(s1);

  return s1;
}, s1_result);

test(() => {
  reverseString(s2);

  return s2;
}, s2_result);
