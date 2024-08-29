import { test } from '../tools/test';

// https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript
// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:
// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):
// 9 ==> -1
// 111 ==> -1
// 531 ==> -1

function nextBigger(n: number): number {
  console.log('------------', n);
  const digits = String(n).split('');

  for (let i = digits.length - 2; i >= 0; i--) {
    const last = digits[digits.length - 1];
    const current = digits[i];

    if (current < last) {
      digits[i] = last;
      digits[digits.length - 1] = current;
    }

    const currentNumber = Number(digits.join(''));

    console.log(currentNumber);

    if (currentNumber > n) {
      return currentNumber;
    }
  }

  return +digits.join('');
}

// test(() => nextBigger(513), 531);
// test(() => nextBigger(2017), 2071);
// test(() => nextBigger(414), 441);
test(() => nextBigger(144), 414);

// test(() => nextBigger(123456789), 1);
// test(() => nextBigger(1234567890), 1234567908);
// test(() => nextBigger(941716454893594), 941716454893945);
// test(() => nextBigger(988874433222110), -1);
// test(() => nextBigger(204364), 204436);

// function nextBigger(num) {
//   const digits = String(num).split('');
//   const digitsASC = String(num).split('').sort();
//   const digitsDESC = String(num).split('').sort((a, b) => b - a);

//   for (let i = digits.length - 1; i >= 0; i--) {
//     const current = digits[i];
//     const biggerThanCurrent = digitsASC.filter(num => num > current);

//     if (!biggerThanCurrent.length) continue;

//     for (let j = biggerThanCurrent.length - 1; j >= 0; j--) {
//       const biggerIndex = digits.indexOf(biggerThanCurrent[j]);

//       if (biggerIndex !== -1) {

//         const a = biggerThanCurrent[j];
//         const b = digits[i];

//         digits[i] = a;
//         digits[biggerIndex] = b;

//         if (+digits.join('') > num) {
//           return +digits.join('');
//         }
//       }
//     }
//   }

//   return +digits.join('');
// }

// function nextBigger(n) {
//   console.log(n)
//   let splitNums = String(n).split('');
//   if (!splitNums.length) return -1;
//   if (!checkNumUniq(splitNums)) return -1;

//   let generatedNums = generateUniqNumsArray(splitNums).sort((a, b) => a - b);

//   let index = generatedNums.findIndex((el) => n === el);
//   if (index === generatedNums.length - 1) {
//     return -1;
//   }
//   return generatedNums[index + 1];
// }

// function checkNumUniq(arr) {
//   let isUniq = false;
//   let i = 1;

//   while (!isUniq && i < arr.length) {
//     if (arr[0] !== arr[i]) {
//       isUniq = true;
//     }
//     i++;
//   }

//   return isUniq;
// }

function generateUniqNumsArray(arr: number[]) {
  let result = new Set<number>();
  result.add(+arr.join(''));

  for (let i = arr.length - 1; i >= 0; i--) {
    for (let k = arr.length - 1; k >= 0; k--) {
      let arr2 = [...arr];
      arr2[k] = arr[i];
      arr2[i] = arr[k];
      result.add(+arr2.join(''));
    }
  }

  return Array.from(result);
}

console.log(generateUniqNumsArray([1, 2, 3]));

// function generatePermutations(array: number[]) {
//   // Функция для генерации перестановок
//   function permute(arr: number[], memo: number[] = []) {
//     let cur: number[],
//       permutations: number[] = [];

//     for (let i = 0; i < arr.length; i++) {
//       cur = arr.splice(i, 1);
//       if (arr.length === 0) {
//         // @ts-ignore
//         permutations.push(memo.concat(cur));
//       }
//       permutations = permutations.concat(permute(arr.slice(), memo.concat(cur)));
//       arr.splice(i, 0, cur[0]);
//     }

//     return permutations;
//   }

//   return permute(array);
// }

// // Пример использования
// const digits = [1, 2, 3];
// const permutations = generatePermutations(digits);
// console.log(permutations);
