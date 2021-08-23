/* 
定义栈的数据结构，
请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，
调用 min、push 及 pop 的时间复杂度都是 O(1)。
*/
/* 
定义栈的数据结构，
请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，
调用 min、push 及 pop 的时间复杂度都是 O(1)。
*/

/**
 * initialize your data structure here.
 */
 var MinStack = function () {
    this.minA = [];
    this.data = [];
  };
  
  /**
   * @param {number} x
   * @return {void}
   */
  MinStack.prototype.push = function (x) {
    this.data.push(x);
    let minPeek = this.minA[this.minA.length - 1];
    minPeek = minPeek === undefined ? Infinity : minPeek;
    if (x <= minPeek) this.minA.push(x);
  };
  
  /**
   * @return {void}
   */
  MinStack.prototype.pop = function () {
    let del = this.data.pop();
    let minPeek = this.minA[this.minA.length - 1];
    if (del === minPeek) this.minA.pop();
  };
  
  /**
   * @return {number}
   */
  MinStack.prototype.top = function () {
    return this.data[this.data.length - 1];
  };
  
  /**
   * @return {number}
   */
  MinStack.prototype.min = function () {
    return this.minA[this.minA.length - 1];
  };
  
  /**
   * Your MinStack object will be instantiated and called as such:
   * var obj = new MinStack()
   * obj.push(x)
   * obj.pop()
   * var param_3 = obj.top()
   * var param_4 = obj.min()
   */
  
  
let minStack = new MinStack();
minStack.push(-4);
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.min(); //--> 返回 -3.
minStack.pop();
minStack.top(); //   --> 返回 0.
minStack.min(); // --> 返回 -2.
