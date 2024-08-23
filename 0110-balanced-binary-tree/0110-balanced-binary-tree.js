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
 * @return {boolean}
 */
const isBalanced = (root) => {
  if (!root) return true;

  return recursive(root) !== -1;
};

const recursive = (node) => {
  const leftDepth = node.left ? recursive(node.left) : 0;
  const rightDepth = node.right ? recursive(node.right) : 0;

  if (leftDepth === -1 || rightDepth === -1) return -1;
  if (Math.abs(leftDepth - rightDepth) > 1) return -1;

  return Math.max(leftDepth, rightDepth) + 1;
};
