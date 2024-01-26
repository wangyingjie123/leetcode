/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  const diff = sum - target;
  if (diff < 0 || diff % 2 !== 0) {
    return 0;
  }
  const len = nums.length;
  const neg = diff / 2;
  const dp = new Array(len + 1).fill(0).map(() => new Array(neg + 1).fill(0));
  // dp[i][j] 表示nums的前i个数，凑成和为j的方案数
  dp[0][0] = 1;
  for (let i = 1; i <= len; i++) {
    const num = nums[i - 1];
    for (let j = 0; j <= neg; j++) {
      dp[i][j] = dp[i - 1][j];
      if (j >= num) {
        dp[i][j] += dp[i - 1][j - num];
      }
    }
  }
  return dp[len][neg];
};
// @lc code=end
