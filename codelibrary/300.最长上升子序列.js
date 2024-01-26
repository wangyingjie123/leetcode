/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 二分查找维护数组
var lengthOfLIS = function(nums) {
    let len = nums.length;
    if (len < 2) return len;
    // 记录上升子序列数量
    let max = 0;
    let tails = [nums[0]];
    for (let i = 1; i < len; i++) {
        if (nums[i] > tails[max]) {
            tails.push(nums[i]);
            max++;
        } else {
            // 启动二分查找
            let left = 0, right = max;
            while(left < right) {
                let mid = (left + right) >> 1;
                if (tails[mid] < nums[i]) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            tails[left] = nums[i];  
        }
    }
    return ++max;
};
let res = lengthOfLIS([10,9,2,5,3,4]);
console.log(res);
// @lc code=end

