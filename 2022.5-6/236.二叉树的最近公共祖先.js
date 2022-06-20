/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const dfs = (node) => {
      if (node === null || node === p || node === q) {
        return node;
      }
      const left = dfs(node.left);
      const right = dfs(node.right);
      // left和right都有值，公共节点是root
      if (left && right) {
        return node;
      }
      return left || right;
    }
    return dfs(root);
};
// @lc code=end

