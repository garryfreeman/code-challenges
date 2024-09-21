import { test } from '../tools';

// solution #1 ~ 600ms
// function findEvenNumbers(digits: number[]): number[] {
//   const result = new Set<number>();
//   digits.sort((a, b) => a - b);

//   for (let a = 0; a < digits.length; a++) {
//     const digitA = digits[a];

//     if (!digitA) continue;

//     for (let b = 0; b < digits.length; b++) {
//       if (b === a) continue;

//       const digitB = digits[b];

//       for (let c = 0; c < digits.length; c++) {
//         const digitC = digits[c];

//         if (c === b || c === a || digitC % 2) continue;

//         result.add(Number(`${digitA}${digitB}${digitC}`));
//       }
//     }
//   }

//   return Array.from(result);
// }

// solution #2 ~ 60ms
function findEvenNumbers(digits: number[]): number[] {
  const result = new Array<number>();
  const repeats = new Array<number>(10).fill(0);

  for (const digit of digits) {
    repeats[digit]++;
  }

  for (let i = 100; i <= 999; i += 2) {
    const hundreds = Math.floor(i / 100);
    const tens = Math.floor((i % 100) / 10);
    const ones = i % 10;
    let correct = true;

    if (--repeats[hundreds] < 0) {
      correct = false;
    }

    if (--repeats[tens] < 0) {
      correct = false;
    }

    if (--repeats[ones] < 0) {
      correct = false;
    }

    if (correct) {
      result.push(i);
    }

    repeats[hundreds]++;
    repeats[tens]++;
    repeats[ones]++;
  }

  return result;
}

test(() => findEvenNumbers([2, 1, 3, 0]), [102, 120, 130, 132, 210, 230, 302, 310, 312, 320]);
test(() => findEvenNumbers([2, 2, 8, 8, 2]), [222, 228, 282, 288, 822, 828, 882]);
test(() => findEvenNumbers([3, 7, 5]), []);
