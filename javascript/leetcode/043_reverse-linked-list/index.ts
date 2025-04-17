import { ListNode } from '../../common';

// Solution 1: Iterative
function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let current: ListNode | null = head;
  let next: ListNode | null = head.next;

  while (next) {
    const tmp = next.next;
    next.next = current;
    current = next;
    next = tmp;
  }

  head.next = null;

  return current;
}

// Solution 2: Recursive
function reverseList(head: ListNode | null): ListNode | null {
  if (!head?.next) {
    return head;
  }

  const newHead = reverseList(head.next);

  head.next.next = head;
  head.next = null;

  return newHead;
}

const n5 = new ListNode(5);
const n4 = new ListNode(4, n5);
const n3 = new ListNode(3, n4);
const n2 = new ListNode(2, n3);
const n1 = new ListNode(1, n2);

const res = reverseList(n1);
console.log(res);
