/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
// BFS层序遍历一、栈的思想
// var inorderTraversal = function(root) {
//     let arr = [], res = []
//     root && arr.push(root)

//     while(arr.length > 0) {
//         let cur = arr.pop();
//         cur.right && arr.push(cur.right);
//         res.push(cur.val);
//         cur.left && arr.push(cur.left);
//     }
//     return res
// };
// BFS层序遍历二、
var inorderTraversal = function(root) {
    let res = [];
    if (!root) {
        return res;
    }
    let stack = [[root, false]];
    while(stack.length) {
        let node = stack.pop();
        let cur = node[0];
        let isTrue = node[1];
        if (isTrue) {
            res.push(cur.val);
        } else {
            cur.right && stack.push([cur.right, false]);
            stack.push([cur, true]);
            cur.left && stack.push([cur.left, false]);
        }
    }
    return res;
};
// var inorderTraversal = function(root) {
//     let res = [];
//     function dfs(root) {
//         if (root) {
//             if (root.left) dfs(root.left);
//             res.push(root.val);
//             if (root.right) dfs(root.right);
//         }
//     }
//     dfs(root);
//     return res;
// };
// @lc code=end

