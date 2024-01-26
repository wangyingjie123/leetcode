/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let nums = n * n;
    let left = 0, right = n - 1, top = 0, bottom = n - 1;
    let res =  Array.from(new Array(n), () => new Array(n));
    let start = 1;
    while(start <= nums) {
        // 从左上角到右上角
        for (let i = left; i <= right; i++) {
            res[top][i] = start++;
        }
        top++;
        for (let j = top; j <= bottom; j++) {
            res[j][right] = start++;
        }
        right--;
        for (let k = right; k >= left; k--) {
            res[bottom][k] = start++;
        }
        bottom--;
        for (let l = bottom; l >= top; l--) {
            res[l][left] = start++;
        }
        left++;
    }
    return res;
};
// @lc code=end

