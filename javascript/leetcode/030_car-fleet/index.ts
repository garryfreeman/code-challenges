import { test } from '../../tools';

function carFleet(target: number, position: number[], speed: number[]): number {
  const times: number[] = new Array(target);

  for (let i = 0; i < position.length; i++) {
    const p = position[i];

    times[p] = (target - p) / speed[i];
  }

  let fleet = 0;
  let currentMax = Number.MIN_SAFE_INTEGER;

  for (let i = times.length - 1; i >= 0; i--) {
    const currentT = times[i];

    if (currentT !== undefined && currentT > currentMax) {
      currentMax = currentT;
      fleet++;
    }
  }

  return fleet;
}

test(() => carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]), 3);
test(() => carFleet(10, [3], [3]), 1);
test(() => carFleet(100, [0, 2, 4], [4, 2, 1]), 1);
test(() => carFleet(10, [6, 8], [3, 2]), 2);
test(() => carFleet(10, [8, 3, 7, 4, 6, 5], [4, 4, 4, 4, 4, 4]), 6);
