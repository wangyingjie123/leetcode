/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let n = nums.length;
    if (n === 0) {
        return 0;
    }
    let res = Number.MAX_SAFE_INTEGER;
    let start = 0, end = 0;
    let sum = 0;
    while(end < n) {
        sum+= nums[end];
        while(sum >= s) {
            res = Math.min(res, end - start + 1);
            sum -= nums[start];
            start++;
        }
        end++;
    }
    return res === Number.MAX_SAFE_INTEGER ? 0 : res;
};
// @lc code=end

