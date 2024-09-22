import { test } from '../tools';

function isPalindrome(str: string): boolean {
  let start = 0;
  let end = str.length - 1;

  while (end >= start) {
    if (str[start] !== str[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}

// function longestPalindrome(str: string): string {
//   if (str.length < 2) {
//     return str;
//   }

//   let result = '';

//   for (let start = 0; start < str.length; start++) {
//     for (let end = str.length - 1; end >= start; end--) {
//       if (str[start] === str[end]) {
//         const currentSubstring = str.slice(start, end + 1);

//         if (isPalindrome(currentSubstring) && currentSubstring.length > result.length) {
//           result = currentSubstring;
//         }

//         if (result.length === str.length) {
//           return result;
//         }
//       }
//     }
//   }

//   return result;
// }

function findBestFromMiddle(str: string, start: number, end: number) {
  let best = '';
  let isFirstCaseFailed = false;
  let isSecondCaseFailed = false;

  while (start >= 0 && end < str.length) {
    if (!isFirstCaseFailed && str[start] === str[end]) {
      const current = str.slice(start, end + 1);

      if (current.length > best.length) {
        best = current;
      }
    } else {
      isFirstCaseFailed = true;
    }

    if (!isSecondCaseFailed && str[start] === str[end + 1]) {
      const current = str.slice(start, end + 2);

      if (current.length > best.length) {
        best = current;
      }
    } else {
      isSecondCaseFailed = true;
    }

    if (isFirstCaseFailed && isSecondCaseFailed) {
      break;
    }

    start--;
    end++;
  }

  return best;
}

function longestPalindrome(str: string): string {
  if (str.length < 2) {
    return str;
  }

  let result = '';

  for (let i = 0; i < str.length; i++) {
    const currentBest = findBestFromMiddle(str, i, i);

    result = currentBest.length > result.length ? currentBest : result;

    if (result.length === str.length) {
      break;
    }
  }

  return result;
}

test(() => longestPalindrome('cbbdaaaadw'), 'daaaad');
test(() => longestPalindrome('babad'), 'bab');
test(() => longestPalindrome('cbbd'), 'bb');
test(() => longestPalindrome('cbbc'), 'cbbc');
test(() => longestPalindrome('abb'), 'bb');
test(() => longestPalindrome('abc'), 'a');
test(() => longestPalindrome('aacabdkacaa'), 'aca');
