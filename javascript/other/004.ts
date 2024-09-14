import { test } from '../tools';

// function sort(nums: number[]): number[] {
//   let itterations = 0;

//   for (let i = 0; i < nums.length; i++) {
//     nums[i] *= nums[i];

//     for (let j = i; j >= 1; j--) {
//       itterations++;

//       if (nums[j] < nums[j - 1]) {
//         const temp = nums[j];
//         nums[j] = nums[j - 1];
//         nums[j - 1] = temp;
//       } else {
//         break;
//       }
//     }
//   }

//   console.log('itterations: ', itterations);
//   return nums;
// }

function sort(nums: number[]): number[] {
  const result = new Array(nums.length);
  let itterations = 0;
  let left = 0;
  let right = nums.length - 1;

  for (let i = nums.length - 1, leftNum: number, rightNum: number; i >= 0; i--) {
    itterations++;
    leftNum = nums[left] * nums[left];
    rightNum = nums[right] * nums[right];

    if (rightNum > leftNum) {
      result[i] = rightNum;
      right--;
    } else {
      result[i] = leftNum;
      left++;
    }
  }

  console.log('itterations: ', itterations);
  return result;
}

test(() => sort([-3, 2, 4]), [4, 9, 16]);
test(() => sort([-3, -2, 1, 2, 4]), [1, 4, 4, 9, 16]);
test(() => sort([-6, -3, -2, 1, 2, 4]), [1, 4, 4, 9, 16, 36]);
test(() => sort([1, 2, 3, 4, 5]), [1, 4, 9, 16, 25]);
test(() => sort([2]), [4]);
test(() => sort([]), []);
