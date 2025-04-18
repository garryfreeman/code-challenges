import { test } from '../../tools';

// Solution 1: Iterative with array
function kthCharacter(k: number): string {
  const chars = [97];

  while (chars.length < k) {
    const length = chars.length;

    for (let i = 0; i < length; i++) {
      chars.push(chars[i] + 1);

      if (chars.length >= k) {
        break;
      }
    }
  }

  return String.fromCharCode(chars[k - 1]);
}

// const INITIAL_WORD = 'a';

// Solution 2: Iterative with string
// function kthCharacter(k: number): string {
//   let word = INITIAL_WORD;

//   while (word.length < k) {
//     for (const char of word) {
//       if (word.length >= k) {
//         break;
//       }

//       word += String.fromCharCode(char.charCodeAt(0) + 1);
//     }
//   }

//   return word[k - 1];
// }

// Solution 3: Recursive
// function kthCharacter(k: number, chars: number[] = [97]): string {
//   if (chars.length < k) {
//     const length = chars.length;

//     for (let i = 0; i < length; i++) {
//       chars.push(chars[i] + 1);

//       if (chars.length >= k) {
//         break;
//       }
//     }

//     return kthCharacter(k, chars);
//   }

//   return String.fromCharCode(chars[k - 1]);
// }

test(() => kthCharacter(5), 'b');
test(() => kthCharacter(10), 'c');
