/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  // 一定能找到结果吗
  // 设 每小时吃 k 根， k 的取值范围是 min piles[i] ~ max pilessk[i]
  let min = 1,
    max = piles[0];
  for (let i = 0; i < piles.length; i++) {
    const cur = piles[i];
    // min = min<cur ? min : cur
    max = max > cur ? max : cur;
  }

  let caches = {};
  function calculate(count) {
    if (caches[count]) return caches[count];
    let result = 0;
    for (let i = 0; i < piles.length; i++) {
      const cur = piles[i];
      result += Math.ceil(cur / count);
    }
    caches[count] = result;
    return result;
  }

  // 避免全是 <= 达不到返回的条件
  if (calculate(1) <= h) return 1;

  while (min <= max) {
    let mid = min + Math.ceil((max - min) / 2);
    const res = calculate(mid);
    if (res > h) {
      if (calculate(mid + 1) <= h) {
        return mid + 1;
      }
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
};

console.log(minEatingSpeed([312884470], 968709470)); //30
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)); //30
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6)); //23
