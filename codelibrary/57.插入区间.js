/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let [left, right] = newInterval;
  // 是否重叠
  let placed = false;
  const ans = [];
  for (const interval of intervals) {
    if (interval[0] > right) {
      // 在插入区间的右侧且无交集
      if (!placed) {
        ans.push([left, right]);
        placed = true;
      }
      ans.push(interval);
    } else if (interval[1] < left) {
      // 在插入区间的左侧且无交集
      ans.push(interval);
    } else {
      // 与插入区间有交集，计算它们的并集
      left = Math.min(left, interval[0]);
      right = Math.max(right, interval[1]);
    }
  }
  if (!placed) {
    ans.push([left, right]);
  }
  return ans;
};
// @lc code=end
