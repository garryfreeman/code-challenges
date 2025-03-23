import { test } from '../../tools';

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let [arr1, arr2] = [nums1, nums2];
  const tatalLength = nums1.length + nums2.length;
  const half = Math.floor(tatalLength / 2);
  const isOdd = tatalLength % 2;

  if (arr1.length > arr2.length) {
    arr1 = nums2;
    arr2 = nums1;
  }

  let left = 0;
  let right = arr1.length - 1;

  while (true) {
    const mid1 = Math.floor((left + right) / 2);
    const mid2 = half - mid1 - 2;

    const leftValue1 = arr1[mid1] ?? Number.MIN_SAFE_INTEGER;
    const rightValue1 = arr1[mid1 + 1] ?? Number.MAX_SAFE_INTEGER;

    const leftValue2 = arr2[mid2] ?? Number.MIN_SAFE_INTEGER;
    const rightValue2 = arr2[mid2 + 1] ?? Number.MAX_SAFE_INTEGER;

    if (leftValue1 <= rightValue2 && leftValue2 <= rightValue1) {
      if (isOdd) {
        return Math.min(rightValue1, rightValue2);
      } else {
        return (Math.max(leftValue1, leftValue2) + Math.min(rightValue1, rightValue2)) / 2;
      }
    }

    if (leftValue1 > rightValue2) {
      right = mid1 - 1;
    } else {
      left = mid1 + 1;
    }
  }
}

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
test(() => findMedianSortedArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]), 9);
