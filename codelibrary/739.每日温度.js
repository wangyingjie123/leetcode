/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
// 单调栈
var dailyTemperatures = function(T) {
    let len = T.length;
    let res = new Array(len).fill(0);
    let stack = [];
    for (let i = 0; i < len; i++) {
        while(stack.length && T[i] > T[stack[stack.length - 1]]) {
            let topIndex = stack.pop();
            res[topIndex] = i - topIndex;
        }
        stack.push(i);
    }
    return res;
};
// @lc code=end

