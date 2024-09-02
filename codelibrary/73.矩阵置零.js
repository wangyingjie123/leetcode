/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const m = matrix.length,
    n = matrix[0].length;
  const row = new Array(m).fill(false),
    col = new Array(n).fill(false);
  // step1: 遍历矩阵，记录0所在的行和列
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        row[i] = true;
        col[j] = true;
      }
    }
  }
  // step2: 遍历矩阵，将0所在的行和列置为0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (row[i] || col[j]) {
        matrix[i][j] = 0;
      }
    }
  }
};
// @lc code=end
