/*
 * @lc app=leetcode.cn id=399 lang=javascript
 *
 * [399] 除法求值
 */

// @lc code=start
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const graph = new Map();
  // 建立有向图
  for (let i = 0; i < equations.length; i++) {
    const [a, b] = equations[i];
    const value = values[i];
    if (!graph.has(a)) {
      graph.set(a, new Map());
    }
    if (!graph.has(b)) {
      graph.set(b, new Map());
    }
    graph.get(a).set(b, value);
    graph.get(b).set(a, 1 / value);
  }
  // dfs
  const dfs = (start, end, visited) => {
    // 如果start不在图中或者已经被访问过
    if (!graph.has(start) || visited.has(start)) {
      return -1;
    }
    if (start === end) {
      return 1;
    }
    visited.add(start);
    for (const [neighbor, weight] of graph.get(start)) {
      // 递归查找这条路上的最终值
      const result = dfs(neighbor, end, visited);
      if (result !== -1) {
        return weight * result; // 递归计算路径权重
      }
    }
    visited.delete(start); // 回溯，将当前节点从已访问集合中移除
    return -1; // 无法找到路径时返回-1
  };
  const results = [];
  for (let i = 0; i < queries.length; i++) {
    const [start, end] = queries[i];
    results.push(dfs(start, end, new Set()));
  }

  return results;
};
// @lc code=end
