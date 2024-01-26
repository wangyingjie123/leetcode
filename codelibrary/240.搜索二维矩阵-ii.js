/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * @methods 从左下角开始查找，小于目标值行-1，大于目标值列+1
 */
var searchMatrix = function(matrix, target) {
    let row = matrix.length - 1;
    let col = 0;
    while(row >= 0 && col < matrix[0].length) {
        if (matrix[row][col] > target) {
            row--;
        } else if (matrix[row][col] < target) {
            col++;
        } else { // found
            return true;
        }
    }
    return false;
};
// @lc code=end

