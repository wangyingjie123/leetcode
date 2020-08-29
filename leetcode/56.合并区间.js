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
    if (intervals.length === 0) return [];
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    let res = [];
    res.push(intervals[0]);
    for (let i = 1; i < intervals.length; i++) {
        let resEnd = res[res.length - 1];
        if (intervals[i][0] > resEnd[1]) {
            res.push(intervals[i]);
        } else if (intervals[i][1] > resEnd[1]) {
            resEnd[1] = intervals[i][1];
        }
    }
    return res;
};
// @lc code=end

