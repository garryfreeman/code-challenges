import { test } from '../../tools';

// function groupAnagrams(strs: string[]): string[][] {
//   const map = new Map<string, string[]>();

//   for (const str of strs) {
//     const sorted = str.split('').sort().join('');

//     if (!map.has(sorted)) {
//       map.set(sorted, [str]);
//     } else {
//       map.get(sorted)!.push(str);
//     }
//   }

//   return Array.from(map.values());
// }

function getStrCode(str: string) {
  const a = new Array(26).fill(0);

  for (let i = 0; i < str.length; i++) {
    a[str.charCodeAt(i) - 97]++;
  }

  return a.join(' ');
}

function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (const str of strs) {
    const code = getStrCode(str);

    if (!map.has(code)) {
      map.set(code, [str]);
    } else {
      map.get(code)!.push(str);
    }
  }

  return Array.from(map.values());
}

test(() => groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']), [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]);
test(() => groupAnagrams(['']), [['']]);
test(() => groupAnagrams(['a']), [['a']]);
test(() => groupAnagrams(['bdddddddddd', 'bbbbbbbbbbc']), [['bdddddddddd'], ['bbbbbbbbbbc']]);
