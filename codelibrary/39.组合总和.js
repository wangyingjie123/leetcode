/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let n = candidates.length;
    let res = [];
    let temp = [];
    candidates = candidates.sort((a, b) => a - b);
    let help = (temp, target, start) => {
        if (target === 0) {
            res.push(temp);
            return;
        }
        for (let i = start; i < n; i++) {
            if (target < candidates[i]) break;
            temp.push(candidates[i]);
            help(temp.slice(),target - candidates[i],i);
            temp.pop();
        }
    };
    help(temp, target, 0);
    return res;
};
// @lc code=end

