/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  var list = [];
  if (nums.length < 3) {
    return list;
  }
  nums = nums.sort((a, b) => a - b);
  // 外层遍历从0扫到倒数第二个
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      return list;
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    // 双指针：左指针从i + 1开始，右指针从最后一个开始
    for (let j = i + 1, k = nums.length - 1; j < k;) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        list.push([nums[i], nums[j], nums[k]]);
        while(j < k && nums[j] === nums[j + 1]) j++; // 去重
        while(j < k && nums[k] === nums[k - 1]) k--; // 去重
        j++;
        k--;
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k--
      } else {
        j++
      }
    }
  }
  return list;
};
// @lc code=end

