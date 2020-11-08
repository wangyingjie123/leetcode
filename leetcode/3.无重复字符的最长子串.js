/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 * @silu 1、维护一个数组，循环遍历字符串，如果数组中已有该字母，将数组中从0到该字母下标全部截取掉，重新往进push该字母，max比较max和数组长度，最后输出max
 */
// var lengthOfLongestSubstring = function(s) {
//     var arr = [];
//     var max = 0;
//     for (let item of s) {
//         let index = arr.indexOf(item);
//         if(index > -1){
//             arr.splice(0, index + 1);
//         }
//         arr.push(item);
//         max = Math.max(max, arr.length);
//     }
//     return max;
// };
// 输出最长子串
var lengthOfLongestSubstring = function(s) {
    var cur = '';
    let preStr = '';
    var max = 0;
    for (let item of s) {
        let index = cur.indexOf(item);
        if(index === -1){
            cur += item;
            preStr = preStr.length > cur.length ? preStr : cur;
            max = Math.max(max, cur.length);
        } else {
            cur = cur.substr(index + 1) + item;
        }
    }
    console.log(preStr);
    return max;
};
console.log(lengthOfLongestSubstring('ghfdghs'));
// 滑动窗口[left, ...right]
// var lengthOfLongestSubstring = function(s) {
//     let left = 0;
//     let right = -1;
//     let map = {};
//     let max = 0;
//     while(left < s.length) {
//         let next = s[right + 1];
//         if (!map[next] && next) {
//             map[next] = 1;
//             right++
//         } else {
//             map[s[left]] = 0;
//             left++;
//         }
//         max = Math.max(max, right - left + 1);
//     }
//     return max;
// }
// var lengthOfLongestSubstring = function(s) {
//     let current = '';
//     let max = 0;
//     for (let i = 0; i < s.length; i++) {
//         current = current.substring(current.indexOf(s[i]) + 1);
//         current +=s[i];
//         max = Math.max(max, current.length);
//     }
//     return max;
// };
// @lc code=end

