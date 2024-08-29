import { test } from '../tools/test';

function isPolindrome(str: string): boolean {
  const match = /[A-Za-zА-Яа-я]/;
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (!match.test(str[left])) {
      left++;
      continue;
    }

    if (!match.test(str[right])) {
      right--;
      continue;
    }

    if (str[left].toLowerCase() !== str[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

test(() => isPolindrome(''), true);
test(() => isPolindrome('a'), true);
test(() => isPolindrome('aa'), true);
test(() => isPolindrome('as'), false);
test(() => isPolindrome('asa'), true);
test(() => isPolindrome('Казак'), true);
test(() => isPolindrome('Каак'), true);
test(() => isPolindrome('А роза упала на лапу Азора'), true);
test(() => isPolindrome('Do geese see God'), true);
test(() => isPolindrome("Madam, I'm Adam"), true);
