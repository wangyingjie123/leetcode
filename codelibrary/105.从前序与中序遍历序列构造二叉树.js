/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// const buildTree = (preorder, inorder) => {
//     const map = new Map();
//     for (let i = 0; i < inorder.length; i++) {
//         map.set(inorder[i], i);
//     }
//     const helper = (pstart, pend, istart, iend) => {
//         if (pstart > pend) return null;
//         let rootVal = preorder[pstart]; // 根节点的值
//         let root = new TreeNode(rootVal); // 根节点
//         let mid = map.get(rootVal); // 根节点在inorder的位置
//         let leftNum = mid - istart; // 左子树的节点数
//         // 分别找到左子树在preorder、inorder中的位置
//         root.left = helper(pstart + 1, pstart + leftNum, istart, mid - 1);
//         // 分别找到右子树在preorder、inorder中的位置
//         root.right = helper(pstart + leftNum + 1, pend, mid + 1, iend);
//         return root;
//     };
//     return helper(0, preorder.length - 1, 0, inorder.length - 1);
// };
const buildTree = (preorder, inorder) => {
    // 
    let pre = i = 0;
    const build = (stop) => {
        if (inorder[i] != stop) {
            let root = new TreeNode(preorder[pre++]);
            root.left = build(root.val);
            i++;
            root.right = build(stop);
            return root;
        }
        return null;
    }
    return build();
}
// @lc code=end