/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function (root) {
  let res = 1;
  const deep = (root) => {
    if (!root) return 0;
    let left = deep(root.left);
    let right = deep(root.right);
    // 获取该树的最长路径和现有最长路径中最大的那个
    res = Math.max(res, left + right + 1);
    // 返回该节点为根节点的最大深度
    return Math.max(left, right) + 1;
  };
  deep(root);
  return res - 1;
};
// @lc code=end
