import { test } from '../tools';

// function firstUniqChar(s: string): number {
//   const dictionary: Record<string, number> = {};
//   let result = -1;

//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];

//     if (dictionary[char] !== undefined) {
//       dictionary[char] = -1;
//     } else {
//       dictionary[char] = i;
//     }
//   }

//   for (const idx of Object.values(dictionary)) {
//     if (idx === -1) {
//       continue;
//     }

//     if (result === -1 || idx < result) {
//       result = idx;
//     }
//   }

//   return result;
// }

function firstUniqChar(s: string): number {
  const dictionary: Record<string, number> = {};

  for (const char of s) {
    dictionary[char] = (dictionary[char] ?? 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (dictionary[s[i]] === 1) {
      return i;
    }
  }

  return -1;
}

test(() => firstUniqChar('leetcode'), 0);
test(() => firstUniqChar('loveleetcode'), 2);
test(() => firstUniqChar('aabb'), -1);
