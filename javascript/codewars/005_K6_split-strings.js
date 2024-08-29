/**
 * Link: https://www.codewars.com/kata/515de9ae9dcfc28eb6000001
 *
 * Description:
 * Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
 *
 * Examples:
 * 'abc' =>  ['ab', 'c_']
 * 'abcdef' => ['ab', 'cd', 'ef']
 */

function solution(str) {
  let arr = [];

  if (str.length % 2) {
    str += '_';
  }

  for (let i = 0; i < str.length; i += 2) {
    arr.push(str[i] + str[i + 1]);
  }

  return arr;
}

function solution(str) {
  let arr = [];
  if (str.length % 2) {
    for (let i = 0; i < str.length - 1; i += 2) {
      arr.push(str[i] + str[i + 1]);
    }

    arr.push(str[str.length - 1] + '_');
  } else {
    for (let i = 0; i < str.length; i += 2) {
      arr.push(str[i] + str[i + 1]);
    }
  }

  return arr;
}
