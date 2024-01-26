/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var subarraySum = function (nums, k) {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0;
//     for (let j = i; j < nums.length; j++) {
//       sum += nums[j];
//       if (sum === k) {
//         count++;
//       }
//     }
//   }
//   return count;
// };
const subarraySum = (nums, k) => {
  // 以nums[0]~nums[i]的和为key，出现的次数为value
  const map = new Map();
  map.set(0, 1);
  let count = 0;
  let pre = 0; // 前缀和
  for (let i = 0; i < nums.length; i++) {
    pre += nums[i];
    if (map.has(pre - k)) {
      count += map.get(pre - k);
    }
    map.set(pre, (map.get(pre) || 0) + 1);
  }
  return count;
};
// @lc code=end
