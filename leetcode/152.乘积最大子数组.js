/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = nums[0],
    imax = 1, imin = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            [imax, imin] = [imin, imax];
        }
        imax = Math.max(imax * nums[i], nums[i]);
        imin = Math.min(imin * nums[i], nums[i]);
        max = Math.max(max, imax);
    }
    return max;
};
// @lc code=end

