/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    if (k === 0) return 0;
    const dp = [];
    for (let j = 0; j < k; j++) {
        dp[j] = [];
        dp[j][0] = -Infinity;
        dp[j][1] = -Infinity;
    }
    // eg: k = 2
    // dp[
    //     [-Infinity, -Infinity],
    //     [-Infinity, -Infinity],
    // ]
    console.log(dp);
    for (let i = 0; i < prices.length; i++) {
        const cur = prices[i];
        for (let j = k - 1; j >= 1; j--) {
            // 当前买入 + 之前卖出剩下的钱
            dp[j][0] = Math.max(dp[j][0], cur + dp[j][1]);
            // 当前买入 + 之前卖出获得的钱
            dp[j][1] = Math.max(dp[j][1], dp[j - 1][0] - cur);
        }
        // 只交易一次
        dp[0][0] = Math.max(dp[0][0], cur + dp[0][1]);
        dp[0][1] = Math.max(dp[0][1], -cur);
    }
    let max = 0;
    for (let i = 0; i < k; i++) {
        max = Math.max(dp[i][0], max);
    }

    return max;
};
// @lc code=end

