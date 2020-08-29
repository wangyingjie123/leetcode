/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let col = new Map(); // 列
    let box = new Map(); // 3 * 3小方格
    // 0 1 2
    // 3 4 5
    // 6 7 8
    for (let i = 0; i < 9; i++) {
        let row = board[i];
        for (let j = 0; j < 9; j++) {
            const item = board[i][j];
            if (item !== '.') {
                let k = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if (row.indexOf(item) !== j
                || col.get(`${j}-${item}`)
                || box.get(`${k}-${item}`)
                ) {
                    return false;
                }
                col.set(`${j}-${item}`, true);
                box.set(`${k}-${item}`, true);
            }
        }
    }
    return true;
};
// @lc code=end

