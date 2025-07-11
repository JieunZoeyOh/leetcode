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
  const memory = new Set();
  let node = head;

  while (node) {
    if (memory.has(node)) return true;
    memory.add(node);
    node = node.next;
  }

  return false;
};
