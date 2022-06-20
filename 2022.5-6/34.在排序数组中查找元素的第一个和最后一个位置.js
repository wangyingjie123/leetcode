/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let res = [-1, -1];
  const leftIndex = binarySearch(nums, target, true);
  const rightIndex = binarySearch(nums, target, false) - 1;
  if (leftIndex <= rightIndex) {
    res = [leftIndex, rightIndex];
  }
  return res;
};
const binarySearch = (nums, target, isLeft) => {
  const len = nums.length;
  let low = 0;
  let high = len - 1;
  let res = -1;
  while (low <= high) {
    const mid =  low + ((high - low) >> 1);
    if (nums[mid] > target || (isLeft && nums[mid] >= target)) {
      high = mid - 1;
      res = mid;
    } else {
      low = mid + 1;
    }
  }
  return res;
}
// @lc code=end

