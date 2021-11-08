/* 
剑指 Offer II 069. 山峰数组的顶部
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
    // 实际上 峰值因为题目设定，必不可能出现在边界，所以查找时 只需从 1 ~ n-2 之间即可
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    let mid = left + Math.ceil((right - left) / 2);
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return mid;
    } else if (arr[mid] > arr[mid - 1] && arr[mid] < arr[mid + 1]) {
      // 上坡
      left = mid + 1;
    } else if (arr[mid] < arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      // 下坡
      right = mid - 1;
    }
  }
};

console.log(peakIndexInMountainArray([1, 3, 5, 4, 2]));
console.log(peakIndexInMountainArray([0,10,5,2]));
console.log(peakIndexInMountainArray([24,69,100,99,79,78,67,36,26,19]));
