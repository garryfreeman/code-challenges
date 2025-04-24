import { TreeNode } from '../../common';

// Solution 1: Recursive
function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return root;

  const left = root.left;
  const right = root.right;

  root.right = invertTree(left);
  root.left = invertTree(right);

  return root;
}

// // Solution 2: Iterative
// function invertTree(root: TreeNode | null): TreeNode | null {
//   if (!root) return root;

//   const stack: TreeNode[] = [root];

//   while (stack.length) {
//     const node = stack.pop()!;

//     [node.left, node.right] = [node.right, node.left];

//     if (node.left) stack.push(node.left);
//     if (node.right) stack.push(node.right);
//   }

//   return root;
// }
