/*
 * @lc app=leetcode.cn id=581 lang=javascript
 *
 * [581] 最短无序连续子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 1. 排序比对法
// var findUnsortedSubarray = function (nums) {
//   if (isSorted(nums)) return 0;
//   const numsSorted = [...nums].sort((a, b) => a - b);
//   let left = 0;
//   while (nums[left] === numsSorted[left]) {
//     left++;
//   }
//   let right = nums.length - 1;
//   while (nums[right] == numsSorted[right]) {
//     right--;
//   }
//   return right - left + 1;
// };

// const isSorted = (nums) => {
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] > nums[i + 1]) return false;
//   }
//   return true;
// };

// 2. 一次遍历
const findUnsortedSubarray = (nums) => {
  // 假设数组分为3段，nums啊，numsb，numsc
  // 从后往前找到left，即numsa最大值
  // 从前往后找到right，即numsc最小值
  const n = nums.length;
  let maxn = -Infinity,
    right = -1;
  let minn = Infinity,
    left = -1;
  for (let i = 0; i < n; i++) {
    if (maxn > nums[i]) {
      right = i;
    } else {
      maxn = nums[i];
    }
    if (minn < nums[n - i - 1]) {
      left = n - i - 1;
    } else {
      minn = nums[n - i - 1];
    }
  }
  return right === -1 ? 0 : right - left + 1;
};
// @lc code=end
