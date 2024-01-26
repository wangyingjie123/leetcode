/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
// 思路：深度优先搜索
var numIslands = function(grid) {
    let row = grid.length;
    if (row === 0) return 0;
    let col = grid[0].length;
    let res = 0;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === '1') {
                // 启动深度优先搜索, 每次结果加一
                dfs(grid, i, j, row, col);
                res++;
            }
        }
    }
    return res;
};
function dfs(grid, i, j, row, col) {
    if (i < 0 || i > row - 1 || j < 0 || j > col - 1 || grid[i][j] === '0') {
        return;
    }
    grid[i][j] = '0';
    // 递归上下左右
    dfs(grid, i + 1, j, row, col);
    dfs(grid, i, j + 1, row, col);
    dfs(grid, i - 1, j, row, col);
    dfs(grid, i, j - 1, row, col);
}
// @lc code=end

