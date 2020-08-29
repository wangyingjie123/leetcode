/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // 先沿对角线旋转
    let n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            // [i][j] = [n - j - 1][n - i - 1];
            [matrix[i][j], matrix[n - j - 1][n - i - 1]] = [matrix[n - j - 1][n - i - 1], matrix[i][j]]
        }
    }
    // 沿水平线旋转
    for (let i = 0; i < n / 2; i++) {
        for (let j = 0; j < n; j++) {
            [matrix[i][j], matrix[n - 1 - i][j]] = [matrix[n - i - 1][j], matrix[i][j]];
        }
    }
    return matrix;
};
// @lc code=end

