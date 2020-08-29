/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 动态规划，G(i, n) = G(i - 1) * G(n - i)的笛卡尔积
// var numTrees = function(n) {
//    let dp = new Array(n + 1).fill(0);
//    dp[1] = 1;
//    dp[0] = 1;
//    for (let i = 2; i < n + 1; i ++) {
//         for (let j = 1; j < i + 1; j++) {
//             dp[i] += dp[j - 1] * dp[i - j]
//         }
//    }
//    return dp[n]
// };
// 数学公式
// 卡塔兰数更便于计算的定义如下:
// Cn+1 = 2 * (2n+1) * Cn / (n + 2);
var numTrees = function(n) {
    let C = 1;
    for (let i = 0; i < n; i++) {
        C = C * 2 * (2 * i + 1) / (i + 2);
    }
    return C;
};
// @lc code=end

