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
const reverseList = (head) => {
  if (!head) return null;

  return reverse(head, null);
};

const reverse = (cur, prev) => {
  const temp = cur.next;
  cur.next = prev;
  
  if (!temp) return cur;
  
  return reverse(temp, cur);
}
