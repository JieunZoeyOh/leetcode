/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} node
 * @return {boolean}
 */
const isValidBST = (node, min = -Infinity, max = Infinity) => {
  if (!node) return true;
  if (!(min < node.val && node.val < max)) return false;

  return isValidBST(node.left, min, node.val) && isValidBST(node.right, node.val, max);
};
