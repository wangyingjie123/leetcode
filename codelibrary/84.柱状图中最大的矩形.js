/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
// 其实就是以 i 为中心，分别向左、向右找到第一个小于 heighs[i] 的两个边界，也就是以当前这根 i 柱子所能勾勒出的最大面积。
// var largestRectangleArea = function(heights) {
//     let maxArea = 0;
//     let stack = [];
//     heights = [0, ...heights, 0];
//     for (let i = 0; i < heights.length; i++) {
//         // 找右边界
//         while(stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
//             maxArea = Math.max(maxArea, heights[stack.pop()] * (i - stack[stack.length - 1] - 1));
//         }
//         stack.push(i);
//     }
//     return maxArea;
// };
var largestRectangleArea = function(heights) {
    let maxArea = 0;
    let stack = [];
    heights = [0, ...heights, 0];
    for (let i = 0; i < heights.length; i++) {
        // 找右边界
        while(stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
            let top = heights[stack.pop()];
            let left = stack[stack.length - 1] + 1;
            // right即为i
            maxArea = Math.max(maxArea, top * (i - left))
        }
        stack.push(i);
    }
    return maxArea;
};
// @lc code=end

