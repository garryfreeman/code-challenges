import { ListNode } from '../../common';

// Solution 1: Iterative
function removeElements(head: ListNode | null, val: number): ListNode | null {
  let current = head;

  while (current) {
    if (head && head.val === val) {
      head = head.next;
      current = head;
    } else if (current.next && current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
}

// Solution 2: Recursive
// function removeElements(head: ListNode | null, val: number): ListNode | null {
//   if (!head) {
//     return head;
//   }

//   if (head?.val === val) {
//     return removeElements(head.next, val);
//   }

//   head.next = removeElements(head.next, val);

//   return head;
// }

const n62 = new ListNode(6);
const n5 = new ListNode(5, n62);
const n4 = new ListNode(4, n5);
const n3 = new ListNode(3, n4);
const n61 = new ListNode(6, n3);
const n2 = new ListNode(2, n61);
const n1 = new ListNode(1, n2);

const result = removeElements(n1, 6);
console.log(JSON.stringify(result));
