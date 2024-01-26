/*
 * @lc app=leetcode.cn id=406 lang=javascript
 *
 * [406] 根据身高重建队列
 */

// @lc code=start
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  // 先按照身高降序，k升序排序
  people.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return b[0] - a[0];
  });
  const res = [];
  // 按照k插入到res中
  for (let i = 0; i < people.length; i++) {
    const index = people[i][1];
    if (res.length <= index) {
      res.push(people[i]);
    } else {
      res.splice(index, 0, people[i]);
    }
  }
  return res;
};
// @lc code=end
