import { test } from '../tools';

/**
 * Дан список целых чисел, повторяющихся элементов в списке нет.
 * Нужно преобразовать это множество в строку,
 * сворачивая соседние по числовому ряду числа в диапазоны.
 */

function compress(list: number[]): string {
  const sorted = list.sort((a, b) => a - b);
  sorted.push(Infinity);

  let intervalStart: number;
  let prev: number;

  return sorted.reduce((acc, current, idx) => {
    if (!idx) {
      intervalStart = current;
      prev = current;

      return acc;
    }

    if (current - prev <= 1) {
      prev = current;

      return acc;
    }

    if (acc) {
      acc += ',';
    }

    if (prev === intervalStart) {
      acc += intervalStart;
    } else {
      acc += `${intervalStart}-${prev}`;
    }

    intervalStart = current;
    prev = current;

    return acc;
  }, '');
}

test(() => compress([]), '');
test(() => compress([1]), '1');
test(() => compress([1, 2]), '1-2');
test(() => compress([1, 4, 5, 2, 3, 9, 8, 11, 0]), '0-5,8-9,11');
test(() => compress([1, 4, 3, 2]), '1-4');
test(() => compress([1, 4]), '1,4');
test(() => compress([1, 2, 4]), '1-2,4');
test(() => compress([1, 2, 4, 5]), '1-2,4-5');
test(() => compress([1, 3, 5, 7]), '1,3,5,7');
