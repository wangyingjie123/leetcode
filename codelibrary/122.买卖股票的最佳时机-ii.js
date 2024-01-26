/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// 贪心算法，每天>0再往总和加
var maxProfit = function(prices) {
    let profit = 0;
    let temp = 0;
    for (let i = 1; i < prices.length; i++) {
        temp = prices[i] - prices[i - 1];
        if (temp > 0) {
            profit += temp;
        }
    }
    return profit
};
// @lc code=end

