/* 

输入两个链表，找出它们的第一个公共节点。

如下面的两个链表：


公共节点是 nodeA = nodeB 而不是值相等
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let left = headA,
    right = headB,
    c1 = false,
    c2 = false;

  while (left !== null && left !== right && right !== null) {
    left = left.next;
    right = right.next;
    if (!left && !c1) {
      left = headB;
      c1 = true;
    }
    if (!right && !c2) {
      right = headA;
      c2 = true;
    }
  }

  if (left !== null && left === right) return left;

  return null;
};
