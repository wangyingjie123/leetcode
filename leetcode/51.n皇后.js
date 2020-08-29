/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    // 回溯 + 剪枝
    let res = [];
    dfs();
    function dfs(sub = [], row = 0) {
        if (row === n) {
            // sub: [1, 3, 0 2]
            res.push(sub.map(i => '.'.repeat(i) + 'Q' + '.'.repeat(n - i - 1)));
        }
        // 遍历每一行
        for (let i = 0; i < n; i++) {
            // 坐标点为(row, i)表示这个点是否可以放皇后
            // v: 列，j: 行
            // sub里面是皇后的坐标 sub: [1, 3, 0 2]
            if (!sub.some((v, j) => (
                // 列
                v === i
                // 撇
                || row - v === j - i
                // 捺
                || j - row === v - i))) {
                    sub.push(i);
                    dfs(sub, row + 1);
                    sub.pop();
            }
        }
    }
    return res;
};
// @lc code=end

