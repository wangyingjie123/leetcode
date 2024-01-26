/*
 * @lc app=leetcode.cn id=2512 lang=javascript
 *
 * [2512] 奖励最顶尖的 K 名学生
 */

// @lc code=start
/**
 * @param {string[]} positive_feedback
 * @param {string[]} negative_feedback
 * @param {string[]} report
 * @param {number[]} student_id
 * @param {number} k
 * @return {number[]}
 */
var topStudents = function (
  positive_feedback,
  negative_feedback,
  report,
  student_id,
  k
) {
  const positiveSet = new Set(positive_feedback);
  const negativeSet = new Set(negative_feedback);

  const result = report.map((item, index) => {
    const student = { id: student_id[index], score: 0 };
    item.split(" ").forEach((v) => {
      if (positiveSet.has(v)) {
        student.score += 3;
      } else if (negativeSet.has(v)) {
        student.score -= 1;
      }
    });
    return student;
  });
  // 排序
  result.sort((a, b) => {
    if (a.score > b.score) return -1;
    if (a.score < b.score) return 1;
    if (a.score === b.score) return a.id - b.id;
  });

  // 导出 id
  return result.slice(0, k).map((item) => item.id);
};
// @lc code=end
