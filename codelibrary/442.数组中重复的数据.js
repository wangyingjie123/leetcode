/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    // 原地hash思想
    let arr = [];
    for (let v of nums) {
        let abs = Math.abs(v);
        if (nums[abs - 1] < 0) {
            arr.push(abs);
        } else {
            nums[abs - 1] *= -1;
        }
    }
    return arr;
};
findDuplicates([4,3,2,7,8,2,3,1]);
// @lc code=end
var addStrings = function(num1, num2) {
    let l1 = num1.length - 1;
    let l2 = num2.length - 1;
    let sum = 0, res = [], n = 0;
    while(l1 >= 0 || l2 >= 0) {
        const n1 = l1 >= 0 ? num1[l1] * 1 : 0;
        const n2 = l2 >= 0 ? num2[l2] * 1 : 0;
        sum = n1 + n2 + n;
        res.unshift(sum % 10);
        n = sum >= 10 ? 1 : 0;
        l1--;
        l2--;
    }
    if (n === 1) res.unshift(n);
    return res.join('');
};
addStrings('1', '9');