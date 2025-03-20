import { test } from '../../tools';

function largestRectangleArea(heights: number[]): number {
  if (!heights.length) return 0;

  let max = 0;
  const stack: { from: number; height: number }[] = [];

  for (let i = 0; i <= heights.length; i++) {
    const height = i < heights.length ? heights[i] : 0;
    let from = i;

    while (stack.length && stack[stack.length - 1].height >= height) {
      const prev = stack.pop()!;
      from = prev.from;

      max = Math.max(max, (i - prev.from) * prev.height);
    }

    stack.push({
      from,
      height,
    });
  }

  return max;
}

test(() => largestRectangleArea([1, 2, 3, 4, 5]), 9);
test(() => largestRectangleArea([5, 4, 3, 2, 1]), 9);
test(() => largestRectangleArea([2, 1, 5, 6, 2, 3]), 10);
test(() => largestRectangleArea([2, 4]), 4);
test(() => largestRectangleArea([1]), 1);
test(() => largestRectangleArea([0, 9]), 9);
test(() => largestRectangleArea([4, 2, 0, 3, 2, 4, 3, 4]), 10);
test(() => largestRectangleArea([2, 1, 4, 5, 1, 3, 3]), 8);
test(() => largestRectangleArea([1, 1]), 2);
