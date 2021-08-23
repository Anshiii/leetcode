/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

/* 队列 - 只有 前端删除 shift  和 后端插入 push */
// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.q1 = [];
//   this.q2 = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  //   this.q2.push(x);
  //   while (this.q1.length) {
  //     this.q2.push(this.q1.shift());
  //   }
//   this.q1 = this.q2;
//   this.q2 = [];

  /* 一个队列 */
  let length = this.q1.length;
  this.q1.push(x);
  while (length) {
    this.q1.push(this.q1.shift());
    length--
  }
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.q1.shift();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.q1[0];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return !this.q1.length;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end
