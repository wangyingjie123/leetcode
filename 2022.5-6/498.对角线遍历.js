/*
 * @lc app=leetcode.cn id=498 lang=javascript
 *
 * [498] 对角线遍历
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
  const m = mat.length;
  const n = mat[0].length;
  let pos = 0;
  const res = Array.from(new Array(m * n).fill(0));
  // i是 [1,2,3,6,5,3,7,8,9]这样的顺序;
  for (let i = 0; i < m + n - 1; i++) {
    // 奇数行，从上往下遍历
    if (i % 2 === 1) {
      // 起点位置
      let x = i < n ? 0 : i - n + 1;
      let y = i < n ? i : n - 1;
      while (x < m && y >= 0) {
        res[pos] = mat[y][x];
        pos++;
        x++;
        y--;
      }
    } else {
      // 偶数行，从下往上遍历
      let x = i < m ? i : m - 1;
      let y = i < m ? 0 : i - m + 1;
      while (x >= 0 && y < n) {
        res[pos] = mat[x][y];
        pos++;
        x--;
        y++;
      }
    }
    return res;
  }  
};
// @lc code=end

