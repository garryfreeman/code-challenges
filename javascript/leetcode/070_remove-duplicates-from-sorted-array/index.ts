function removeDuplicates(nums: number[]): number {
  let l = 0;
  let r = 1;

  while (r < nums.length) {
    if (nums[l] !== nums[r]) {
      l++;
      nums[l] = nums[r];
    }

    r++;
  }

  return l + 1;
}

const case1_nums = [1, 1, 2];
const case1_result = [1, 2, null];

const case2_nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const case2_result = [0, 1, 2, 3, 4, null, null, null, null, null];
