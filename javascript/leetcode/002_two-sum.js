/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const map = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const diff = target - numbers[i];

    if (map.has(diff)) {
      return [i, map.get(diff)];
    }

    map.set(numbers[i], i);
  }
};
