/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let n = candidates.length;
    let res = [];
    let temp = [];
    candidates = candidates.sort((a, b) => a - b);
    function help(temp, target, start) {
        if(target === 0){
            res.push(temp);
            return;
        }
        for (let i = start; i < n; i ++) {
            if(target < candidates[i]) break; // 剪枝操作
            if(i > start && candidates[i-1] === candidates[i]) continue; // 当前元素不能重复使用
            temp.push(candidates[i]);
            help(temp.slice(),target - candidates[i],i + 1);
            temp.pop();
        }
    }
    help(temp, target, 0);
    return res;
};
// @lc code=end

