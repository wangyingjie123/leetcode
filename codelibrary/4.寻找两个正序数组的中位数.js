/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    // make sure to do binary search for shorten array
    // 保证m <= n;
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    const m = nums1.length;
    const n = nums2.length;
    let low = 0;
    let high = m;
    while (low <= high) {
        const i = (high + low) >> 1;
        const j = Math.floor((m + n + 1) / 2) - i;
        // 为了保证max(A[i - 1], B[j - 1]）<= min(A[i], B[j]，因为 A 数组和 B 数组是有序的，所以 A[i - 1] <= A [i]，B[i - 1] <= B[i]这是天然的，所以我们只需要保证 B [j - 1] < = A[i] 和 A[i - 1] <= B[j] 所以我们分两种情况讨论：
        const maxLeftA = i === 0 ? -Infinity : nums1[i - 1];
        const minRightA = i === m ? Infinity : nums1[i];
        const maxLeftB = j === 0 ? -Infinity : nums2[j - 1];
        const minRightB = j === n ? Infinity : nums2[j];

        if (maxLeftA <= minRightB && minRightA >= maxLeftB) {
            return (m + n) % 2 === 1 ?
            Math.max(maxLeftA, maxLeftB) :
            (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2;
        } else if (maxLeftA > minRightB) {
            high = i - 1;
        } else if (minRightB > maxLeftA) {
            low = low + 1;
        }
    }
};
// @lc code=end

