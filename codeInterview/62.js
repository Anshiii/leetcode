/* 
0,1,···,n-1这n个数字排成一个圆圈，
从数字0开始，每次从这个圆圈里删除第m个数字（删除后从下一个数字开始计数）。
求出这个圆圈里剩下的最后一个数字。

例如，0、1、2、3、4这5个数字组成一个圆圈，从数字0开始每次删除第3个数字，则删除的前4个数字依次是2、0、4、1，因此最后剩下的数字是3。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


从 n-1.m  推  n

n-1 个数，删第 m 个数字,设被删的数的值为 y = f(n,m)
第一次删除时 f(n,m) = m%n，设 t = m%n
删除后的数字从 t 开始计数，变为       t+1,...0,1,2,...,t-1
第二次删除的数字则为 (m-1)%n = m%n -1 = t -1 => 2t

*/


/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
 var lastRemaining = function(n, m) {
    
};