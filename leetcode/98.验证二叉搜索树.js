/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    if (!root) return true;
    let sortList = [];
    sortTree(root, sortList);
    return isSortedList(sortList);
};
function sortTree(node, arr) {
    if (!node) return;
    sortTree(node.left, arr);
    arr.push(node.val);
    sortTree(node.right, arr);
}
function isSortedList(list) {
    const length = list.length;
    for (let i = 0; i < length - 1; i++) {
        if (list[i] >= list[i+1]) {
            return false;
        }
    }
    return true;
}
// @lc code=end

