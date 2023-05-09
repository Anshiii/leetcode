/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */

// 关于 dijkstra 的适用性？
var maxProbability = function (n, edges, succProb, start, end) {
  const toList = new Array(n).fill("").map((_) => []),
    rateList = new Array(n).fill("").map((_) => []);

  for (let i = 0; i < edges.length; i++) {
    const [from, to] = edges[i];
    const rate = succProb[i]; // path 越多概率越小  rate 大 path 短
    toList[from].push(to);
    rateList[from].push(rate);
    // Tips:  无向图，可来回
    toList[to].push(from);
    rateList[to].push(rate);
  }

  let queue = [start];
  let accRateList = [],
    prePathList = [];
  accRateList[start] = 1; // 第 i 个元素表示起点到 点i 的累计概率
  prePathList[start] = 0;

  while (queue.length) {
    let lastIdx = queue.shift();
    for (let i = 0; i < toList[lastIdx].length; i++) {
      const targetIndex = toList[lastIdx][i];
      const accRate = rateList[lastIdx][i] * accRateList[lastIdx];
      if (!accRateList[targetIndex] || accRate > accRateList[targetIndex]) {
        accRateList[targetIndex] = accRate;
        prePathList[targetIndex] = lastIdx;

        // Tips: 可用最大堆；
        let position = queue.length;
        while (position > 0 && accRateList[queue[position - 1]] < accRate) {
          position--;
          if (queue[position] === targetIndex) {
            queue.splice(position, 1);
            continue;
          }
        }
        queue.splice(position, 0, targetIndex);
      }
    }
  }

  // Tips: 可能不存在路径
  return accRateList[end] || 0;
};



maxProbability(
  5,
  [
    [1, 4],
    [2, 4],
    [0, 4],
    [0, 3],
    [0, 2],
    [2, 3],
  ],
  [0.37, 0.17, 0.93, 0.23, 0.39, 0.04],
  3,
  4
); // 0.2139
maxProbability(3, [[0, 1]], [0.5], 0, 2);
maxProbability(
  3,
  [
    [0, 1],
    [1, 2],
    [0, 2],
  ],
  [0.5, 0.5, 0.2],
  0,
  2
);
