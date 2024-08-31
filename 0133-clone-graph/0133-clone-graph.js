/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
const cloneGraph = (node) => {
  if (node === null) return null;

  const clones = new Map();
  
  const dfs = (node) => {
    if (clones.get(node)) return clones.get(node);

    const clone = new _Node(node.val);
    clones.set(node, clone);

    for (const neighbor of node.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }

    return clone;
  };

  return dfs(node);
};
