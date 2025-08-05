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
var isValidBST = function(root) {
  return validate(-Infinity, Infinity, root);
};

const validate = (min, max, node) => {
  if (!node) return true;
  if (!(min < node.val && node.val < max)) return false;

  return validate(min, node.val, node.left) && validate(node.val, max, node.right);
};
