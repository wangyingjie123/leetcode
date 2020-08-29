/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var res = [];
    if (!root) return res;
    helper(root, 0, res);
    return res;
};
function helper(root, level, res) {
    // if (res.length === level) {
    //     res[level] = [];
    // }
    // res[level].push(root.val);
    // if (root.left) helper(root.left, level + 1, res);
    // if (root.right) helper(root.right, level + 1, res);
    if (!root) return;
    if (!res[level]) res[level] = [];
    res[level].push(root.val);
    helper(root.left, level + 1, res);
    helper(root.right, level + 1, res);
}
// @lc code=end

