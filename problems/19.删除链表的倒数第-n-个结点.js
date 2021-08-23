/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  /* 需要依靠头结点 || 尾结点 */
  let top = new ListNode(0, head);
  let result = head;

  let left = top,
    right = head,
    count = 0;

  while (count < n) {
    right = right.next;
    count++;
  }

  while (right) {
    right = right.next;
    left = left.next;
  }

  left.next = left.next.next;

  return top.next;
};
// @lc code=end

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function createList(arrs) {
  let head = new ListNode(arrs[0]);
  node = head;
  for (let i = 1; i < arrs.length; i++) {
    node.next = new ListNode(arrs[i]);
    node = node.next;
  }
  return head;
}

let p1 = createList([1, 2, 3, 4, 5]);
let p2 = createList([1, 2]);
let p3 = createList([1]);
removeNthFromEnd(p2, 1);

removeNthFromEnd(p1, 2);

removeNthFromEnd(p2, 2);

removeNthFromEnd(p3, 1);
