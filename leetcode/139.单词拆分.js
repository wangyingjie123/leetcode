/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const wordset = new Set(wordDict);
    const memo = new Array(s.length);
    const check = (s, wordset, start, memo) => {
        // 指针越界，结束递归
        if (start > s.length - 1) return true;
        // 有缓存返回缓存
        if (memo[start] !== undefined) return memo[start]; 
        for (let end = start + 1; end <= s.length; end++) {
            let word = s.slice(start, end);
            if (wordset.has(word) && check(s, wordset, end, memo)) {
                memo[start] = true;
                return true;
            }
        }
        memo[start] = false;
        return false;
    }
    return check(s, wordset, 0, memo);
};
// @lc code=end

