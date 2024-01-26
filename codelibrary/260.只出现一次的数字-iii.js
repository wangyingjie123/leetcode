/*
 * @lc app=leetcode.cn id=260 lang=javascript
 *
 * [260] 只出现一次的数字 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let a = 0, // 保存偶数组
        b = 0, // 保存奇数组
        c = 0; // 保存异或差异
    nums.forEach(item => c ^= item);
    let mark = 1; // 分组凭据
    // 通过异或差异进行分组，找到第一个是1的位
    while((mark & c) === 0) {
        mark <<= 1;
    }
    nums.forEach(item => {
        if ((mark & item) === 0) {
            a ^= item;
        } else {
            b ^= item;
        }
    })
    return [a, b];
};
// @lc code=end

