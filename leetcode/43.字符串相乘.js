/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// 思路：竖式相乘
// nums1[i] * nums2[j] = res[i + j, i + j + 1];
// var multiply = function(num1, num2) {
//     let m = num1.length, n = num2.length;
//     let res = [];
//     for (let i = m - 1; i >= 0; i--) {
//         for (let j = n - 1; j >= 0; j--) {
//             let p1 = i + j, p2 = i + j + 1;
//             let sum = (res[p2] || 0) + num1[i] * num2[j];
//             res[p2] = sum % 10;
//             res[p1] = (res[p1] || 0) + Math.floor(sum / 10);
//         }
//     }
//     while(res.length && res[0] === 0){
//         res.shift();
//     }
//     return res.length === 0 ? '0' : res.join('');
// };
var multiply = function(num1, num2) {
    let len1 = num1.length;
    let len2 = num2.length;
    let res = new Array(len1 + len2).fill(0);
    if (num1 === '0' || num2 === '0') return '0';
    for (let i = len1 - 1; i >= 0; i--) {
        for (let j = len2 - 1; j >= 0; j--) {
            let sum = res[i + j + 1] + num1[i] * num2[j];
            console.log(sum);
            res[i + j + 1] = sum % 10;
            // 取整
            res[i + j] += (sum / 10) | 0;
        }
    }
    console.log(res);
    while(res[0] === 0) {
        res.shift();
    }
    return res.join('');
};
multiply('2', '3');
// @lc code=end

