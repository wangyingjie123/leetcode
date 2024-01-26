/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
// dfs 迭代
// var preorderTraversal = function(root) {
//     let arr = [], res = [];
//     root && arr.push(root);
//     while(arr.length) {
//         let cur = arr.pop();
//         res.push(cur.val);
//         cur.right && arr.push(cur.right);
//         cur.left && arr.push(cur.left);
//     }
//     return res;
// };
// 递归
var preorderTraversal = function(root) {
    let res = [];
    function help(root) {
        if (root) {
            res.push(root.val);
            help(root.left);
            help(root.right);
        }
    }
    help(root);
    return res;
};
// @lc code=end

