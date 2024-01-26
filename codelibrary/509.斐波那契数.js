/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
// var fib = function(N) {
//     if (N < 2) return N;
//     for (var A = 0, B = 1, i = 2; i <= N; i++) {
//         [A, B] = [B, A + B]
//     }
//     return B;
// };
// var fib = function(n) {
//     if (n < 2) return n;
//     var sqrt5 = Math.sqrt(5);
//     var nums = Math.pow((1 + sqrt5) / 2, n) + Math.pow((1 - sqrt5) / 2, n);
//     return nums / sqrt5;
// };
var fib = function (n) {
    let dp = [];
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};
// @lc code=end

