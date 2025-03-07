/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (str1, str2) {
  let map = new Map();
  for (let char of str2) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  let left = 0,
    right = 0,
    count = map.size;
  let minLen = Infinity,
    minStart = 0;

  while (right < str1.length) {
    let char = str1[right];
    if (map.has(char)) {
      map.set(char, map.get(char) - 1);
      if (map.get(char) === 0) count--;
    }
    right++;

    while (count === 0) {
      if (right - left < minLen) {
        minLen = right - left;
        minStart = left;
      }
      let leftChar = str1[left];
      if (map.has(leftChar)) {
        map.set(leftChar, map.get(leftChar) + 1);
        if (map.get(leftChar) > 0) count++;
      }
      left++;
    }
  }

  return minLen === Infinity ? "" : str1.substring(minStart, minStart + minLen);
};
// @lc code=end
