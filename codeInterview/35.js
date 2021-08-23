/* 请实现 copyRandomList 函数，
复制一个复杂链表。在复杂链表中，
每个节点除了有一个 next 指针指向下一个节点，
还有一个 random 指针指向链表中的任意节点或者 null。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return null;
  const map = new Map();

  let node = head,
    last = null;
  while (node) {
    let tem = new Node(node.val, null, node.random);
    map.set(node, tem);
    last && (last.next = tem);
    node = node.next;
    last = tem;
  }

  node = map.get(head);
  while (node) {
    node.random = map.get(node.random);
    node = node.next;
  }

  return map.get(head);
};

