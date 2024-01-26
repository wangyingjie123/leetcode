/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
// fuck是前缀
// 思路： 1、假定最长前缀是第一个单词
  // 2、依次删除最后一个字母，知道匹配每一个单词
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';
    let str = strs[0];
    for (const v of strs) {
        while(v.indexOf(str) !== 0) {
            str = str.substring(0, str.length - 1);
            if (str === '') break;
        }
    }
    return str;
};
// @lc code=end

