/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var max = 0;
    for (var i = 0, j = height.length - 1; i < j;) {
        var minHeight = height[i] < height[j] ? height[i ++] : height[j--];
        var area = (j - i + 1) * minHeight;
        max = Math.max(max, area);
    }
    return max;
};
// @lc code=end

