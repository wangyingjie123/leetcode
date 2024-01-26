/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  if (s.length < p.length) return [];
  let arr = new Array(26).fill(0);
  // arr [1,1,1,0,0,...,0]
  for (let c of p) {
    arr[c.charCodeAt() - 97]++;
  }
  // 滑动窗口右边界
  let r = 0;
  while (r < p.length) {
    arr[s[r].charCodeAt() - 97]--;
    r++;
  }
  let res = [];
  // 检查arr是否都为0，表示s === p
  if (arr.every((a) => a == 0)) res.push(0);
  while (r < s.length) {
    // 右边界的字母消耗一个，左边界的字母增加一个
    arr[s[r].charCodeAt() - 97]--;
    arr[s[r - p.length].charCodeAt() - 97]++;
    if (arr.every((a) => a == 0)) res.push(r - p.length + 1);
    r++;
  }
  return res;
};

// @lc code=end
