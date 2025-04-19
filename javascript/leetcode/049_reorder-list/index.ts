import { ListNode } from '../../common';

function reorderList(head: ListNode | null): void {
  if (!head || !head.next) return;

  const nodes: ListNode[] = [];
  let current: ListNode | null = head;

  while (current) {
    nodes.push(current);
    current = current.next;
  }

  let left = 0;
  let right = nodes.length - 1;

  while (left < right) {
    nodes[left].next = nodes[right];
    left++;

    if (left === right) break;

    nodes[right].next = nodes[left];
    right--;
  }

  nodes[left].next = null;
}

const n5 = new ListNode(5);
const n4 = new ListNode(4, n5);
const n3 = new ListNode(3, n4);
const n2 = new ListNode(2, n3);
const n1 = new ListNode(1, n2);

reorderList(n1);

console.log(JSON.stringify(n1));
