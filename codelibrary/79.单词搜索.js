/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

const { finished } = require("stream");

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    // 回溯算法，上下左右搜索
    if (board.length === 0) return false;
    const row = board.length;
    const col = board[0].length;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (find({
                i, j, row, col, word, board, cur: 0
            })) return true
        }
    }
    return false;
};
function find(obj) {
    const {
        i, j, row, col, word, board, cur
    } = obj;
    if (i < 0 || i >= row ||  j < 0 || j >= col || board[i][j] !== word[cur]) {
        return false;
    }
    const now = board[i][j];
    // 查找到了最后一位，返回true;
    if (cur === word.length - 1) return true;
    board[i][j] = null;
    // 当前位置上下左右查找
    const res = find({
        i: i + 1, j, row, col, word, board, cur: cur + 1
    }) || find({
        i: i - 1, j, row, col, word, board, cur: cur + 1
    }) || find({
        i, j: j + 1, row, col, word, board, cur: cur + 1
    }) || find({
        i, j: j - 1, row, col, word, board, cur: cur + 1
    })
    // 还原
    board[i][j] = now;
    return res;
}
// @lc code=end

