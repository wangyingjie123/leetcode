/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 思路：小于0的往左放，大于1的往右放
var sortColors = function(nums) {
    let left = 0; // 记录等于0的元素位置
    let right = nums.length - 1; // 记录等于2的元素位置
    let cur = 0; // 遍历当前元素位置
    while (cur <= right) {
        if (nums[cur] === 1) {
            cur++;
        } else if (nums[cur] === 0) {
            [nums[left], nums[cur]] = [nums[cur], nums[left]];
            left++;
            cur++;
        } else if (nums[cur] === 2) {
            [nums[cur], nums[right]] = [nums[right], nums[cur]];
            right--;
        }
    }
    return nums;
};
// @lc code=end

