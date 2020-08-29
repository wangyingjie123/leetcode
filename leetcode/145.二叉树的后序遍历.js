/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    // var res = [], list = [root];
    // if (!root) return res;
    // while(list.length > 0) {
    //     let node = list.pop();
    //     if (node.left) list.push(node.left);
    //     if (node.right) list.push(node.right);
    //     res.unshift(node.val);
    // }
    // return res;
    let res = [];
    function help(root) {
        if (root) {
            if (root.left) help(root.left);
            if (root.right) help(root.right);
            res.push(root.val);
        }
    }
    help(root);
    return res;
};
// @lc code=end

