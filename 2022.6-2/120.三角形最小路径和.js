/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  const n = triangle.length;
  if (n === 1) {
    return triangle[0][0];
  }
  let dp = triangle[n - 1];
  for (let i = n - 2; i >=0; i--) {
    for (let j = 0; j < i + 1; j++) {
      dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
    }
  }
  return dp[0];
};
// @lc code=end

