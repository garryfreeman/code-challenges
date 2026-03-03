import { test } from '../../tools';

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m + n - 1;

  while (m > 0 || n > 0) {
    let mnum = nums1[m - 1] ?? Number.MIN_SAFE_INTEGER;
    let nnum = nums2[n - 1] ?? Number.MIN_SAFE_INTEGER;

    if (mnum > nnum) {
      nums1[i] = mnum;
      m--;
    } else {
      nums1[i] = nnum;
      n--;
    }

    i--;
  }
}

const case1_nums1: number[] = [1, 2, 3, 0, 0, 0];
const case1_nums2: number[] = [2, 5, 6];
const case1_result: number[] = [1, 2, 2, 3, 5, 6];

test(() => {
  merge(case1_nums1, 3, case1_nums2, 3);

  return case1_nums1;
}, case1_result);

const case2_nums1: number[] = [1];
const case2_nums2: number[] = [];
const case2_result: number[] = [1];

test(() => {
  merge(case2_nums1, 1, case2_nums2, 0);

  return case2_nums1;
}, case2_result);

const case3_nums1: number[] = [0];
const case3_nums2: number[] = [1];
const case3_result: number[] = [1];

test(() => {
  merge(case3_nums1, 0, case3_nums2, 1);

  return case3_nums1;
}, case3_result);
