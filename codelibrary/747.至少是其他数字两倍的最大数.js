/*
 * @lc app=leetcode.cn id=747 lang=javascript
 *
 * [747] 至少是其他数字两倍的最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 1、设置first、second
// 判断nums[i] > first,
var dominantIndex = function(nums) {
    var first = - Infinity, second = - Infinity;
    var index = 0;
    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] > first) {
            second = first;
            first = nums[i];
            index = i;
        } else if (nums[i] > second) {
            second = nums[i]
        }
    }
    return first >= second * 2 ? index : -1;
};
// @lc code=end

