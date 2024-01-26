/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // 贪心算法
    if (!nums || nums.length < 2) {
        return true;
    }
    let end = 0;
    let maxPosition = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        maxPosition = Math.max(maxPosition, i + nums[i]);
        if (i === end) {
            if (maxPosition <= end) {
              return false;
            } else {
              end = maxPosition;
            }
        }
    }
    return true;
};
// @lc code=end

