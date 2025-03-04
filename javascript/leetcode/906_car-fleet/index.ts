import { test } from '../../tools';

function carFleet(target: number, position: number[], speed: number[]): number {}

test(() => carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]), 3);
test(() => carFleet(10, [3], [3]), 1);
test(() => carFleet(100, [0, 2, 4], [4, 2, 1]), 1);
