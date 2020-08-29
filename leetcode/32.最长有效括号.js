/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 思路记录s中每个元素的index值，遇到有效括号打消掉
// 遍历tem数组，后一个index减前一个index就是一个有效括号长度
// 遍历过程中使用Math.max不断求最大值
var longestValidParentheses = function(s) {
    if (s.length === 0) return 0;
    let temp = [{type: 0, index: 0}];
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            temp.push({
                type: '(',
                index: i + 1
            })
        } else if (s[i] === ')' && temp[temp.length - 1].type === '(') { // 匹配到了有效括号，删除
            temp.pop();
        } else {
            temp.push({
                type: ')',
                index: i + 1
            })
        }
    }
    // 收尾
    temp.push({type: 0, index: s.length + 1});
    for (let i = 0; i < temp.length - 1; i++) {
        let num = temp[i + 1].index - temp[i].index - 1;
        max = Math.max(num, max);
    }
    return max;
};
// @lc code=end

