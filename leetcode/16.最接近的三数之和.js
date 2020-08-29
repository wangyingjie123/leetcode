/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 1、从小到大排序数组
// 2、求和res = start + end + i
// 3、移动指针
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a, b) => a - b);
    let res = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < nums.length; i++) {
        let start = i + 1, end = nums.length - 1;
        while(start < end) {
            let sum = nums[start] + nums[end] + nums[i];
            if(Math.abs(target - sum) < Math.abs(target - res)) {
                res = sum;
            }
            if (sum > target) {
                end --;
            } else if (sum < target) {
                start ++;
            } else {
                return res;
            }
                
        }
    }
    return res;
};
// @lc code=end

