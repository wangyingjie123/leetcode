/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  const res = [];
  if (!root) return res;
  const dfs = (node, depth) => {
    if (!node) return;
    if (depth === res.length) {
      res.push(node.val);
    };
    dfs(node.right, depth + 1);
    dfs(node.left, depth + 1);
  }
  dfs(root, 0);
  return res;
};

// BFS
var rightSideView = function(root) {
  const res = [];
  if (!root) return res;
  const queue = [root];
  while (queue.length) {
    let len = queue.length;
    while (len) {
      // 取出队列的第一个元素
      const node = queue.shift();
      // 如果是当前一层的最后一个元素时，把值加入arr
      if (len === 1) {
        res.push(node.val);
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      len--;
    }
  }
  return res;
}
// @lc code=end

