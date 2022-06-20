/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const set = new Set(nums);
  let max = 0;
   for (let i = 0; i < nums.length; i++) {
     if (!set.has(nums[i] - 1)) {
       let cur = nums[i]; // 如果set中没有当前项减1，说明当前项是左边界cur
       let count = 1; // 数量初始化为1；
       while(set.has(cur + 1)) {
        count++;
        cur++;
       }
       max = Math.max(max, count);
     }
   }
   return max;
};
// @lc code=end

