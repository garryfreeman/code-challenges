import { test } from '../../tools';

function removeElement(nums: number[], val: number): number {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      delete nums[i];

      continue;
    }

    if (count !== i) {
      nums[count] = nums[i];
      delete nums[i];
    }

    count++;
  }

  return count;
}

// Bad solution
// function removeElementV1(nums: number[], val: number): number {
//   let count = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === val) {
//       delete nums[i];

//       continue;
//     }

//     count++;

//     let j = i - 1;

//     while (j - 1 >= 0 && nums[j - 1] === undefined) {
//       j--;
//     }

//     if (j >= 0 && nums[j] === undefined) {
//       nums[j] = nums[i];
//       delete nums[i];
//     }
//   }

//   return count;
// }

const nums1 = [3, 2, 2, 3];
const nums1_result = [2, 2, , ,];

const nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
const nums2_result = [0, 1, 3, 0, 4, , , ,];

test(() => removeElement(nums1, 3), 2);
test(() => nums1, nums1_result);

test(() => removeElement(nums2, 2), 5);
test(() => nums2, nums2_result);
