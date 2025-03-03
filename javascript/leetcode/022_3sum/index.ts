import { test } from '../../tools';

function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) {
    return [];
  }

  nums.sort((a, b) => a - b);

  const result: number[][] = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];

      if (sum === 0) {
        result.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;

        while (j < k && nums[j] === nums[j - 1]) j++;
        while (j < k && nums[k] === nums[k + 1]) k--;
      } else {
        sum < 0 ? j++ : k--;
      }
    }
  }

  return result;
}

test(
  () => threeSum([-1, 0, 1, 2, -1, -4]),
  [
    [-1, -1, 2],
    [-1, 0, 1],
  ]
);
test(() => threeSum([0, 1, 1]), []);
test(() => threeSum([0, 0, 0]), [[0, 0, 0]]);
test(() => threeSum([0, 0, 0, 0]), [[0, 0, 0]]);
test(
  () => threeSum([-2, 0, 1, 1, 2]),
  [
    [-2, 0, 2],
    [-2, 1, 1],
  ]
);
test(
  () => threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]),
  [
    [-4, 0, 4],
    [-4, 1, 3],
    [-3, -1, 4],
    [-3, 0, 3],
    [-3, 1, 2],
    [-2, -1, 3],
    [-2, 0, 2],
    [-1, -1, 2],
    [-1, 0, 1],
  ]
);
