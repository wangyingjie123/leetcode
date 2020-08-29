/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let list = [];
    for (let i = 0; i < s.length; i++) {
        let str = s.charAt(i);
        switch(str) {
            case '(':
                list.push(')');
                break;
            case '{':
                list.push('}');
                break;
            case '[':
                list.push(']');
                break;
            default:
                if (str !== list.pop()) {
                    return false;
                }
        }
    }
    return list.length === 0;
};
// @lc code=end

