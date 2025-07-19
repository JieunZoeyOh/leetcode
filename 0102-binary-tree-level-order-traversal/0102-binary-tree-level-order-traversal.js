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
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const size = queue.length;
    const currentLevelNodes = [];

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      currentLevelNodes.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(currentLevelNodes);
  }

  return result;
};
