/*
 * @lc app=leetcode.cn id=621 lang=javascript
 *
 * [621] 任务调度器
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const taskCounts = new Array(26).fill(0);
  for (let task of tasks) {
    const index = task.charCodeAt(0) - "A".charCodeAt(0);
    taskCounts[index]++;
  }

  taskCounts.sort((a, b) => b - a);
  const maxTasks = taskCounts[0] - 1; // 最多的任务
  let idleSlots = maxTasks * n; // 插槽时间
  for (let i = 1; i < 26; i++) {
    // 从第二多的任务开始，往空闲插槽里插
    idleSlots -= Math.min(maxTasks, taskCounts[i]);
  }
  idleSlots = Math.max(0, idleSlots);
  return idleSlots + tasks.length;
};
// @lc code=end
