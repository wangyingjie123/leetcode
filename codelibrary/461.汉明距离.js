/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  // 异或用于获取两数二进制合并后的结果（相同为 0，不同为 1）
  let xorResult = x ^ y;
  let count = 0;
  while (xorResult !== 0) {
    // 如果异或结果最后一位是1，则计数加1
    if (xorResult & 1) {
      count++;
    }
    xorResult >>= 1; // 右移一位
  }
  return count;
};
// @lc code=end
