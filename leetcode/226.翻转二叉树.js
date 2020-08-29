/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    // 递归
    // if (!root) return null;
    // let right = invertTree(root.right);
    // let left = invertTree(root.left);
    // root.left = right;
    // root.right = left;
    // return root;
    // 深度优先遍历
    let stack = [root];
    while(stack.length) {
        let cur = stack.pop();
        if (cur == null) continue;
        [cur.left, cur.right] = [cur.right, cur.left];
        stack.push(cur.right);
        stack.push(cur.left);
    }
    return root;
};
// @lc code=end

