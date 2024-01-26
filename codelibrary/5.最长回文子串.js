/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @description 动态规划
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let len = s.length;
  let dp = Array.from(new Array(len), () => new Array(len).fill(0));
  let res = "";
  for (let i = len - 1; i >= 0; i--) {
    for (let j = i; j < len; j++) {
      // 状态转移方程：si和sj相等，则去掉首尾后的字符s[i+1]～s[j-1]是回文串 || j-i<2
      dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1]);
      if (dp[i][j] && j - i + 1 > res.length) {
        res = s.substring(i, j + 1);
      }
    }
  }
  return res;
};

/**
 * @description 中心扩散法
 * @param {string} s
 * @return {string}
 */
var longestPalindrome2 = function (s) {
  if (s.length < 2) return s;
  let res = "";
  for (let i = 0; i < s.length; i++) {
    // 回文串长度为奇数
    helper(i, i);
    // 回文串长度为偶数，比如i=1，s[i]=b，s[i+1]=b，此时回文串长度为2
    helper(i, i + 1);
  }
  function helper(m, n) {
    while (m >= 0 && n < s.length && s[m] === s[n]) {
      m--;
      n++;
    }
    if (n - m - 1 > res.length) {
      res = s.substring(m + 1, n);
    }
  }
  return res;
};
// @lc code=end
