/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let res = [];
  let [corver] = intervals;
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] > corver[1]) {
      res.push(corver);
      corver = intervals[i];
    } else {
      corver[1] = Math.max(corver[1], intervals[i][1]);
    }
  }
  res.push(corver);
  return res;
};
// @lc code=end

