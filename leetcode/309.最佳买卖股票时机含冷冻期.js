/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 * @method 学习状态法
 */
var maxProfit = function(prices) {
    let rest = 0; // 休息
    let sold = 0; // 出售
    let hold = -Infinity; // 未持有
    for (const v of prices) {
        let preSold = sold;
        let preHold = hold;
        hold = Math.max(preHold, rest - v);
        sold = preHold + v;
        rest = Math.max(rest, preSold);
    }
    return Math.max(rest, sold);
};
// @lc code=end

