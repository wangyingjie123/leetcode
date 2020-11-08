/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 双端队列
var maxSlidingWindow = function(nums, k) {
    let res = [];
    let windows = new dequeue();
    for (let i = 0; i < nums.length; i++) {
        // 前k - 1个元素直接入队
        if (i < k - 1) {
            windows.push(nums[i]);
        } else {
            windows.push(nums[i]);
            res.push(windows.max());
            windows.pop(nums[i - k + 1]);
        }
    }
    return res;
};
class dequeue {
    constructor() {
        this.data = [];
    }
    push(val) {
        let data = this.data;
        while(data.length > 0 && data[data.length - 1] < val) {
            data.pop();
        }
        data.push(val);
    }
    pop(val) {
        let data = this.data;
        // 出队
        if (data.length > 0 && data[0] === val) {
            data.shift();
        }
    }
    max() {
        return this.data[0];
    }
}
// @lc code=end

