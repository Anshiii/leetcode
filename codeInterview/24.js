/* 
定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
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
 * @return {ListNode}
 */
 var reverseList = function (head) {
  if (!head) return null;
  let last = null,
    cur = head,
    next;
  while (cur) {
    next = cur.next;
    cur.next = last;
    last = cur;
    cur = next;
  }
  return last;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var parList = function (arr) {
  let top = new ListNode(null, null);
  let last = top;
  for (let i = 0; i < arr.length; i++) {
    last.next = new ListNode(arr[i], null);
    last = last.next;
  }
  return top.next;
};

let list = parList([1, 2, 3, 4, 5]);
let list2 = parList([1]);
reverseList(list);
reverseList(list2);
