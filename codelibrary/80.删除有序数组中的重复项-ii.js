/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let n = nums.length;
  if (n <= 2) return n;
  let slow = 2,
    fast = 2;
  while (fast < n) {
    // 由于是有序数组，所以只需要判断slow-2和fast的值是否相等
    if (nums[slow - 2] !== nums[fast]) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  nums.length = slow;
  return slow;
};
// @lc code=end
