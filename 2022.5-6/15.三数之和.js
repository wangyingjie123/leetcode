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
var threeSum = function(nums) {
  const ret = [];
  const len = nums.length;
  if (len < 3) {
      return ret
  }
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < len - 2; i++) {
    if (nums[i] > 0) {
      return ret;
    }
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    const cur = nums[i];
    let left = i + 1;
    let right = len - 1;
    while(left < right) {
      const sum = cur + nums[left] + nums[right];
      if (sum === 0) {
        ret.push([nums[i], nums[left], nums[right]]);
        left += 1;
        right -= 1;
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (sum < 0) {
        left ++;
      } else {
        right --;
      }
    }
  }
  return ret;
};
// @lc code=end

