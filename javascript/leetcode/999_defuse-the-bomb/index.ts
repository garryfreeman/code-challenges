import { test } from '../../tools';

function decrypt(code: number[], k: number): number[] {}

test(() => decrypt([5, 7, 1, 4], 3), [12, 10, 16, 13]);
test(() => decrypt([1, 2, 3, 4], 0), [0, 0, 0, 0]);
test(() => decrypt([2, 4, 9, 3], -2), [12, 5, 6, 13]);
test(() => decrypt([2, 4, 9, 3], -2), [12, 5, 6, 13]);
