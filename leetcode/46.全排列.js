/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permute = function(nums) {
//     let res = [];
//     let n = nums.length;
//     function help(path) {
//         if (path.length === n) res.push(path);
//         for (let v of nums) {
//             if (!path.includes(v)) {
//                 path.push(v);
//                 help(path.slice());
//                 path.pop();
//             }
//         }
//     }
//     help([]);
//     return res;
// };
var permute = function(nums) {
    let res = [], sub = [];
    /**
     * @param {res[]} 要返回的结果
     * @param {sub[]} 结果子集
     * @param {nums[]} 处理的参数
     */
    function dfs(res, sub, nums) {
        if (sub.length === nums.length) {
            res.push(sub.slice(0));
            return;
        }
        for (const v of nums) {
            if (sub.includes(v)) continue;
            sub.push(v);
            dfs(res, sub, nums);
            sub.pop();
        }  
    }
    dfs(res, sub, nums);
    return res;
};
// @lc code=end

