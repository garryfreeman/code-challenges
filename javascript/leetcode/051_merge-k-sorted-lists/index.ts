import { ListNode } from '../../common';

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (!lists.length) return null;

  if (lists.length <= 2) {
    return mergeTwoLists(lists[0], lists[1]);
  }

  const mid = lists.length / 2;
  const l1 = mergeKLists(lists.slice(0, mid));
  const l2 = mergeKLists(lists.slice(mid));

  return mergeTwoLists(l1, l2);
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let dummy = new ListNode(0);
  let current = dummy;
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

  return dummy.next;
}
