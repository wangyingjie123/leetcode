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
  const n = nums.length;
  if (n < 2) {
    return 0;
  }
  let maxVal = Math.max(...nums);
  let minVal = Math.min(...nums);
  const d = Math.max(1, Math.floor(maxVal - minVal) / (n - 1));
  const bucketSize = Math.floor((maxVal - minVal) / d) + 1;

  const bucket = new Array(bucketSize).fill(0).map((x) => new Array(2).fill(0));
  for (let i = 0; i < bucketSize; ++i) {
    bucket[i].fill(-1);
  }
  for (let i = 0; i < n; i++) {
    const idx = Math.floor((nums[i] - minVal) / d);
    if (bucket[idx][0] === -1) {
      bucket[idx][0] = bucket[idx][1] = nums[i];
    } else {
      bucket[idx][0] = Math.min(bucket[idx][0], nums[i]);
      bucket[idx][1] = Math.max(bucket[idx][1], nums[i]);
    }
  }

  let ret = 0;
  let prev = -1;
  for (let i = 0; i < bucketSize; i++) {
    if (bucket[i][0] == -1) {
      continue;
    }
    if (prev != -1) {
      ret = Math.max(ret, bucket[i][0] - bucket[prev][1]);
    }
    prev = i;
  }
  return ret;
};
maximumGap([3, 6, 9, 1]);
// @lc code=end
