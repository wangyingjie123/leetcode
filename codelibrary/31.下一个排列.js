/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  if (nums.length <= 1) return;
  // 找出最后一个升序组合
  let i = nums.length - 2;
  let j = nums.length - 1;
  let k = nums.length - 1;
  while (nums[i] >= nums[j] && i >= 0) {
    i--;
    j--;
  }
  if (i >= 0) {
    // 逆序找到第一个比nums[i]大的数
    while (nums[i] >= nums[k]) {
      k--;
    }
    [nums[i], nums[k]] = [nums[k], nums[i]];
  }
  for (i = j, j = nums.length - 1; i < j; i++, j--) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  return nums;
};
// @lc code=end
