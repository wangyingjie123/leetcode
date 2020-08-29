/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x === 0) return x;
    let neg = x / Math.abs(x);
    x = Math.abs(x);
    let res = 0;
    while(x > 0) {
        const temp = x % 10;
        res = res * 10 + temp;
        if (res > 0x7FFFFFFF) {
            return 0;
        }
        x = Math.floor(x / 10);
    }
    return neg * res;
};
// @lc code=end

