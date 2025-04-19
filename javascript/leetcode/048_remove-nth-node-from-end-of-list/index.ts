import { ListNode } from '../../common';

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const nodes: ListNode[] = [];
  let current = head;

  while (current) {
    nodes.push(current);
    current = current.next;
  }

  const prev = nodes.at(-(n + 1));
  const toDelete = nodes.at(-n);

  if (prev) {
    prev.next = toDelete?.next ?? null;
  } else {
    head = toDelete?.next ?? null;
  }

  return head;
}
