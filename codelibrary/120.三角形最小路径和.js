/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    // 将最后一行放进去
    let min = triangle[triangle.length - 1];
    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length;j++) {
            // 表示前一行第j个加下一行（正下方或斜下方）最小的一个
            min[j] = triangle[i][j] + Math.min(min[j], min[j + 1]);
        }
    }
    return min[0];
};
// @lc code=end

