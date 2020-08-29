/*
 * @lc app=leetcode.cn id=523 lang=javascript
 *
 * [523] 连续的子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// 整体的思路就是，如果前面的和的余数和当前数的余数相等，就说明前面的值去掉了 这个数就是 k 值的整数倍。
var checkSubarraySum = function(nums, k) {
    let map = new Map();
    map.set(0, -1); 
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (k != 0) {
            sum = sum % k
        }
        if (map.has(sum)) {
            if (i - map.get(sum) > 1) {
                return true;
            }
        } else {
            map.set(sum, i);
        }
    }
    return false
};
// @lc code=end

