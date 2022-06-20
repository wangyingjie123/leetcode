/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const res = [];
  const stack = [];
  dfs(nums, stack);
  return res;
  function dfs(nums, stack) {
    if (stack.length === nums.length) {
      res.push(stack.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (stack.includes(nums[i])) {
        continue;
      }
      stack.push(nums[i]);
      dfs(nums, stack);
      stack.pop();
    }
  }
};
// @lc code=end

