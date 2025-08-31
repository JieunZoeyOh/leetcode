/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = (root) => {
  if (!root) return '';

  const arr = [];
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();

    if (!node) {
      arr.push('null');
    } else {
      arr.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    }
  }

  return arr.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = (data) => {
  if (data === '') return null;

  const arr = data.split(',');
  const root = new TreeNode(Number(arr[0]));
  const store = [root];

  for (let i = 1; i < arr.length; i += 2) {
    const left = arr[i];
    const right = arr[i + 1];

    const node = store.shift();

    if (left !== 'null') {
      const leftNode = new TreeNode(Number(left));
      node.left = leftNode;
      store.push(leftNode);
    }
    
    if (right !== 'null') {
      const rightNode = new TreeNode(Number(right));
      node.right = rightNode;    
      store.push(rightNode);
    }
  }

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
