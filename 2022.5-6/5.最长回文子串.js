l/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let res = '';
  const len = s.length;
  const dp = Array.from(new Array(len), () => new Array(len).fill(0));
  for (let i = len - 1; i >= 0; i--) {
    for (let j = i; j < len; j++) {
      // 状态转移方程：两边字母相等并且里面的长度小于2或者里面子串也是回文子串
      dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1]);
      if (dp[i][j] && j - i + 1 > res.length) {
        res = s.substring(i, j + 1);
      }
    }
  }
  return res;
};
// @lc code=end

