/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res = [];
    nums = nums.sort((a, b) => a - b);
    cal(nums, 0, res);
    return res; 
};
function cal(nums, first, res) {
    if (nums.length === first) {
        res.push([...nums]);
        return;
    }
    const map = new Map();
    for (let i = first; i < nums.length; i++) {
        if (!map.get(nums[i])) {
            map.set(nums[i], true);
            swap(nums, first, i);
            cal(nums, first + 1, res);
            swap(nums, first, i);
        }
    }
}
var swap = function(nums, i, j) {
    if (i === j)
        return;
    const t = nums[i];
    nums[i] = nums[j];
    nums[j] = t;
};
// @lc code=end

