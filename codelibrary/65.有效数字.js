/*
 * @lc app=leetcode.cn id=65 lang=javascript
 *
 * [65] 有效数字
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  if (s.indexOf("Infinity") > -1) return false;
  return !isNaN(s);
};
var isNumber2 = function (s) {
  const reg = /^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/;
  return reg.test(s);
};
// @lc code=end
