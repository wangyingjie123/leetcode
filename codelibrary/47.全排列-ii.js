/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @link https://leetcode.cn/problems/permutations-ii/solutions/2363888/47-quan-pai-lie-iihui-su-qing-xi-tu-jie-7ry7t/
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const res = [];
  const backtrack = (x) => {
    if (x === nums.length - 1) {
      res.push([...nums]);
      return;
    }
    const dic = new Set();
    for (let i = x; i < nums.length; i++) {
      if (dic.has(nums[i])) continue;
      dic.add(nums[i]);
      [nums[i], nums[x]] = [nums[x], nums[i]]; // 交换，将 nums[i] 固定在第 x 位
      backtrack(x + 1); // 开启固定第 x + 1 位元素
      [nums[i], nums[x]] = [nums[x], nums[i]]; // 恢复交换
    }
  };

  backtrack(0);
  return res;
};
// @lc code=end
