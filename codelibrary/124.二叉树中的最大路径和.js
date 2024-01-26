/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
 * @return {number}
 */
var maxPathSum = function(root) {
    let maxSum = Number.MIN_SAFE_INTEGER;
    const dfs = (root) => {
        // 1、停在当前子树的 root，收益：root.val。
        // 2、走入左子树，最大收益：root.val + dfs(root.left)。
        // 3、走入右子树，最大收益：root.val + dfs(root.right)。
        if (root == null) return 0;
        let left = Math.max(0, dfs(root.left));
        let right = Math.max(0, dfs(root.right));
        // 不断更新maxSum值
        // 因此每次递归，都求一下「当前子树内部的最大路径和」，如下图右一，与全局的最大比较。
        maxSum = Math.max(maxSum, left + root.val + right);
        // 返回当前子树最大值
        return root.val + Math.max(left, right);
    }
    dfs(root);
    return maxSum;
};
// @lc code=end

