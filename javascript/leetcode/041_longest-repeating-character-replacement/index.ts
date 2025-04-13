import { test } from '../../tools';

function characterReplacement(s: string, k: number): number {
  const map: Record<string, number> = {};
  let result = 0;
  let left = 0;
  let right = 0;
  let maxFreq = 0;

  while (right < s.length) {
    const char = s[right];
    map[char] = (map[char] || 0) + 1;
    maxFreq = Math.max(maxFreq, map[char]);

    while (right - left + 1 - maxFreq > k) {
      map[s[left]] = Math.max((map[s[left]] || 0) - 1, 0);
      left++;
    }

    result = Math.max(result, right - left + 1);
    right++;
  }

  return result;
}

test(() => characterReplacement('ABAB', 2), 4);
test(() => characterReplacement('AABABBA', 1), 4);
test(() => characterReplacement('ABAA', 0), 2);
test(() => characterReplacement('ABBB', 2), 4);
test(
  () =>
    characterReplacement(
      'KRSCDCSONAJNHLBMDQGIFCPEKPOHQIHLTDIQGEKLRLCQNBOHNDQGHJPNDQPERNFSSSRDEQLFPCCCARFMDLHADJADAGNNSBNCJQOF',
      4
    ),
  7
);
