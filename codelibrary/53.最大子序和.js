/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], (nums[i] + nums[i - 1]));
    }
    return Math.max(...nums);
};
// @lc code=end

