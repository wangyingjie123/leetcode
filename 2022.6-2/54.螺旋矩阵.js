/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const res = [];
  if (matrix.length === 0) return res;
  const rows = matrix.length - 1;
  const cols = matrix[0].length - 1;
  let top = 0;
  let bottom = rows;
  let left = 0;
  let right = cols;
  while (top <= bottom && left <= right) {
    // 从左到右
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    if (++top > bottom) break;
    // 从上到下
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    if (--right < left) break;
    // 从右到左
    for (let i = right; i >= left; i--) {
      res.push(matrix[bottom][i]);
    }
    if (--bottom < top) break;
    // 从下到上
    for (let i = bottom; i >= top; i--) {
      res.push(matrix[i][left]);
    }
    if (++left > right) break;
  }
  return res;
};
// @lc code=end

