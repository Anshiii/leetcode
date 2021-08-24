/* 
输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

示例1：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let top = new ListNode(null);

  let p1 = l1,
    p2 = l2,
    last = top;

  while (p1 && p2) {
    if (p1.val < p2.val) {
      last.next = p1;
      p1 = p1.next;
    } else {
      last.next = p2;
      p2 = p2.next;
    }
    last = last.next;
  }

  if (p1) last.next = p1;
  if (p2) last.next = p2;

  return top.next;
};
