/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    for (const v of strs) {
        const key = v.split('').sort().join();
        const oldtem = map.get(key) || [];
        map.set(key, [...oldtem, v])
    }
    return [...map.values()];
};
// @lc code=end

