/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  if (x >= 0 && x < 10) {
    return true;
  }
  let abs = x;
  let res = 0;
  while (abs) {
    const digit = abs % 10;
    abs = Math.floor(abs / 10);
    res = res * 10 + digit;
  }
  return x === res;
};
console.log(isPalindrome(121));
// @lc code=end
