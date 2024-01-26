/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const res = []; // 结果
  const arr = [];
  const dfs = (index) => {
    if (index >= s.length && arr.length === 4) {
      res.push(arr.join("."));
      return;
    }
    for (let i = index; i < s.length; i++) {
      const str = s.slice(index, i + 1);
      // 1. 不能大于 255
      if (str.length > 3 || Number(str) > 255) break;
      // 2. 不能以 0 开头
      if (str.length > 1 && str[0] === "0") break;
      arr.push(str);
      dfs(i + 1);
      arr.pop();
    }
  };
  dfs(0);
  return res;
};
// @lc code=end
