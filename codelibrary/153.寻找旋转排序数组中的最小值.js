/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    const pivot = low + Math.floor((high - low) / 2);
    // 放弃右侧，向左缩小区间
    if (nums[pivot] < nums[high]) {
      high = pivot;
    } else {
      low = pivot + 1;
    }
  }
  return nums[low];
};
// @lc code=end
