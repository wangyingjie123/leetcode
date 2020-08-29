/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var res = [];
    var sub = [];
    function help(start, sublist) {
        if (sublist.length === k) {
            res.push(sublist.slice(0));
            return;
        }
        let len = sublist.length;
        for (let i = start; i <= n - (k - len) + 1; i++) {
            sublist.push(i);
            help(i + 1, sublist);
            sublist.pop();
        }
    }
    help(1, sub);
    return res;
};
// combine(4, 2);
// @lc code=end


