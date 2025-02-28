import { ListNode } from '../../common';
import { test } from '../../tools';

function detectCycle(head: ListNode | null): ListNode | null {
  if (!head?.next!) {
    return null;
  }

  let current = head;
  const seen = new Set<ListNode>();

  while (current?.next) {
    seen.add(current);

    if (seen.has(current.next)) {
      return current.next;
    }

    current = current.next;
  }

  return null;
}

function detectCycle2(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return null;

  let slow = head,
    fast = head;

  while (fast && fast.next) {
    slow = slow.next!;
    fast = fast.next.next!;

    if (slow === fast) {
      let entry = head;

      while (entry !== slow) {
        entry = entry.next!;
        slow = slow.next!;
      }

      return entry;
    }
  }

  return null;
}

{
  const zero = new ListNode(0);
  const one = new ListNode(1);
  const two = new ListNode(2);
  const three = new ListNode(3);
  const four = new ListNode(-4);

  three.next = two;
  two.next = zero;
  zero.next = four;
  four.next = two;

  test(() => detectCycle2(three), two);
}
