/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  //   if (cost.length < 2) {
  //     return cost[i];
  //   }
  let result,
    last = 0,
    llast = 0;

  for (let i = 2; i <= cost.length; i++) {
    result = Math.min(last + cost[i - 1], llast + cost[i - 2]);
    llast = last;
    last = result;
  }
  return result;
};

console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
