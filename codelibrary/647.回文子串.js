/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// Manacher算法
var countSubstrings = function(s) {
    let n = s.length;
    // $开始标记
    let t = ['$', '#'];
    for (let i = 0; i < n; i++) {
        t.push(s.charAt(i));
        t.push('#');
    }
    n = t.length;
    t.push('!'); // 结束标记
    t = t.join('');

    const f = new Array(n);
    // 最大回文中心、最大的回文右端点、
    let iMax = 0, rMax = 0, ans = 0;
    for (let i = 1; i < n; i++) {
        // 我们用 f(i) 来表示以 s 的第 i 位为回文中心，可以拓展出的最大回文半径
        f[i] = i <= iMax ? Math.min(rMax - i + 1, f[2 * iMax - i]) : 1;
        // 中心拓展
         while (t.charAt(i + f[i]) == t.charAt(i - f[i])) {
            ++f[i];
        }
        // 动态维护imax和rmaxi + f[i] - 1最大右端点
        if (i + f[i] - 1 > rMax) {
            iMax = i;
            rMax = i + f[i] - 1;
        }
        // 统计答案, 当前贡献为 (f[i] - 1) / 2 上取整
        ans += Math.floor(f[i] / 2);
    }
    return ans;
};
// @lc code=end

