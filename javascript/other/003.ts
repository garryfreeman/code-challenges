import { test } from '../tools';

// это решение лучше если у нас могут быть разные типы скобок
// function validParentheses(str: string): boolean {
//   const arr: string[] = [];

//   for (let char of str) {
//     if (char === '(') {
//       arr.push(char);
//     } else if (arr.pop() !== '(') {
//       return false;
//     }
//   }

//   return !arr.length;
// }

// это решение лучше если у нас один тип скобок
function validParentheses(str: string): boolean {
  let counter = 0;

  for (const char of str) {
    if (char === '(') {
      counter++;
    } else if (counter) {
      counter--;
    } else {
      return false;
    }
  }

  return !counter;
}

test(() => validParentheses('()'), true);
test(() => validParentheses('((()))'), true);
test(() => validParentheses('()()()'), true);
test(() => validParentheses('(()())()'), true);
test(() => validParentheses('()(())((()))(())()'), true);

test(() => validParentheses(')('), false);
test(() => validParentheses('()()('), false);
test(() => validParentheses('((())'), false);
test(() => validParentheses('())(()'), false);
test(() => validParentheses(')()'), false);
test(() => validParentheses(')'), false);
