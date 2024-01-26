/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 * @method：dp动态规划
 */
// var numSquares = function(n) {
//     const dp = Array.from(new Array(n + 1)).fill(0);
//     for (let i = 1; i <= n; i++) {
//         dp[i] = i;
//         for (let j = 1; i - j * j >= 0; j++) {
//             dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
//         }
//     }
//     return dp[n];
// };
/**
 * @param {number} n
 * @return {number}
 * @method：拉格朗日四平方和定理，也称为 Bachet 猜想，它指出每个自然数都可以表示为四个整数平方和
 */
var numSquares = function(n) {
    let max = Math.floor(Math.sqrt(n));
    while(n % 4 === 0) {
        n /= 4;
    }
    if (n % 8 === 7) {
        return 4;
    }
    let a = 0;
    while(a * a <= n) {
        let b = Math.floor(Math.sqrt((n - a * a)));
        if (a * a + b * b ===n) {
            return !!a + !!b; // 可输出a + b个数
        }
        a += 1;
    }
    return 3;
}
// @lc code=end

