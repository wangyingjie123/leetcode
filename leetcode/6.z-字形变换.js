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
// v字形走位，一个v有n = numRows * 2 - 2个元素
// x = i % n
// x < numRows,x对应行号
// x >= numRows, n - x对应行号
// 例如：
var convert = function(s, numRows) {
    if (numRows === 1) return s;
    let arr = new Array(numRows).fill("");
    let n = numRows * 2 - 2; // 循环周期
    for (let i = 0; i < s.length; i++) {
        let x = i % n;
        arr[x < numRows ? x : n - x] += s[i];
    }
    return arr.join('');
};
// @lc code=end

