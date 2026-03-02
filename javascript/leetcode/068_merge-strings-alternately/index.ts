import { test } from '../../tools';

function mergeAlternately(word1: string, word2: string): string {
  const maxLength = Math.max(word1.length, word2.length);
  let result = '';

  for (let i = 0; i < maxLength; i++) {
    if (word1.charAt(i)) result += word1.charAt(i);
    if (word2.charAt(i)) result += word2.charAt(i);
  }

  return result;
}

test(() => mergeAlternately('abc', 'pqr'), 'apbqcr');
test(() => mergeAlternately('ab', 'pqrs'), 'apbqrs');
test(() => mergeAlternately('abcd', 'pq'), 'apbqcd');
