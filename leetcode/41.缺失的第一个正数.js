/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    /**
     * 1、将数组置换变成[1,..., N]这样格式
     * 置换方法：x = nums[i],x < [1, N],x应当出现在x- 1的位置，因此交换nums[i]和nums[x - 1]
     * nums[i]恰好与nums[x - 1]相等，会无限循环下去，因此加判断条件nums[nums[i] - 1] !== nums[i]
     */
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        while(nums[i] > 0 && nums[i] <= len && nums[nums[i] - 1] !== nums[i]) {
            let temp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = temp;
        }
    }
    for (let i = 0; i < len; i++) {
        if (nums[i] !== i + 1) {
            return i + 1
        }
    }
    return len + 1
};
// @lc code=end

