/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 排列序列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  const nums = new Array(n).fill(0).map((_, i) => i + 1);
  const factorial = new Array(n).fill(0); // 阶乘数组
  factorial[0] = 1;
  for (let i = 1; i < n; i++) {
    factorial[i] = factorial[i - 1] * i;
  }
  k--;
  console.log(factorial);
  const res = [];
  for (let i = n - 1; i >= 0; i--) {
    // 公式 k / (后面几位的阶乘数) 的值 恰好等于候选数组的下标；
    const q = Math.floor(k / factorial[i]); // 确定当前位
    const r = k % factorial[i]; // 确定下一轮的k，k是在剩余的数字中的序数
    res.push(nums[q]);
    nums.splice(q, 1);
    k = r;
  }
  return res.join("");
};
// @lc code=end
