/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(list1, list2) {
  const headNode = new ListNode();
  let currentNode = headNode;
  let currentNode1 = list1;
  let currentNode2 = list2;

  while (currentNode1 && currentNode2) {
    if (currentNode1.val > currentNode2.val) {
      const node = new ListNode(currentNode2.val);
      currentNode.next = node;
      currentNode = currentNode.next;
      currentNode2 = currentNode2.next;
    } else {
      const node = new ListNode(currentNode1.val);
      currentNode.next = node;
      currentNode = currentNode.next;
      currentNode1 = currentNode1.next;
    }
  }

  if (currentNode1) {
    currentNode.next = currentNode1;
  }

  if (currentNode2) {
    currentNode.next = currentNode2;
  }

  return headNode.next;
};