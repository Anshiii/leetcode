/* 
把一个数组最开始的若干个元素搬到数组的末尾，
我们称之为数组的旋转。
输入一个递增排序的数组的一个旋转，
输出旋转数组的最小元素。
例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  

示例 1：

输入：[3,4,5,1,2]
输出：1
示例 2：

输入：[2,2,2,0,1]
输出：0

输入：[5,3,2,0]
输出：0

输入：[5,1,2,3,4]
输出：0


输入：[1]
输出：1

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
  let len = numbers.length,
    left = 0,
    right = len - 1;

  /* 为什么使用 right 做比较，
  针对 right，有最小数的右边 小于 right 最小数的左边 大于 right ；
    left而言，最小数的左边 大于 left，最小数的右边 小于 left 。
    那不是一样吗。。。
    
    */
  /* 这里又不用 = 号了 */
  while (left < right) {
    let mid = left + Math.floor((right - left) * 0.5);
    if (numbers[mid] > numbers[left]) {
      left = mid + 1;
    } else if (numbers[mid] < numbers[left]) {
      right = mid;
    } else {
      right--;
    }
  }
  console.log(numbers[left], left, right);
};

var minArray2 = function (numbers) {
  let low = 0;
  let high = numbers.length - 1;
  while (low < high) {
    const pivot = low + Math.floor((high - low) / 2);
    if (numbers[pivot] < numbers[high]) {
      high = pivot;
    } else if (numbers[pivot] > numbers[high]) {
      low = pivot + 1;
    } else {
      high -= 1;
    }
  }
  console.log(numbers[low], low, high);

  return numbers[low];
};

minArray([3, 4, 5, 1, 2]); //1
minArray([2, 2, 2, 0, 1]); //0
minArray([1, 2, 3, 4, 5]); //1
minArray([5, 1, 2, 3, 4]); //1
minArray([1]); //1

console.log("-----");
minArray2([3, 4, 5, 1, 2]); //1
minArray2([2, 2, 2, 0, 1]); //0
minArray2([1, 2, 3, 4, 5]); //1
minArray2([5, 1, 2, 3, 4]); //1
minArray2([1]); //1
