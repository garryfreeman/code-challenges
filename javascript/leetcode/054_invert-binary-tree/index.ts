import { TreeNode } from '../../common';

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return root;

  const left = root.left;
  const right = root.right;

  root.right = invertTree(left);
  root.left = invertTree(right);

  return root;
}
