/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];
    let temp = [];
    let n = nums.length;
    function dfs(temp, start) {
        console.log(temp);
        res.push(temp);
        for (let i = start; i < n; i++) {
            temp.push(nums[i]);
            dfs(temp.slice(), i + 1);
            temp.pop();
        }
    }
    dfs(temp, 0);
    return res;
};
subsets([1, 2, 3]);
// @lc code=end

