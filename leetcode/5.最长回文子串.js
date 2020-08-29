/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 状态转移方程：dp[i][j] = s[i] === s[j] && (dp[i + 1][j - 1] || j - i < 2)
// 思路：1、一个字符串是回文字符串的话首位字母相等，（里面的子串也是一个回文字符串或者里面子串的长度为1或0）
// 2、不断缩小子串去掉首尾，重新进行状态转移
var longestPalindrome = function(s) {
    let len = s.length;
    let res = '';
    let dp = Array.from(new Array(len), () => new Array(len).fill(0));
    for (let i = len - 1; i >= 0; i--) {
        for (let j = i; j < len; j++) {
            dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i + 1][j - 1]);
            if (dp[i][j] && j - i + 1 > res.length) {
                res = s.substring(i, j + 1)
            }
        }
    }
    return res;
};
// @lc code=end

