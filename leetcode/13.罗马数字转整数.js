/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 方法一
// 思路IV 为 5 - 1
// VI 为 5 + 1
var romanToInt = function(num) {
    let o = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    let n = 0;
    for (let i = 0; i < num.length; i++) {
        let temp = o[num[i]];
        if (i < num.length - 1 && temp < o[num[i + 1]]) {
            n -= temp;
        } else {
            n += temp;
        }
    }
    return n;
}
// 方法二
// var romanToInt = function(num) {
//     const map = { 
//         M: 1000,
//         CM: 900,
//         D: 500,
//         CD: 400,
//         C: 100,
//         XC: 90,
//         L: 50,
//         XL: 40,
//         X: 10,
//         IX: 9,
//         V: 5,
//         IV: 4,
//         I: 1
//     };
//     return Object.entries(map).reduce((res, [letter, n]) => {
//         res += letter.repeat(Math.floor(num / n));
//         num %= n;
//         return res;
//     }, '');
// };
// @lc code=end