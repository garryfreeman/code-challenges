import { test, TreeNode } from '../tools';

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
