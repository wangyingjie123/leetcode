 /*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const res = [];
  if (!root) return res;
  const queue = [root];
  while(queue.length) {
    // 每一层新建一个数组
    const level = [];
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const curNode = queue.shift();
      level.push(curNode.val);
      if (curNode.left) queue.push(curNode.left);
      if (curNode.right) queue.push(curNode.right);
    }
    res.push(level);
  }
  return res;
};
// @lc code=end

