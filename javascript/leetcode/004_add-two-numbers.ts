import { test } from '../tools';

export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1?: ListNode | null, l2?: ListNode | null): ListNode {
  const result = new ListNode();
  let current = result;
  let num1 = l1;
  let num2 = l2;
  let rest = 0;

  while (true) {
    const sum = (num1?.val ?? 0) + (num2?.val ?? 0) + (rest ?? 0);

    if (!sum && !num1?.next && !num2?.next) {
      break;
    }

    current.val = sum % 10;
    rest = Math.floor(sum / 10);

    if (!num1?.next && !num2?.next && !rest) {
      break;
    }

    current.next = new ListNode();
    current = current.next;
    num1 = num1?.next;
    num2 = num2?.next;
  }

  return result;
};

const case1_l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const case1_l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
const case1_result = new ListNode(7, new ListNode(0, new ListNode(8)));
test(() => addTwoNumbers(case1_l1, case1_l2), case1_result);

const case2_l1 = new ListNode(0);
const case2_l2 = new ListNode(0);
const case2_result = new ListNode(0);
test(() => addTwoNumbers(case2_l1, case2_l2), case2_result);

const case3_l1 = new ListNode(
  9,
  new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))))
);
const case3_l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
const case3_result = new ListNode(
  8,
  new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1)))))))
);
test(() => addTwoNumbers(case3_l1, case3_l2), case3_result);
