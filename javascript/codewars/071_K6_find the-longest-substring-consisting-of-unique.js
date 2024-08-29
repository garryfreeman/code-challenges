/**
 * Link: https://www.codewars.com/kata/5bcd90808f9726d0f6000091
 *
 * Description:
 * Task:
 * You are given a string s. It's a string consist of letters, numbers or symbols.
 * Your task is to find the Longest substring consisting of unique characters in s, and return the length of it.
 *
 * Note:
 * 1 <= s.length <= 10^7
 * 5 fixed testcases
 * 100 random testcases, testing for correctness of solution
 * 100 random testcases, testing for performance of code
 * All inputs are valid.
 * Pay attention to code performance.
 * If my reference solution gives the wrong result in the random tests, please let me know(post an issue).
 *
 * Example:
 * For s="baacab", the output should be 3.
 * The non repeating substrings in s are:
 * "b","c","a","ba","ac","ca","ab","cab"
 * The longest one is "cab", its length is 3.
 * For s="abcd", the output should be 4.
 * The longest one is "abcd", its length is 4.
 * For s="!@#$%^&^%$#@!", the output should be 7.
 * The longest substring are "!@#$%^&" and "&^%$#@!", their length both are 7.
 */

function longestSubstringOf(str) {
  if (str.length < 2) {
    return str.length;
  }

  const seen = new Map();
  let max = 0;
  let startIdx = 0;
  let currentCount = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (seen.has(char) && seen.get(char) >= startIdx) {
      startIdx = seen.get(char) + 1;
      seen.delete(char);
    }

    seen.set(char, i);
    currentCount = i - startIdx + 1;

    if (currentCount > max) {
      max = currentCount;
    }
  }

  return max;
}
