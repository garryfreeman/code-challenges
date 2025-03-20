import { ListNode } from '../../common';

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let head = new ListNode();
  let current = head;
  let i = list1;
  let j = list2;

  while (i || j) {
    if ((i?.val ?? Number.MAX_SAFE_INTEGER) < (j?.val ?? Number.MAX_SAFE_INTEGER)) {
      current.next = i;
      i = i!.next;
    } else {
      current.next = j;
      j = j!.next;
    }

    current = current.next!;
  }

  return head.next;
}
