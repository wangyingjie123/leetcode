/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if(!amount) return 0;
  let max = Number.MAX_SAFE_INTEGER;
  const dp = new Array(amount + 1).fill(max);
  dp[0] = 0;
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      // dp[j]表示组成金额 j 所需最少的硬币数量
      dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
    }
  }
  return dp[amount] === max ? -1 : dp[amount];
};
// @lc code=end

