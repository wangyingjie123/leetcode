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
var permute = function (nums) {
  const path = [];
  const res = [];
  const used = new Array(nums.length).fill(false);
  const backtrack = (nums, used) => {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      path.push(nums[i]);
      backtrack(nums, used);
      path.pop();
      used[i] = false;
    }
  };
  backtrack(nums, used);
  return res;
};
// @lc code=end
