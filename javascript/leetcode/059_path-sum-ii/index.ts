import { TreeNode } from '../../common';

// Solution 1: Recursive (DFS)
function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  if (!root) return [];

  const result: number[][] = [];
  const path: number[] = [];

  function dfs(node: TreeNode, sum = 0) {
    if (!node) return;

    path.push(node.val);
    sum += node.val;

    if (!node.left && !node.right && targetSum === sum) {
      result.push([...path]);
    }

    if (node.left) dfs(node.left, sum);
    if (node.right) dfs(node.right, sum);

    path.pop();
  }

  dfs(root);

  return result;
}

// Solution 2: Iterative (DFS)
// function pathSum(root: TreeNode | null, targetSum: number): number[][] {
//   if (!root) return [];

//   const result: number[][] = [];
//   const stack: [TreeNode, number, Array<number>][] = [[root, root.val, [root.val]]];

//   while (stack.length) {
//     const [node, sum, path] = stack.pop()!;

//     if (!node.left && !node.right && targetSum === sum) {
//       result.push(path);

//       continue;
//     }

//     if (node.right) {
//       stack.push([node.right, sum + node.right.val, [...path, node.right.val]]);
//     }

//     if (node.left) {
//       stack.push([node.left, sum + node.left.val, [...path, node.left.val]]);
//     }
//   }

//   return result;
// }
