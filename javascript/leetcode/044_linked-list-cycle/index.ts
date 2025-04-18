import { ListNode } from '../../common';

// Two pointers solution
function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

// HashSet solution
// function hasCycle(head: ListNode | null): boolean {
//   if (!head?.next!) {
//     return false;
//   }

//   let current = head;
//   const seen = new Set<ListNode>();

//   while (current?.next) {
//     seen.add(current);

//     if (seen.has(current.next)) {
//       return true;
//     }

//     current = current.next;
//   }

//   return false;
// }
