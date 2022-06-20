/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * 滑动窗口
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const set = new Set();
  let rk = -1, res = 0;
  for (let i = 0; i < s.length; i++) {
    if (i > 0) {
      // 移除左指针前面一个
      set.delete(s.charAt(i - 1));
    }
    while(rk + 1 < s.length && !set.has(s.charAt(rk + 1))) {
      set.add(s.charAt(rk + 1));
      rk++;
    }
    res = Math.max(res, rk - i + 1);
  }
  return res;
};
// @lc code=end

