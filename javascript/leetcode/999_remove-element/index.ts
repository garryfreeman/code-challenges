import { test } from '../../tools';

function removeElement(nums: number[], val: number): number {}

test(() => removeElement([3, 2, 2, 3], 3), 2);
test(() => removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2), 5);
