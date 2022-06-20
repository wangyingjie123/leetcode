/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  if (nums.length < 2) return nums;
  return quickSort(nums, 0, nums.length -1);
};
const quickSort = (nums, left, right) => {
  if (left >= right) return;
  const priindex = priviteIndex(nums, left, right);
  quickSort(nums, 0, priindex - 1);
  quickSort(nums, priindex + 1, right);
  return nums;
}
const priviteIndex = (nums, left, right) => {
  let end = right;
  let leftIndex = left;
  for (let i = left; i < right; i++) {
    if (nums[i] < nums[end]) {
      [nums[leftIndex], nums[i]] = [nums[i], nums[leftIndex]];
      leftIndex++;
    }
  }
  [nums[leftIndex], nums[end]] = [nums[end], nums[leftIndex]];
  return leftIndex;
}
// @lc code=end

