/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * 动态规划+回溯算法
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const res = [];
  const path = [];
  const len = s.length;
  const dp = Array.from({ length: len }, () => new Array(len).fill(true));
  for (let i = len - 1; i >= 0; i--) {
    for (let j = i + 1; j < len; j++) {
      dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1];
    }
  }
  const dfs = (start) => {
    if (start === len) {
      res.push([...path]);
      return;
    }
    for (let i = start; i < len; i++) {
      if (dp[start][i]) {
        path.push(s.slice(start, i + 1));
        dfs(i + 1);
        path.pop();
      }
    }
  };
  dfs(0);
  return res;
};
// @lc code=end
