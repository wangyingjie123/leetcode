/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
// 贪心算法
// var partitionLabels = function (s) {
//   const last = new Array(26);
//   const length = s.length;
//   const codePointA = "a".codePointAt(0);
//   // 标记好每个字符串最后出现的位置【贪心】
//   for (let i = 0; i < length; i++) {
//     last[s.codePointAt(i) - codePointA] = i;
//   }
//   const partition = [];
//   let start = 0,
//     end = 0;
//   for (let i = 0; i < length; i++) {
//     end = Math.max(end, last[s.codePointAt(i) - codePointA]);
//     if (i === end) {
//       partition.push(end - start + 1);
//       start = end + 1;
//     }
//   }
//   return partition;
// };

const partitionLabels = (s) => {
  const result = [];
  const calc = (i) => {
    let start = i;
    let end = s.lastIndexOf(s[i]);
    for (let j = i; j < end; j++) {
      const index = s.lastIndexOf(s[j]);
      if (index > end) {
        end = index;
      }
    }
    const next = end + 1;
    result.push(end - start + 1);
    if (next < s.length) {
      calc(next);
    }
  };
  calc(0);
  return result;
};
// @lc code=end
