/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (const [i, v] of nums.entries()) {
    if (map.has(target - v)) {
      return [map.get(target - v), i];
    }
    map.set(v, i);
  }
};
// @lc code=end
