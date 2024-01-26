/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 1、先二分找出目标数所在的数组
// 2、二分查找上一步数组
var searchMatrix = function(matrix, target) {
    if(!matrix.length || !matrix[0].length) return false; // [[]], []这两种意外
    const col = matrix[0].length, row = matrix.length;
    let left = 0, right = row - 1;
    while(left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (matrix[mid][col - 1] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    const rowArr = matrix[left];
    if(!rowArr) return false;
    left = 0;
    right = col - 1;
    while(left <= right) {
        const mid = (left + right) >> 1;
        if (rowArr[mid] === target) {
            return true
        } else if (rowArr[mid] < target) {
            left = mid + 1;
        } else if (rowArr[mid] > target) {
            right = mid - 1;
        }
    }
    return false;
};
// @lc code=end

