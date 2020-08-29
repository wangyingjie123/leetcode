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
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    if (x >= 0 && x < 10) {
        return true;
      }
      var abs = Math.abs(x);
      var res = 0;
      while (abs) {
        var digit = abs % 10;
        abs = Math.floor(abs / 10);
        res = res * 10 + digit;
      }
      return x === res;
};
// @lc code=end

