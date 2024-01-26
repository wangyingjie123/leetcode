/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (nums[mid] === target) return true;
    if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
      left++;
      right--;
    } else if (nums[mid] <= nums[right]) {
      // 右边有序
      // 判断目标值target是否在区间[mid,right]的范围内
      if (nums[mid] < target && nums[right] >= target) {
        // 如果在该范围内，此时我们应该在区间[mid+1,right]中继续二分
        left = mid + 1;
        // 如果不在该范围内容，此时舍弃该区间，在区间[left,mid-1]中继续二分
      } else {
        right = mid - 1;
      }
    } else {
      // 左边有序
      // 判断目标值target是否在区间[left,mid]的范围内
      if (nums[left] <= target && nums[mid] > target) {
        // 如果在该范围内，此时我们应该在区间[left,mid-1]中继续二分
        right = mid - 1;
        // 如果不在该范围内容，此时舍弃该区间，在区间[mid+1,right]中继续二分
      } else {
        left = mid + 1;
      }
    }
  }
  return false;
};
// @lc code=end
