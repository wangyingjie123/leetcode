/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
  if (root == null) return subRoot == null;
  function isSameTree(root, subRoot) {
    if (root === null || subRoot === null) {
      return root === subRoot;
    } else if (root.val !== subRoot.val) {
      return false;
    } else {
      return isSameTree(root.left, subRoot.left) && isSameTree(root.right, subRoot.right)
    }
  }
  if (isSameTree(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
// @lc code=end

