/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
var rob1 = function(root) {
    // f(0)表示选中哦节点的情况下，o子树上最大的权值和 f(o) = g(l) + g(r);
    const f = new Map();
    // g(o)表示不选择o节点的情况下 g(o) = max{f(l), g(l)}+ max{f(r), g(r)}
    // l,r表示左右节点子节点
    const g = new Map();
    const dfs = (node) => {
        if (node === null) {
            return;
        }
        dfs(node.left);
        dfs(node.right);
        f.set(node, node.val + (g.get(node.left) || 0) + (g.get(node.right) || 0));
        g.set(node, Math.max(f.get(node.left) || 0, g.get(node.left) || 0) + Math.max(f.get(node.right) || 0, g.get(node.right) || 0));
    }
    dfs(root);
    return Math.max(f.get(root) || 0, g.get(root) || 0);
};
// 优化--空间优化
var rob = function(root) {
    const dfs = (node) => {
        if (node === null) {
            return [0, 0];
        }
        const l = dfs(node.left);
        const r = dfs(node.right);
        const selected = node.val + l[1] + r[1];
        const noselected = Math.max(l[0], l[1]) + Math.max(r[0], r[1]);
        return [selected, noselected];
    }
    const rootStatus = dfs(root);
    return Math.max(...rootStatus);
};
// @lc code=end

