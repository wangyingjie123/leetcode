/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    let left = 0;
    let right = res.length - 1;
    while (left <= right) {
      const mid = left + right >> 1;
      if (res[mid] >= nums[i]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    res[left] = nums[i];
  }
  return res.length;
};
// @lc code=end

