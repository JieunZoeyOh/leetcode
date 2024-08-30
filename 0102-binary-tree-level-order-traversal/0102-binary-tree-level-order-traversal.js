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
  const memory = [];
  store(root, memory, 0);

  return memory;
};

const store = (node, memory, depth) => {
  if (node === null) return;

  if (memory[depth]) {
    memory[depth].push(node.val);  
  } else {
    memory[depth] = [node.val];
  }

  store(node.left, memory, depth + 1);
  store(node.right, memory, depth + 1);
};
