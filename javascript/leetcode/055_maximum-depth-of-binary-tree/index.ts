import { TreeNode } from '../../common';

// Solution 1: Recursive (DFS)
function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return 1 + Math.max(leftDepth, rightDepth);
}

// Solution 2: Iterative (BFS)
// function maxDepth(root: TreeNode | null): number {
//   if (!root) return 0;

//   let depth = 0;
//   const queue: [TreeNode, number][] = [[root, 1]];

//   for (let i = 0; i < queue.length; i++) {
//     const [node, level] = queue[i];
//     depth = Math.max(depth, level);

//     if (node.left) queue.push([node.left, level + 1]);
//     if (node.right) queue.push([node.right, level + 1]);

//     // delete queue[i];
//   }

//   return depth;
// }
