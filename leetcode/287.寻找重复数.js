/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var findDuplicate = function(nums) {
//     // 二分查找
//     let len = nums.length;
//     let left = 1, right = len - 1;
//     while (left < right) {
//         let mid = (left + right) >>> 1;
//         let count = 0;
//         for (let i = 0; i < len; i++) {
//             if (nums[i] <= mid) {
//                 count++;
//             }
//         }
//         if (count > mid) {
//             // 重复元素在[left, mid - 1]区间
//             right = mid;
//         } else {
//             left = mid + 1;
//         }
//     }
//     return left;
// };

var findDuplicate = function(nums) {
    // 快慢指针--有环链表，求入环口
    let fast= 0, slow = 0;
    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];
        if (slow === fast) {
            fast = 0;
            while (true) {
                if (slow == fast) {
                    return slow;
                }
                slow = nums[slow];
                fast = nums[fast];
            }
        }
    }
}
// @lc code=end

