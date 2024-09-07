/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(str) {
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
