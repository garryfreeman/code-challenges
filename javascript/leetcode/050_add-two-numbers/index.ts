import { ListNode } from '../../common';

// Solution 1: Iterative
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode(0);
  let current = dummy;
  let carry = 0;

  while (l1 || l2 || carry) {
    const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
  }

  return dummy.next;
}

// Solution 2: Recursive
// function addTwoNumbers(l1: ListNode | null, l2: ListNode | null, carry = 0): ListNode | null {
//   if (!l1 && !l2 && !carry) return null;

//   const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
//   const node = new ListNode(sum % 10);
//   node.next = addTwoNumbers(l1?.next ?? null, l2?.next ?? null, Math.floor(sum / 10));

//   return node;
// }

const n13 = new ListNode(3);
const n12 = new ListNode(4, n13);
const n11 = new ListNode(2, n12);

const n23 = new ListNode(4);
const n22 = new ListNode(6, n23);
const n21 = new ListNode(5, n22);

const result = addTwoNumbers(n11, n21);

console.log(JSON.stringify(result, undefined, 4));
