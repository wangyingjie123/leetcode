/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var findDisappearedNumbers = function (nums) {
//   const set = new Set(nums);
//   const res = [];
//   for (let i = 1; i <= nums.length; i++) {
//     if (!set.has(i)) {
//       res.push(i);
//     }
//   }
//   return res;
// };
const findDisappearedNumbers = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;
    nums[index] = -Math.abs(nums[index]);
  }
  let result = [];
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] > 0) {
      // 找出数组中还是正数的值
      result.push(j + 1);
    }
  }
  return result;
};
// @lc code=end
