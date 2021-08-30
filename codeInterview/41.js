/* 
如何得到一个数据流中的中位数？
如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值
。如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。

例如，

[2,3,4] 的中位数是 3

[2,3] 的中位数是 (2 + 3) / 2 = 2.5

设计一个支持以下两种操作的数据结构：

void addNum(int num) - 从数据流中添加一个整数到数据结构中。
double findMedian() - 返回目前所有元素的中位数。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/shu-ju-liu-zhong-de-zhong-wei-shu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.data = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  /* 二分法找到位置？ */
  let left = 0,
    right = this.data.length - 1,
    pos = Infinity;

  /* 两端 */
  if (num <= this.data[0]) {
    this.data.unshift(num);
    return;
  } else if (num >= this.data[this.data.length - 1]) {
    this.data.push(num);
    return;
  }

  while (left <= right) {
    let mid = left + Math.floor((right - left) * 0.5);
    let cur = this.data[mid];
    if (cur < num) {
      left = mid + 1;
    } else if (cur > num) {
      right = mid - 1;
    } else {
      pos = mid;
      this.data.splice(pos, 0, num);
      return;
    }
  }

  this.data.splice(left, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const len = this.data.length;
  let result 
  if (len % 2 !== 1) {
    let idxL = (len - 2) * 0.5,
      idxR = len * 0.5;

      result =  this.data[idxL] * 0.5 + this.data[idxR] * 0.5;

    /* 偶数 */
  } else {
    /* 奇数 */
    let idx = (len - 1) * 0.5;
    result =  this.data[idx];
  }
  return result.toFixed(1)
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

var obj = new MedianFinder();
obj.addNum(6);
console.log(obj.findMedian());
obj.addNum(10);
console.log(obj.findMedian());
obj.addNum(2);
console.log(obj.findMedian());
obj.addNum(6);
console.log(obj.findMedian());
obj.addNum(5);
console.log(obj.findMedian());
obj.addNum(0);
console.log(obj.findMedian());
obj.addNum(6);
console.log(obj.findMedian());
obj.addNum(3);
console.log(obj.findMedian());
obj.addNum(1);
console.log(obj.findMedian());
obj.addNum(0);
console.log(obj.findMedian());
obj.addNum(0);
console.log(obj.findMedian());
