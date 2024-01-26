/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
/**
 * @param {arr[]} stones
 * @param {l arr[left], r arr[right]}
 * @param {n arr[right] - arr[left]}
 * 此函数是为了将first - second的差值插入到对应位置
 */
var binsert = function(arr, l, r, n) {
    // 插入到数组右边
    if (arr[r] <= n) {
        arr.splice(r+1, 0, n);
    } else if (l === r || arr[l] >= n) { // 插入到数组左边
        arr.splice(l, 0, n);
    } else {
        // 中间用二分查找插入
        var m = Math.floor((l + r) / 2);
        if (arr[m] <= n && arr[m+1] >= n) {
            arr.splice(m+1, 0, n);
            return;
        } else if (arr[m] >= n) {
            binsert(arr, l, m, n);
        } else {
            binsert(arr, m, r, n);
        }
    }
}
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    stones.sort((a, b) => a - b);
    while(stones.length > 1) {
        let first = stones.pop();
        let second = stones.pop();
        if (first !== second) {
            binsert(stones, 0, stones.length - 1, first - second);
        }
    }
    return stones.length ? stones[0] : 0;
};
// @lc code=end

