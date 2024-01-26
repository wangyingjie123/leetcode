/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
// 借助栈--前序遍历
// var flatten = function(root) {
//     if (root == null) return;
//     let stack = [root];
//     let prev = null;
//     while(stack.length) {
//         const curr = stack.pop();
//         if (prev !== null) {
//             prev.left = null;
//             prev.right = curr;
//         }
//         const left = curr.left, right = curr.right;
//         if (right !== null) {
//             stack.push(right);
//         }
//         if (left !== null) {
//             stack.push(left);
//         }
//         prev = curr;
//     }
// };
var flatten = function(root) {
    let curr = root;
    while(curr !== null) {
        if (curr.left !== null) {
            const next = curr.left;
            let predecessor = next;
            while(predecessor.right !== null) {
                predecessor = predecessor.right;
            }
            predecessor.right = curr.right;
            curr.left = null;
            curr.right = next;
        }
        curr = curr.right;
    }
}
// @lc code=end

