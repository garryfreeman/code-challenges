import { test } from '../../tools';

function longestCommonPrefix(strs: string[]): string {
  let result = '';

  for (let i = 0; i < strs[0]?.length; i++) {
    const char = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) return result;
    }

    result += char;
  }

  return result;
}

test(() => longestCommonPrefix(['flower', 'flow', 'flight']), 'fl');
test(() => longestCommonPrefix(['dog', 'racecar', 'car']), '');
test(() => longestCommonPrefix([]), '');
