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
    let i = 0; // 横向走
    let j = 0; // 纵向
    let res = [];
    let n = matrix.length - 1;
    if (n < 0) return [];
    let m = matrix[0].length - 1;
    var turn = m == 0 ? 'down' : 'right'; // 方向
    var boundl = 0; // 左顶点
    var boundr = m; // 右顶点
    var boundu = 0; // 左下
    var boundd = n; // 右下
    for (let a = 0; a < (m + 1) * (n + 1); a++) {
        res.push(matrix[i][j]);
        if (turn === 'right') {
            j++; // 向右走
            if (j === boundr) {
                boundu++; // 
                turn = 'down'; // 开始向下拐弯
            }
        } else if (turn === 'down') {
            // 向下走
            i++;
            if (i === boundd) { // 顶到头拐弯
                boundr--;
                turn = 'left'; // 开始向左拐弯
            }
        } else if (turn === 'left') {
            j--;
            if (j === boundl) {
                boundd--;
                turn = 'up'; // 向上拐弯
            }
        } else if (turn === 'up') {
            i--;
            if (i === boundu) {
                boundl++;
                turn = 'right';
            }
        }
    }
    return res;
};
// @lc code=end

