import { test } from '../tools';

function getNeighborsCoord(image: number[][], sr: number, sc: number, color: number) {
  const neighbours: [number, number][] = [];

  if (image[sr - 1]?.[sc] === color) neighbours.push([sr - 1, sc]);
  if (image[sr + 1]?.[sc] === color) neighbours.push([sr + 1, sc]);
  if (image[sr][sc + 1] === color) neighbours.push([sr, sc + 1]);
  if (image[sr][sc - 1] === color) neighbours.push([sr, sc - 1]);

  return neighbours;
}

function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  const oldColor = image[sr][sc];

  if (oldColor === color) {
    return image;
  }

  image[sr][sc] = color;

  const neighbours = getNeighborsCoord(image, sr, sc, oldColor);

  for (const neighbour of neighbours) {
    floodFill(image, neighbour[0], neighbour[1], color);
  }

  return image;
}

test(
  () =>
    floodFill(
      [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
      ],
      1,
      1,
      2
    ),
  [
    [2, 2, 2],
    [2, 2, 0],
    [2, 0, 1],
  ]
);
test(
  () =>
    floodFill(
      [
        [0, 0, 0],
        [0, 0, 0],
      ],
      0,
      0,
      0
    ),
  [
    [0, 0, 0],
    [0, 0, 0],
  ]
);
