import { test } from '../../tools';

function maxArea(heights: number[]): number {
  let left = 0;
  let right = heights.length - 1;
  let max = 0;

  while (left < right) {
    const distance = right - left;
    const leftValue = heights[left];
    const rightValue = heights[right];
    const min = Math.min(leftValue, rightValue);
    const v = distance * min;

    if (v > max) {
      max = v;
    }

    if (leftValue >= rightValue) {
      right--;
    } else {
      left++;
    }
  }

  return max;
}

test(() => maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
test(() => maxArea([1, 1]), 1);
