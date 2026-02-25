import { test } from '../../tools';

function sortArray(nums: number[]): number[] {}

test(() => sortArray([5, 2, 3, 1]), [1, 2, 3, 5]);
test(() => sortArray([5, 1, 1, 2, 0, 0]), [0, 0, 1, 1, 2, 5]);
