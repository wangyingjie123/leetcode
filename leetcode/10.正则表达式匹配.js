/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    // p长于s,*a匹配''
    let m = s.length, n = p.length;
    let dp = Array.from(new Array(m + 1), () => new Array(n + 1).fill(false));
    dp[0][0] = true;
    // 第一行状态转移
    for (let i = 0; i < n; i++) {
        if (p.charAt(i) === '*') {
            dp[0][i + 1] = dp[0][i - 1];
        }
    }
    // console.log(dp);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 状态转移方程
            if (p.charAt(j) === '.') {
                dp[i + 1][j + 1] = dp[i][j]
            }

            if (p.charAt(j) === s.charAt(i)) {
                dp[i + 1][j + 1] = dp[i][j]
            }

            if (p.charAt(j) === '*') {
                if (p.charAt(j - 1) !== s.charAt(i) && p.charAt(j - 1) !== '.') {
                    dp[i + 1][j + 1] = dp[i + 1][j - 1]
                } else {
                    dp[i + 1][j + 1] = (dp[i + 1][j] || dp[i][j + 1] || dp[i + 1][j - 1])
                }
            }
        }
    }
    return dp[m][n];
};
// @lc code=end

