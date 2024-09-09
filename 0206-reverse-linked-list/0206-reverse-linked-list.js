/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
  if (!head) return head;
  
  let currentNode = head;
  let nextNode = head.next;
  currentNode.next = null;

  while (nextNode) {
    const temp = nextNode.next;
    nextNode.next = currentNode;
    currentNode = nextNode;
    nextNode = temp;
  }

  return currentNode;
};
