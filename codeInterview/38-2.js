// 剑指 Offer II 038. 每日温度

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let result = [],
    idxTem = [];
  for (let i = 0; i < temperatures.length; i++) {
    const cur = temperatures[i];
    // 比 cur 小的都可以确定结果了
    while (idxTem.length && temperatures[idxTem[idxTem.length - 1]] < cur) {
      let curIdx = idxTem.pop();
      result[curIdx] = i - curIdx;
    }

    //   插入今天的 idx，越小越后，已知比它小的都已经出去了，留下的都是比他大的，所以直接 push 就可以了
    idxTem.push(i);
  }

  // 剩下的都是等不到的
  while (idxTem.length) {
    let curIdx = idxTem.pop();
    result[curIdx] = 0;
  }
  return result;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
console.log(dailyTemperatures([73]));
console.log(dailyTemperatures([73,77]));
console.log(dailyTemperatures([77,73]));
