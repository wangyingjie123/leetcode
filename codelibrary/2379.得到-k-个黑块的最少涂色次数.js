/*
 * @lc app=leetcode.cn id=2379 lang=javascript
 *
 * [2379] 得到 K 个黑块的最少涂色次数
 */

// @lc code=start
/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  let res = Infinity;
  let wCount = 0;
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i] === "W") {
      wCount++;
    }
    if (i >= k - 1) {
      if (blocks[i - k] === "W") {
        wCount--;
      }
      res = Math.min(res, wCount);
    }
  }
  return res;
};
// @lc code=end
