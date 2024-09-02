/*
 * @lc app=leetcode.cn id=673 lang=javascript
 *
 * [673] 最长递增子序列的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  const d = []; // d[i][j]表示长度为i的最长上升子序列末尾值
  const cnt = []; // cnt[i][j]表示长度为i的最长上升子序列末尾值为j的个数
  for (const v of nums) {
    let i = binarySearch1(d.length, d, v);
    let c = 1;
    if (i > 0) {
      const k = binarySearch2(d[i - 1].length, d[i - 1], v);
      c = cnt[i - 1][cnt[i - 1].length - 1] - cnt[i - 1][k];
    }

    if (i == d.length) {
      const dList = [];
      dList.push(v);
      d.push(dList);
      const cntList = [];
      cntList.push(0);
      cntList.push(c);
      cnt.push(cntList);
    } else {
      d[i].push(v);
      const cntSize = cnt[i].length;
      cnt[i].push(cnt[i][cntSize - 1] + c);
    }
  }
  const size1 = cnt.length;
  const size2 = cnt[size1 - 1].length;
  return cnt[size1 - 1][size2 - 1];
};
const binarySearch1 = (n, d, target) => {
  let l = 0,
    r = n;
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    const list = d[mid];
    if (list[list.length - 1] >= target) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return l;
};

const binarySearch2 = (n, list, target) => {
  let l = 0,
    r = n;
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (list[mid] < target) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return l;
};

// @lc code=end
