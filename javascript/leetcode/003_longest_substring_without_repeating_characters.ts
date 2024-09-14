import { test } from '../tools';

// Решение №1 O(n^2)
// function lengthOfLongestSubstring(str: string): number {
//   const seen = new Map();
//   let max = 0;

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];

//     if (seen.has(char)) {
//       i = seen.get(char);
//       seen.clear();
//       continue;
//     }

//     seen.set(char, i);

//     if (seen.size > max) {
//       max = seen.size;
//     }
//   }

//   return max;
// }

// Решение №2 O(n)
/**
 * @param {string} str
 * @return {number}
 */
function lengthOfLongestSubstring(str: string): number {
  if (str.length < 2) {
    return str.length;
  }

  const seen = new Map();
  let max = 0;
  let startIdx = 0;
  let currentCount = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (seen.has(char) && seen.get(char) >= startIdx) {
      startIdx = seen.get(char) + 1;
      seen.delete(char);
    }

    seen.set(char, i);
    currentCount = i - startIdx + 1;

    if (currentCount > max) {
      max = currentCount;
    }
  }

  return max;
}

test(() => lengthOfLongestSubstring('abcabcbb'), 3);
test(() => lengthOfLongestSubstring('bbbbb'), 1);
test(() => lengthOfLongestSubstring('pwwkew'), 3);
test(() => lengthOfLongestSubstring('dvdf'), 3);
test(() => lengthOfLongestSubstring('ckilbkd'), 5);
test(() => lengthOfLongestSubstring('abba'), 2);
