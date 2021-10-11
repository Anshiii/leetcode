/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let len = temperatures.length;
  let result = new Array(len).fill(0);
  let stack = [];

  // 记录过去的温度，遍历当前，如果当前比过去更高
  /* 
    过去的更低的温度，通通要出栈；留下的都是比当前更高的温度。
    自然而然单调递减。
    
    */
  for (let i = 0; i < len; i++) {
    let current = temperatures[i];
    while (stack.length) {
      let lastIdx = stack[stack.length - 1];
      let lastOne = temperatures[lastIdx];
      if (lastOne < current) {
        result[lastIdx] = i - lastIdx;
        stack.pop();
      } else {
        break;
      }
    }
    stack.push(i);
  }
  console.log(result);
  return result
};
// @lc code=end

dailyTemperatures([73,74,75,71,69,72,76,73])
dailyTemperatures([30,40,50,60])
dailyTemperatures([30,60,90])
dailyTemperatures([])
