/* 


若拼接字符串 x + y > y + xx+y>y+x ，则 xx “大于” yy ；
反之，若 x + y < y + xx+y<y+x ，则 xx “小于” yy ；

没理解到。

字符串 xy < yx , yz < zy ，需证明 xz < zx 一定成立。

设十进制数 x, y, z 分别有 a, b, c 位，则有：
（左边是字符串拼接，右边是十进制数计算，两者等价）
xy = x * 10^b + y 
yx = y * 10^a + x

则 xy < yx 可转化为：
x * 10^b + y < y * 10^a + x
x (10^b - 1) < y (10^a - 1)
x / (10^a - 1) < y / (10^b - 1)     ①

同理， 可将 yz < zy 转化为：
y / (10^b - 1) < z / (10^c - 1)     ②

将 ① ② 合并，整理得：
x / (10^a - 1) < y / (10^b - 1) < z / (10^c - 1)
x / (10^a - 1) < z / (10^c - 1)
x (10^c - 1) < z (10^a - 1)
x * 10^c + z < z * 10^a + x
∴  可推出 xz < zx ，传递性证毕

作者：jyd
链接：https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/solution/mian-shi-ti-45-ba-shu-zu-pai-cheng-zui-xiao-de-s-4/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


没想通怎么自定义哈哈哈 
*/

/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
  return nums.sort((a, b) => Number("" + a + b) - Number("" + b + a)).join('')
};

console.log(minNumber([3,30,34,5,9]));