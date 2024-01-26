/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    var n = obstacleGrid.length; // 多少行
    var m = obstacleGrid[0].length; // 多少列
    var res = new Array(m).fill(0);
    res[0] = 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0;j < m; j++) {
            if (obstacleGrid[i][j] === 1) {
                res[j] = 0
            } else if (j > 0) {
                res[j] += res[j - 1]
            }
        }
    }
    return res[m - 1];
};
// @lc code=end

