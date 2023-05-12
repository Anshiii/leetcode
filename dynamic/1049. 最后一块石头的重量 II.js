/**
 * @param {number[]} stones
 * @return {number}
 */

/**
 * 一堆石头 n, n[i]表示每块石头重量
 * 取两块石头 n1,n2
 * 重量相等 都碎
 * 不等 粉碎小的，大的质量为 大的-小的
 * 返回石头的最小可能质量
 *
 *
 * 1：尽可能先选大的石头; 排序  模拟?
 * [31, 26, 33, 21, 40] => [40,33,31,26,21]
 * =>[31,26,21,7]
 * =>[21,7,5]
 * =>[14,5]
 * =>[9]  和 output：5 不一致
 *
 * 2. 问题可以转化为把石头分为两份，并使得两份的重量尽可能相等。(怎么转的?...)
 * [40,33,31,26,21] 计算总和 151  一半 75.5
 * 计算从0到 i 个数中，任选几个数的可能的和的集合，并排序，与 75.5最接近的两个数的差就是结果； 如果找到 half 本身，return 0
 * 小到大排序，逐渐累加；
 * [21,26,31,33,40]
 * {0,21}=>{0,21,26,47,}=>{0,21,26,47,31,}
 * 不算到最后一块石头，没办法得出最近的，超过75.5的值可以不用塞进去
 *
 *
 */
var lastStoneWeightII = function (stones) {
  if (stones.length < 2) return stones[0];
  let sumList = new Set([0, stones[0]]);
  let allSum = stones.reduce((acc, cur) => acc + cur);
  let target = allSum / 2;
  let minSpace = Infinity;
  // 最大堆
  for (let i = 1; i < stones.length; i++) {
    const stone = stones[i];
    let size = sumList.size;
    for (let sum of sumList) {
      if (size <= 0) break;
      size--;
      let tem = sum + stone;
      let min = target - tem;
      if (Math.abs(min) < minSpace) {
        minSpace = Math.abs(min);
      }

      // 大于 target 不用作为基础 sum
      if (min < 0) continue;

      sumList.add(tem);
    }
  }
  return minSpace * 2;
};

lastStoneWeightII([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 14, 23, 37, 61, 98]); //
lastStoneWeightII([1, 2]); // =>{0,1} {2,3} 1.5
lastStoneWeightII([8, 7, 4, 2, 1, 1]);
lastStoneWeightII([31, 26, 33, 21, 40]);


// function Maxheap(args) {
//   // 默认用 完全二叉树 => root ,left,right,left-left,left-right ...
//   this.source = args;
//   this.list = [];
// }

// Maxheap.prototype.create = function () {
//   for (let i = 0; i < this.list.length; i++) {
//     const cur = this.list[i];
//     this.add(cur);
//   }
// };

// Maxheap.prototype.top = function () {
//   let val = this.list[0];
//   let last = this.list.pop();
//   this.list[0] = last;

//   return val;
// };
// Maxheap.prototype.add = function (num) {
//   let currentIdx = this.list.length;
//   this.list.push(num);
//   while (currentIdx != 0) {
//     let rootIdx = Math.floor(currentIdx - 1) / 2;
//     if (this.list[currentIdx] > this.list[rootIdx]) {
//       this.list[currentIdx] = this.list[rootIdx];
//       this.list[rootIdx] = num;
//     }
//     currentIdx = rootIdx;
//   }
// };
