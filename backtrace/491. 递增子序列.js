/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/**
 * 递增子序列 - 子序列 => 保持顺序且至少两个元素；递增 => 设 i<j,则 ni <= nj
 * nums 存在重复；
 *
 * 1. 枚举 nums
 * 2. 如果子序列 A 符合条件，那 A 的所有子序列都符合条件；找出最长的 A 并不是全局的解，中间可能会有合适的片段。
 * 3. 应该是找出所有连续递增子序列 集合B{}， B 中的每一项找出子序列;在集合 B中寻找合并的解。
 *
 * 4. 列出所有组合，判断每个结果 😂，毕竟结果于预估，对于任意递增序列 和要添加的元素 a,如果 >= 最后一个元素，即符合题意。
 *
 */
var findSubsequences = function (nums) {
  let len = nums.length,
    path = [],
    result = [];
  function dfs(start, last) {
    if (start >= len) {
      if (path.length > 1) {
        result.push([...path]);
      }
      return;
    }
    const cur = nums[start];
    // 只需要添加更大的数
    if (cur >= last) {
      path.push(cur);
      dfs(start + 1, cur);
      path.pop();
    }

    // 舍弃了相同数字里，有一个数选择了，剩下的数还选择的情况 (cur === last 的情况)
    if (cur !== last) {
      dfs(start + 1, last);
    }
  }
  dfs(0, -101);
  return result;
};


findSubsequences([4, 6, 7, 7]);
findSubsequences([1, 2, 5, 3, 4]);
