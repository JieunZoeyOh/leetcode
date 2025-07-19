/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = (root) => {
  const arr = [];
  traverse(root, 0, arr);
  return arr;
};

const traverse = (node, index, arr) => {
  if (!node) return;

  arr[index] = [...(arr[index] || []), node.val];

  traverse(node.left, index + 1, arr);
  traverse(node.right, index + 1, arr);
}
