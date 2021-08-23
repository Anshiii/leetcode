/* 
用两个栈实现一个队列。队列的声明如下，
请实现它的两个函数 appendTail 和 deleteHead ，
分别完成在队列尾部插入整数和在队列头部删除整数的功能。
(若队列中没有元素，deleteHead 操作返回 -1 )

 */

// PUSH POP
var CQueue = function () {
  this.a = [];
  this.b = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.a.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.b.length) return this.b.pop();
  while (this.a.length) {
    this.b.push(this.a.pop());
  }
  return this.b.length ? this.b.pop() : -1;
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
