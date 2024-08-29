/**
 * Link: https://www.codewars.com/kata/5467e4d82edf8bbf40000155
 *
 * Description:
 * Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
 *
 * Examples:
 * Input: 42145 Output: 54421
 * Input: 145263 Output: 654321
 * Input: 123456789 Output: 987654321
 */

function descendingOrder(n) {
  return Number(String(n).split('').sort().reverse().join(''));
}

function compareNumeric(a, b) {
  if (a > b) return -1;
  if (a == b) return 0;
  if (a < b) return 1;
}

function descendingOrder(n) {
  let strArray = n.toString().split('');
  let numArray = strArray.map((item) => Number(item));
  numArray.sort(compareNumeric);
  let num = Number(numArray.join(''));

  return num;
}
