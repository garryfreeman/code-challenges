import { TreeNode } from '../tools/tree_node';
import { test } from '../tools/test';

// https://leetcode.com/problems/binary-tree-maximum-path-sum/
// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.
// The path sum of a path is the sum of the node's values in the path.
// Given the root of a binary tree, return the maximum path sum of any non-empty path.

// Example 1:
// Input: root = [1,2,3]
// Output: 6
// Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.

// Example 2:
// Input: root = [-10,9,20,null,null,15,7]
// Output: 42
// Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.

function maxPathSum(root: TreeNode): number {
  let answer = 0;

  function calculateNode(root: TreeNode | null): number {
    console.log(root);

    if (!root) {
      return 0;
    }

    const leftNodeSum = calculateNode(root.left);
    const rightNodeSum = calculateNode(root.left);

    answer = Math.max(answer, leftNodeSum + rightNodeSum + root.val);

    return Math.max(leftNodeSum, rightNodeSum);
  }

  calculateNode(root);

  return answer;
}

const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const tree2 = new TreeNode(-10, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));

// test(() => maxPathSum(tree1), 6);
test(() => maxPathSum(tree2), 42);
