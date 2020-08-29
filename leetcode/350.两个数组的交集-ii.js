/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

const { read } = require("fs");

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    // 双指针
    // let p1 = 0;
    // let p2 = 0;
    // let res = [];
    // nums1 = nums1.sort((a, b) => a - b);
    // nums2 = nums2.sort((a, b) => a - b);
    // while(p1 < nums1.length && p2 < nums2.length) {
    //     if (nums1[p1] === nums2[p2]) {
    //         res.push(nums1[p1]);
    //         p1++;
    //         p2++
    //     } else if (nums1[p1] < nums2[p2]) {
    //         p1++
    //     } else {
    //         p2++
    //     }
    // }
    // return res;
    // 删除数组
    let res = [];
    for (let i = nums1.length - 1; i >= 0; i--) {
        let j = nums2.indexOf(nums1[i]);
        if (j > -1) {
            res.push(nums1[i]);
            nums2.splice(j, 1);
        }
    }
    return res;
};
// @lc code=end

