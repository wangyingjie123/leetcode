/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            res = nums[i];
        }
        res === nums[i] ? count++ : count--;
    }
    return res;
};
// @lc code=end

