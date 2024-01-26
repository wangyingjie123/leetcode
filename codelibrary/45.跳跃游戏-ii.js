/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let end = 0; // 当前能到达的最大下标位置
  let maxPosition = 0; // 能跳到的最远距离
  let steps = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    // 找能跳的最远的
    maxPosition = Math.max(maxPosition, nums[i] + i);
    if (i === end) {
      // 遇到边界，就更新边界，并且步数加一
      end = maxPosition;
      steps++;
    }
  }
  return steps;
};
// @lc code=end
