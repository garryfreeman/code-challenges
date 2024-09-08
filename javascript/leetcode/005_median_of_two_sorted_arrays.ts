import { test } from '../tools';

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1: number[], nums2: number[]): number {
  const totalSize = nums1.length + nums2.length;
  const isOdd = Boolean(totalSize % 2);
  const joined: number[] = [];
  let num1 = nums1.pop() ?? Number.MIN_SAFE_INTEGER;
  let num2 = nums2.pop() ?? Number.MIN_SAFE_INTEGER;

  while (joined.length <= totalSize / 2) {
    if (num1 > num2) {
      joined.push(num1);
      num1 = nums1.pop() ?? Number.MIN_SAFE_INTEGER;
    } else {
      joined.push(num2);
      num2 = nums2.pop() ?? Number.MIN_SAFE_INTEGER;
    }
  }

  if (isOdd) {
    return joined.pop()!;
  }

  return (joined.pop()! + joined.pop()!) / 2;
};

// var findMedianSortedArrays = function (nums1: number[], nums2: number[]): number {
//   const totalSize = nums1.length + nums2.length;
//   const isOdd = Boolean(totalSize % 2);
//   const joined: number[] = [];
//   let i = 0; // idx of nums1
//   let j = 0; // idx of num2

//   while (joined.length <= totalSize / 2) {
//     const num1 = nums1[i];
//     const num2 = nums2[j];

//     if ((num1 ?? Infinity) < (num2 ?? Infinity)) {
//       joined.push(num1);
//       i++;
//     } else {
//       joined.push(num2);
//       j++;
//     }
//   }

//   if (isOdd) {
//     return joined.pop()!;
//   }

//   return (joined.pop()! + joined.pop()!) / 2;
// };

test(() => findMedianSortedArrays([1, 3], [2]), 2);
test(() => findMedianSortedArrays([1, 2], [3, 4]), 2.5);
test(() => findMedianSortedArrays([0, 0], [0, 0]), 0);
test(() => findMedianSortedArrays([], [1]), 1);
test(() => findMedianSortedArrays([2], []), 2);
test(() => findMedianSortedArrays([1, 3, 8], [7, 9, 10]), 7.5);
test(() => findMedianSortedArrays([1, 2, 3], [4, 5, 6]), 3.5);
test(() => findMedianSortedArrays([1, 2], [1, 2, 3]), 2);
test(() => findMedianSortedArrays([1, 3, 5], [2, 4, 6]), 3.5);
test(() => findMedianSortedArrays([-5, 3, 6, 12, 15], [-12, -10, -6, -3, 4, 10]), 3);
test(() => findMedianSortedArrays([1, 2, 6], [3, 4, 5]), 3.5);
