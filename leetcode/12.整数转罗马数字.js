/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const numArr = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const strArr = ['M','CM','D', 'CD','C','XC','L','XL','X','IX','V','IV','I'];
    let res = '';
    for (let i = 0; i < numArr.length; i++) {
        while(num >= numArr[i]) {
            num -= numArr[i];
            res += strArr[i];
        }
    }
    return res;
};
// @lc code=end

