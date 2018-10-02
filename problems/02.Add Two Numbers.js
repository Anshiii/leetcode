/**
 * Created by Anshi on 2018/10/1.
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

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/*算术器 next有值或者flag有值都要继续算。*/

/*这种困境： 总觉得只能把根节点单独提出来处理；需要依靠函数的返回值，返回头节点即可 */

/*用了递归效率太差，改用循环。(之前树的题目用递归却不会导致明显的效率问题...因为非线性吗)*/
var addTwoNumbers = function (l1, l2) {
  let flag = 0;

  function add(n1, n2,) {
	let node = null;
	if (n1 && n2) {
	  let perItem = n1.val + n2.val + flag;
	  let val = perItem % 10;
	  flag = Math.floor(perItem / 10);
	  node = new ListNode(val);
	  node.next = add(n1.next, n2.next);
	  return node;
	} else if (n2) {
	  let perItem = n2.val + flag;
	  let val = perItem % 10;
	  flag = Math.floor(perItem / 10);
	  node = new ListNode(val);
	  node.next = add(null, n2.next);
	  return node;
	} else if (n1) {
	  let perItem = n1.val + flag;
	  let val = perItem % 10;
	  flag = Math.floor(perItem / 10);
	  node = new ListNode(val);
	  node.next = add(n1.next, null);
	  return node;
	} else if (flag) {
	  node = new ListNode(flag);
	  return node;
	}
	return node

  }

  let result = add(l1, l2);
  console.log(result)
  return result;
};
let l1 = new ListNode(1);

l1.next = new ListNode(2); //21

let l2 = new ListNode(3);

l2.next = new ListNode(5); //53


addTwoNumbers(l1, l2)