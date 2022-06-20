/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function addStrings (nums1, nums2) {
  let res = '';
  let cur = 0; // 记录是否满10
  let i = nums1.length - 1;
  let j = nums2.length - 1;
  while (i >= 0 || j >= 0) {
    let sum = cur;
    if (i >= 0) {
      sum += nums1[i--] - '0';
    }
    if (j >= 0) {
      sum += nums2[j--] - '0';
    }
    res = sum % 10 + res;
    cur = sum / 10 | 0;
  }
  return cur ? cur + res : res;
}
// @lc code=end

