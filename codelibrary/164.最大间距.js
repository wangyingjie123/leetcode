/*
 * @lc app=leetcode.cn id=164 lang=javascript
 *
 * [164] 最大间距
 */

// @lc code=start
/**
 * 桶排序
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  if (nums.length < 2) {
    return 0;
  }
  const len = nums.length;
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  // 每个桶的容量-最多放几个元素
  const bucketSize = Math.max(1, Math.floor((max - min) / (len - 1)));
  // 桶的个数
  const bucketNums = Math.floor((max - min) / bucketSize) + 1;

  const buckets = Array.from({ length: bucketNums }, () => []);
  // 分桶
  for (const num of nums) {
    const i = Math.floor((num - min) / bucketSize);
    buckets[i].push(num);
  }
  let res = 0;
  let prevMax = max;
  for (const nums of buckets) {
    if (nums.length === 0) {
      continue;
    }
    max = Math.max(...nums); // 1,3,6,9
    res = Math.max(res, max - prevMax); // 0,2,3,3
    prevMax = max; // 1,3,6,9
  }
  return res;
};
maximumGap([3, 6, 9, 1]);
// @lc code=end
