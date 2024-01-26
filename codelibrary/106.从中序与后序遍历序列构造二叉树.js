/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  // 1. 递归 (96 ms 40.3 MB)(98.86% 96.77%)
  const map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  const build = (inLeft, inRight, postLeft, postRight) => {
    if (inLeft > inRight) return null;
    // 根节点即为后续遍历的最后一个节点
    const rootVal = postorder[postRight];
    const root = new TreeNode(rootVal);
    // 找到在中序遍历中的位置。左边为左子树，右边为右子树
    const index = map.get(rootVal);
    const leftSize = index - inLeft;
    // 递归构造左右子树
    root.left = build(inLeft, index - 1, postLeft, postLeft + leftSize - 1);
    root.right = build(index + 1, inRight, postLeft + leftSize, postRight - 1);
    return root;
  };
  return build(0, inorder.length - 1, 0, postorder.length - 1);
};
// @lc code=end
