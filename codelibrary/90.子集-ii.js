/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  // 1. 回溯 (88 ms 40.1 MB)(97.78% 88.89%)
  const ans = [];
  const n = nums.length;
  nums.sort((a, b) => a - b);
  const backtrack = (i, tmp) => {
    ans.push(tmp);
    for (let j = i; j < n; j++) {
      if (j > i && nums[j] === nums[j - 1]) continue; // 去重
      backtrack(j + 1, [...tmp, nums[j]]); // 选择当前数
    }
  };
  backtrack(0, []);
  return ans;
};
// @lc code=end
