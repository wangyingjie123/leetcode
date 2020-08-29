/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let len = nums.length;
    let left = 0, right = len - 1;
    let res = len;
    while(left <= right) {
        let mid = (left + right) >> 1;
        if (target <= nums[mid]) {
            res = mid;
            right = mid - 1
        } else if (target > nums[mid]) {
            left = mid + 1
        }
    }
    return res;
};
// @lc code=end

