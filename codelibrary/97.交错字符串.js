/*
 * @lc app=leetcode.cn id=97 lang=javascript
 *
 * [97] 交错字符串
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;
  const DPArray = new Array(s1.length + 1)
    .fill(false)
    .map(() => new Array(s2.length + 1).fill(false));
  DPArray[0][0] = true;
  for (let i = 0; i <= s1.length; i++) {
    for (let j = 0; j <= s2.length; j++) {
      const idx = i + j - 1;
      if (i > 0) {
        DPArray[i][j] =
          DPArray[i][j] || (DPArray[i - 1][j] && s1[i - 1] === s3[idx]);
      }
      if (j > 0) {
        DPArray[i][j] =
          DPArray[i][j] || (DPArray[i][j - 1] && s2[j - 1] === s3[idx]);
      }
    }
  }
  // 返回结果
  return DPArray[s1.length][s2.length];
};
// @lc code=end
