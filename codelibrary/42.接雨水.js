/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// 方法一：动态编程
// var trap = function(height) {
//     if (!height || height.length <= 1) return 0;
//     let res = 0;
//     let len = height.length;
//     let leftMax = [height[0]];
//     let rightMax = [height[len - 1]];
//     for (let i = 1; i < len; i++) {
//         leftMax.push(Math.max(height[i], leftMax[i-1]));
//         rightMax.push(Math.max(height[len - 1 - i], rightMax[i - 1]));
//     }
//     console.log(leftMax, rightMax);
//     for (let i = 0; i < len; i++) {
//         res += Math.min(leftMax[i], rightMax[len - 1 - i]) - height[i];
//     }
//     return res;
// };
// 方法二，双指针
var trap = function (height) {
  let left = 0,
    right = height.length - 1,
    leftMax = 0,
    rightMax = 0,
    total = 0;
  while (left <= right) {
    if (height[left] < height[right]) {
      height[left] < leftMax
        ? (total += leftMax - height[left])
        : (leftMax = height[left]);
      left++;
    } else {
      height[right] < rightMax
        ? (total += rightMax - height[right])
        : (rightMax = height[right]);
      right--;
    }
  }
  return total;
};
// @lc code=end
