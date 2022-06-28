/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const m = word1.length;
  const n = word2.length;
  const dp = new Array(n + 1);
  for (let i = 0; i <= n; i++) {
    dp[i] = i;
  }
  let temp;
  
};
// @lc code=end

