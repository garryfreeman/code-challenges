import { test } from '../../tools';

function isPalindrome(s: string): boolean {
  let str = s.toLowerCase();
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (!/[a-z0-9]/.test(str[left])) {
      left++;
      continue;
    }

    if (!/[a-z0-9]/.test(str[right])) {
      right--;
      continue;
    }

    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

test(() => isPalindrome('A man, a plan, a canal: Panama'), true);
test(() => isPalindrome('race a car'), false);
test(() => isPalindrome(' '), true);
test(() => isPalindrome('ab_a'), true);
test(() => isPalindrome('0P'), false);
