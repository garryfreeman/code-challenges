import { test } from '../tools/test';

// https://leetcode.com/problems/add-two-numbers/
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

function addTwoNumbers(l1: number[], l2: number[]): number[] {
  const result: number[] = [];
  let i = 0;

  while (true) {
    if (l1[i] === undefined && l2[i] === undefined) {
      break;
    }

    let current = result[i] ?? 0;

    if (l1[i] >= 0) {
      current += l1[i];
    }

    if (l2[i] >= 0) {
      current += l2[i];
    }

    if (current >= 10) {
      result[i + 1] = Math.floor(current / 10);
    }

    result[i] = current % 10;
    i++;
  }

  return result;
}

test(() => addTwoNumbers([2, 4, 3], [5, 6, 4]), [7, 0, 8]);
test(() => addTwoNumbers([0], [0]), [0]);
test(() => addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]), [8, 9, 9, 9, 0, 0, 0, 1]);
