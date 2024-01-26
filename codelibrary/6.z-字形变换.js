/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (!s || numRows < 2) return s;
  const res = new Array(numRows).fill("");
  let i = 0;
  let flag = -1;
  for (const c of s) {
    res[i] += c;
    if (i === 0 || i === numRows - 1) flag = -flag;
    i += flag;
  }
  return res.join("");
};
console.log(convert("PAYPALISHIRING", 3));
// @lc code=end
