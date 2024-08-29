import { test } from '../tools/test';

// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
// Note: anagrams are case insensitive
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"
// "Buckethead" is an anagram of "DeathCubeK"

function areAnagrams(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) return false;

  const dict: Record<string, number> = {};

  for (const char of str1.toLowerCase()) {
    if (dict[char]) {
      dict[char]++;
    } else {
      dict[char] = 1;
    }
  }

  for (const char of str2.toLowerCase()) {
    if (dict[char]) {
      dict[char]--;
    } else {
      return false;
    }
  }

  return true;
}

test(() => areAnagrams('foefet', 'toffee'), true);
test(() => areAnagrams('Buckethead', 'DeathCubeK'), true);
test(() => areAnagrams('Twoo', 'WooT'), true);
test(() => areAnagrams('dumble', 'bumble'), false);
test(() => areAnagrams('ound', 'round'), false);
test(() => areAnagrams('round', 'roudd'), false);
test(() => areAnagrams('roand', 'rousd'), false);
