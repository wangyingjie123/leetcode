/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
 * @return {number}
 */
var maxPathSum = function(root) {
  let maxSum = Number.MIN_SAFE_INTEGER;
  function dfs(root) {
    if (!root) return 0;
    const left = dfs(root.left);
    const right = dfs(root.right);
    // 更新最大值
    maxSum = Math.max(maxSum, left + right + root.val);
    // 返回当前子树的路径和，分别为左路、右、不动
    const maxPath = root.val + Math.max(0, left, right);
    return maxPath < 0 ? 0 : maxPath;
  }
  dfs(root);
  return maxSum;
};
// @lc code=end

