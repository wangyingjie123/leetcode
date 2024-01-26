/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let res = '';
    let cur = 0; // 记录是否满10
    // 末尾相加，大于10进1
    for (let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0; i--,j--) {
        let n1 = num1[i] >= 0 ? +num1[i] : 0;
        let n2 = num2[j] >= 0 ? +num2[j] : 0;
        let sum = n1 + n2 + cur;
        res = sum % 10 + res;
        // 位运算取整--大于9为1
        cur = sum / 10 | 0;
    }
    cur > 0 ? res = '1' + res : res;
    return res;
};
// @lc code=end

