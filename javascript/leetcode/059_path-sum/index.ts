import { TreeNode } from '../../common';

// Solution 1: Iterative (BFS)
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;

  const queue: [TreeNode, number][] = [[root, 0]];

  for (let i = 0; i < queue.length; i++) {
    const [node, prev] = queue[i];
    const sum = node.val + prev;

    if (!node.left && !node.right && sum === targetSum) {
      return true;
    }

    if (node.left) queue.push([node.left, sum]);
    if (node.right) queue.push([node.right, sum]);

    delete queue[i];
  }

  return false;
}

// Solution 2: Iterative (DFS)
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;

  const stack: [TreeNode, number][] = [[root, 0]];

  while (stack.length) {
    const [node, prev] = stack.pop()!;
    const sum = node.val + prev;

    if (!node.left && !node.right && sum === targetSum) {
      return true;
    }

    if (node.left) stack.push([node.left, sum]);
    if (node.right) stack.push([node.right, sum]);
  }

  return false;
}

// Solution 3: Recursive (DFS)
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;

  const sum = targetSum - root.val;

  if (!root.left && !root.right) return sum === 0;

  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
}
