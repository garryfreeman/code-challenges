import { TreeNode } from '../../common';

function height(root: TreeNode | null): number {
  if (!root) return 0;

  const left = height(root.left);
  if (left === -1) return -1;

  const right = height(root.right);
  if (right === -1) return -1;

  if (Math.abs(left - right) > 1) {
    return -1;
  }

  return 1 + Math.max(left, right);
}

function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true;

  return height(root) !== -1;
}
