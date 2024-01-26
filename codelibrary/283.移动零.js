/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var index = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            index ++;
        } else {
            nums[i - index] = nums[i];
            nums[i] = 0
        }
    }
};
// @lc code=end
// 

