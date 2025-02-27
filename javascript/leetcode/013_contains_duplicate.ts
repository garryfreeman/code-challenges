import { test } from '../tools';

function containsDuplicate(nums: number[]): boolean {
  const seen = new Set<number>();

  return nums.some((num) => {
    if (seen.has(num)) {
      return true;
    }

    seen.add(num);
  });
}

// function containsDuplicate(nums: number[]): boolean {
//   const seen = new Set<number>();

//   for (const num of nums) {
//     if (seen.has(num)) {
//       return true;
//     }

//     seen.add(num);
//   }

//   return false;
// }

// function containsDuplicate(nums: number[]): boolean {
//   const seen = new Set<number>(nums);

//   return nums.length !== seen.size;
// }

test(() => containsDuplicate([1, 2, 3, 1]), true);
test(() => containsDuplicate([1, 2, 3, 4]), false);
test(() => containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
