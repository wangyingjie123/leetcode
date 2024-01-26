/*
 * @lc app=leetcode.cn id=1332 lang=javascript
 *
 * [1332] 删除回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    if (s.length === 0 ) return 0;
    // for (let i = 0, j = s.length - 1; i < j; i++,j--) {
    //     if (s[i] !== s[j]) return 2
    // }
    // return 1;
// 思路：判断是否是回文字符串是的话返回1，否则返回2
    let ss = s.split('').reverse().join('');
    if (s === ss) {
        return 1
    } else {
        return 2;
    }
};
// @lc code=end

