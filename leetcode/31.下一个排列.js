/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

const { reverse } = require("dns");

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    nums.sort((a, b) => a - b);
    swap(nums, -1);
};
function swap(nums, l) {
    let first = l, second = 0;
    // 从右侧开始找出第一个比右值小的数字
    // [i] < nums[i + 1];
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            first = i;
            break;
        }
    }
    // 2.2 从 first 右侧开始查找比 first 大，但是相差最小的数字
    second = first;
    let min = Infinity;
    for (let i = first + l; i < nums.length; i++) {
        const sub = nums[i] - nums[first];
        if (sub > 0 && sub < min) {
            min = sub;
            second = i;
        }
    }
    // 2.3交换first和second
    [nums[first], nums[second]] = [nums[second], nums[first]];
    // 2.4 将 first 之后的数组按升序排序
    nums = nums.slice(0, first + 1).concat(nums.slice(first + 1, nums.length).sort((a, b) => a - b));
    // 继续上面的循环直至剩余数组为升序排序
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < nums[i + 1]) {
            swap(nums, -1);
            break;
        }
    }
    return;
}
// @lc code=end

