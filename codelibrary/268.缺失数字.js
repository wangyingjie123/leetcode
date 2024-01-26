/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // nums = nums.sort((a, b) => a - b);
    // for (let i = 0; i < nums.length; i++) {
    //     if (i !== nums[i]) {
    //         return i
    //     }
    // }
    // return nums.length;
    let temp = 0;
    for (let i = 0; i <= nums.length; i++) {
        temp ^= i^nums[i];
    }
    return temp;
};
// @lc code=end

