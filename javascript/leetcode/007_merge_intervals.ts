import { test } from '../tools';

function merge(intervals: number[][]): number[][] {
  if (intervals.length === 0) return [];

  intervals.sort((a, b) => a[0] - b[0]);

  const result: number[][] = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const lastMerged = result[result.length - 1];
    const current = intervals[i];

    if (lastMerged[1] >= current[0]) {
      lastMerged[1] = Math.max(lastMerged[1], current[1]);

      continue;
    }

    result.push(current);
  }

  return result;
}

test(
  () =>
    merge([
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ]),
  [
    [1, 6],
    [8, 10],
    [15, 18],
  ]
);

test(
  () =>
    merge([
      [1, 4],
      [4, 5],
    ]),
  [[1, 5]]
);

test(
  () =>
    merge([
      [1, 4],
      [4, 5],
      [5, 9],
      [6, 20],
    ]),
  [[1, 20]]
);

test(
  () =>
    merge([
      [1, 4],
      [0, 4],
    ]),
  [[0, 4]]
);

test(
  () =>
    merge([
      [5, 10],
      [3, 6],
      [0, 16],
    ]),
  [[0, 16]]
);

test(
  () =>
    merge([
      [0, 10],
      [3, 6],
    ]),
  [[0, 10]]
);

test(
  () =>
    merge([
      [1, 4],
      [0, 0],
    ]),
  [
    [0, 0],
    [1, 4],
  ]
);

test(
  () =>
    merge([
      [1, 4],
      [0, 2],
      [3, 5],
    ]),
  [[0, 5]]
);
