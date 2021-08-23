/* 输入一个链表的头节点，
从尾到头反过来返回每个节点的值（用数组返回）。

 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  let result = [],
    tem = [];
  let node = head;
  while (node) {
    tem.push(node.val);
    node = node.next;
  }

  /* @两栈做队列的题目 */
  while (tem.length) {
    result.push(tem.pop());
  }
  return result;
};

/* 确实快了一点呢 2n < n + n*unshift <  n+reverse */
