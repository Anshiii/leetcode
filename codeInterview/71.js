/* 
剑指 Offer II 071. 按权重生成随机数
*/

/**
 * @param {number[]} w
 */
var Solution = function (w) {
  // 计算权重和
  this.all = 0;
  // 随机从 0 取到 all ，各数占对应份数
  this.wArr = [];
  for (let i = 0; i < w.length; i++) {
    const cur = w[i];
    this.all += cur;
    this.wArr[i] = this.all;
  }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  const rd = Math.random() * this.all;
  const last = this.wArr.length - 1;
  if (rd < this.wArr[0]) {
    return 0;
  }
  if (rd >= this.wArr[last]) {
    return last;
  }
  let left = 0,
    right = last;
  while (left <= right) {
    let mid = left + Math.ceil((right - left) / 2);

    if (rd >= this.wArr[mid]) {
      if (rd < this.wArr[mid + 1]) {
        return mid + 1;
      }
      left = mid + 1;
    } else if (rd < this.wArr[mid]) {
      if (rd >= this.wArr[mid - 1]) {
        return mid;
      }
      right = mid - 1;
    }
  }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

let solution = new Solution([1, 3, 5, 6, 9,100]);
console.log(solution.pickIndex());
console.log(solution.pickIndex());
console.log(solution.pickIndex());
console.log(solution.pickIndex());
console.log(solution.pickIndex());
console.log(solution.pickIndex());
console.log(solution.pickIndex());
console.log(solution.pickIndex());
console.log(solution.pickIndex());
console.log(solution.pickIndex());
console.log(solution.pickIndex());
console.log(solution.pickIndex());
console.log(solution.pickIndex());
console.log(solution.pickIndex());
