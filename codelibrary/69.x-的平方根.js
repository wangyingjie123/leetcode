/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @desc 二分查找
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0;
  let right = x / 2 + 1; // +1目的是x = 2的情况
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (mid * mid <= x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left - 1;
};
// @lc code=end
