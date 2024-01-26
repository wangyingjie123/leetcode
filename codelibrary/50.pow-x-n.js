/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n < 0) return 1 / myPow(x, -n);
    let res = 1;
    for (let i = n; i >= 1; i >>>= 1) {
        if (i & 1) res *= x;
        if (i > 1) x *= x;
    }
    return res;
};
// myPow(2, 5);
// @lc code=end

