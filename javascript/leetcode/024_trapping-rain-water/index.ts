import { test } from '../../tools';

function trap(heights: number[]): number {
  const leftTops: number[] = new Array(heights.length);
  const rightTops: number[] = new Array(heights.length);
  let left = 1;
  let right = heights.length - 2;
  let volume = 0;

  while (left < heights.length) {
    leftTops[left] = Math.max(leftTops[left - 1] ?? 0, heights[left - 1]);
    rightTops[right] = Math.max(rightTops[right + 1] ?? 0, heights[right + 1]);

    left++;
    right--;
  }

  for (let i = 1; i < heights.length - 1; i++) {
    const min = Math.min(leftTops[i], rightTops[i]);

    if (heights[i] > min) continue;

    volume += min - heights[i];
  }

  return volume;
}

function trap(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let leftMax = height[left];
  let rightMax = height[right];
  let volume = 0;

  while (left < right) {
    if (leftMax < rightMax) {
      left++;
      leftMax = Math.max(leftMax, height[left]);
      volume += leftMax - height[left];
    } else {
      right--;
      rightMax = Math.max(rightMax, height[right]);
      volume += rightMax - height[right];
    }
  }

  return volume;
}

test(() => trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6);
test(() => trap([4, 2, 0, 3, 2, 5]), 9);
