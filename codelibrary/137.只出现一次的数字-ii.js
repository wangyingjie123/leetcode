/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 1. 哈希表 (96 ms 39.4 MB)(71.43% 5.26%)
  const map = new Map();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  for (const [key, val] of map) {
    if (val === 1) return key;
  }
};
// @lc code=end
