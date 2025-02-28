import { test } from '../../tools';

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const dict: Record<string, number> = {};

  for (const char of s.toLowerCase()) {
    if (dict[char]) {
      dict[char]++;
    } else {
      dict[char] = 1;
    }
  }

  for (const char of t.toLowerCase()) {
    if (dict[char]) {
      dict[char]--;
    } else {
      return false;
    }
  }

  return true;
}

test(() => isAnagram('anagram', 'nagaram'), true);
test(() => isAnagram('rat', 'car'), false);
