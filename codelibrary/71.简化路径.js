/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const names = path.split("/");
  const stack = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (name === "" || name === ".") {
      continue;
    } else if (name === "..") {
      stack.pop();
    } else {
      stack.push(name);
    }
  }
  return "/" + stack.join("/");
};
// @lc code=end
