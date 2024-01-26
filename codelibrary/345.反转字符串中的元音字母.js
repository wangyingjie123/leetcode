/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let set = new Set(['a','e','i','o','u','A','E','I','O','U']);
    let arr = s.split('');
    let i = 0,
        j = arr.length - 1;
    while (i < j) {
        if (set.has(arr[i])) { // 左边是否有元音字母
            if (set.has(arr[j])) { // 如果左边有元音字母，右边也有，那么交换
                [arr[i], arr[j]] = [arr[j], arr[i]];
                i++;
            }
            j--;
        } else {
            i++;
        }
    }
    return arr.join('');
};
// @lc code=end