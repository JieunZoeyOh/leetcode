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
  if (!node) return null;

  const oldToNew = new Map();
  const queue = [node];

  oldToNew.set(node, new _Node(node.val));

  while (queue.length > 0) {
    const currentOriginal = queue.shift();

    for (const originalNeighbor of currentOriginal.neighbors) {
      if (!oldToNew.has(originalNeighbor)) {
        const newNeighborNode = new _Node(originalNeighbor.val);
        oldToNew.set(originalNeighbor, newNeighborNode);
        queue.push(originalNeighbor);
      }

      oldToNew.get(currentOriginal).neighbors.push(oldToNew.get(originalNeighbor));
    }
  }

  return oldToNew.get(node);
};

const cloneGraph_dfs = (node) => {
  const oldToNew = new Map();

  const dfs = (originalNode) => {
    if (!originalNode) return null;

    if (oldToNew.has(originalNode)) return oldToNew.get(originalNode);

    const clonedNode = new _Node(originalNode.val);

    oldToNew.set(originalNode, clonedNode);

    for (const neighbors of originalNode.neighbors) {
      clonedNode.neighbors.push(dfs(neighbors));
    }

    return clonedNode;
  };

  return dfs(node);
};
