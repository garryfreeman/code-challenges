import { ListNode } from '../../common';

// Solution 1: Array
// function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
//   const nodes: ListNode[] = [];
//   let current = head;

//   while (current) {
//     nodes.push(current);
//     current = current.next;
//   }

//   const prev = nodes.at(-(n + 1));
//   const toDelete = nodes.at(-n);

//   if (prev) {
//     prev.next = toDelete?.next ?? null;
//   } else {
//     head = toDelete?.next ?? null;
//   }

//   return head;
// }

// Solution 2: Two Pointers
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let slow: ListNode | null = dummy;
  let fast: ListNode | null = dummy;

  for (let i = 0; i <= n; i++) {
    if (fast) {
      fast = fast.next;
    } else {
      break;
    }
  }

  while (fast) {
    slow = slow!.next;
    fast = fast?.next;
  }

  slow!.next = slow!.next?.next ?? null;

  return dummy.next;
}

const n5 = new ListNode(5);
const n4 = new ListNode(4, n5);
const n3 = new ListNode(3, n4);
const n2 = new ListNode(2, n3);
const n1 = new ListNode(1, n2);

const result = removeNthFromEnd(n1, 5);

console.log(JSON.stringify(result));
