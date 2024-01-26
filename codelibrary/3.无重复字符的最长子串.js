/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let start = -1;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (i !== 0) set.delete(s[i - 1]);
    while (start + 1 < s.length && !set.has(s[start + 1])) {
      set.add(s[start + 1]);
      start++;
    }
    max = Math.max(max, start - i + 1);
  }
  return max;
};
// @lc code=end

// 输出最长子串
const lengthOfLongestSubstring1 = (s) => {
  const set = new Set();
  let start = -1;
  let max = 0;
  let res = "";
  for (let i = 0; i < s.length; i++) {
    if (i !== 0) set.delete(s[i - 1]);
    while (start + 1 < s.length && !set.has(s[start + 1])) {
      set.add(s[start + 1]);
      start++;
    }
    if (start - i + 1 > max) {
      max = start - i + 1;
      res = s.slice(i, start + 1);
    }
  }
  return res;
};
