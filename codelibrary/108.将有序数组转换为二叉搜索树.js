/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = (nums) => {
    const buildBST = (nums, start, end) => {
      if (start > end) return null;
      const mid = (start + end) >>> 1;
      const root = new TreeNode(nums[mid]);
      root.left = buildBST(nums, start, mid - 1);
      root.right = buildBST(nums, mid + 1, end);
      return root;
    };
    return buildBST(nums, 0, nums.length - 1);
};
// @lc code=end

