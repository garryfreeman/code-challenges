import { TreeNode } from '../../common';

// Solution 1: Iterative (DFS)
function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;

  const stack: [TreeNode | null, TreeNode | null][] = [[root.left, root.right]];

  while (stack.length) {
    const [node1, node2] = stack.pop()!;

    if (!node1 && !node2) continue;
    if (!node1 || !node2) return false;
    if (node1.val !== node2.val) return false;

    stack.push([node1.left, node2.right]);
    stack.push([node1.right, node2.left]);
  }

  return true;
}
