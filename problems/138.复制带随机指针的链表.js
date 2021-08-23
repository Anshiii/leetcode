/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
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
  let node = head,
    cNode = new Node(node.val),
    result = cNode,
    map = new Map(); // oldNode - newNODE
  map.set(node, cNode);
  map.set(null, null);

  while (node.next) {
    cNode.next = new Node(node.next.val);
    node = node.next;
    cNode = cNode.next;
    map.set(node, cNode);
  }

  node = head;
  cNode = result;
  while (node) {
    cNode.random = map.get(node.random);
    cNode = cNode.next;
    node = node.next;
  }
  // 遍历复制 val + next
  return result;
};
// @lc code=end
