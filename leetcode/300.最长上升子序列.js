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
    let tails = [];
    nums.forEach((num) => {
        // 二分搜索：找到大于等于 num 的左侧边界，如果全小，则 left = tails.length
        let left = 0, right = tails.length - 1, mid;
        while(left <= right) {
            mid = left + parseInt((right - left) / 2);
            if (tails[mid] < num) {
                left = mid + 1;
            } else if (tails[mid] > num) {
                right = mid - 1;
            } else if (tails[mid] === num) {
                // 收缩右侧边界
                right = mid - 1;
            }
        }
        tails[left] = num;
    });
    // 调试
    // console.log(tails)
    return tails.length;
};
// @lc code=end

