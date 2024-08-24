/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
  let currentNode = head;
  const nodeToNextMap = new Map();

  while (currentNode) {
    const recordedNextNode = nodeToNextMap.get(currentNode);

    if (recordedNextNode) {
      return recordedNextNode === currentNode.next;
    } else {
      nodeToNextMap.set(currentNode, currentNode.next);
    }

    currentNode = currentNode.next;
  }

  return false;
};
