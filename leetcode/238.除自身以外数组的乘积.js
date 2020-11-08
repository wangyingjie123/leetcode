/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let len = nums.length;
    let res = new Array(len);
    let R = 1;
    res[len - 1] = 1;
    for (let i = len - 2; i >= 0; i--) {
        res[i] = nums[i + 1] * res[i + 1];
    }
    for (let i = 0; i < len; i++) {
        R = i === 0 ? 1 : nums[i - 1] * R;
        res[i] = res[i] * R;
    }
    return res;
};
// @lc code=end

