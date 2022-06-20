/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
var zigzagLevelOrder = function(root) {
  if (!root) return [];
  let res = [];
  let queue = [root];
  // 记录是从左到右还是从右到左
  let isOrderLeft = true;
  while (queue.length) {
    // 双端队列
    const zigzagLevelOrder = [];
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      // 如果是从左到右，则把左节点从尾部放入队列
      if (isOrderLeft) {
        zigzagLevelOrder.push(node.val);
      } else {
      // 如果是从右到左，则把右节点从头部放入队列
        zigzagLevelOrder.unshift(node.val);
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    res.push(zigzagLevelOrder);
    isOrderLeft = !isOrderLeft;
  }
  return res;
};
// @lc code=end

