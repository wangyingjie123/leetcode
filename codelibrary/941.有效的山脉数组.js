/*
 * @lc app=leetcode.cn id=941 lang=javascript
 *
 * [941] 有效的山脉数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
// 双指针--分别从左和右找到最高点
var validMountainArray = function(A) {
    let i = 0, j = A.length - 1;
    while(i < j) {
        if (A[i] < A[i + 1]) {
            i++;
        } else {
            break;
        }
    }
    while(i < j) {
        if (A[j] < A[j - 1]) {
            j--;
        } else {
            break;
        }
    }
    return i == j && i !== 0 && j !== A.length - 1;
};
// @lc code=end

