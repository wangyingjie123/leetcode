/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// BFS
var serialize = function(root) {
    const queue = [root];
    let res = [];
    while(queue.length) {
        const node = queue.shift();
        if (node) {
            res.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            res.push('X');
        }
    }
    return res.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data === 'X') return null;
    const list = data.split(',');
    const root = new TreeNode(list[0]);
    const queue = [root];
    let cursor = 1; // 从list第二项开始遍历
    while(cursor < list.length) {
        let node = queue.shift();
        const leftVal = list[cursor];
        const rightVal = list[cursor + 1];
        if (leftVal != 'X') {              // 是真实节点
            const leftNode = new TreeNode(leftVal); // 创建左儿子节点
            node.left = leftNode;                   // 认父亲
            queue.push(leftNode);                   // 自己也是父亲，入列
        }
        if (rightVal != 'X') {
            const rightNode = new TreeNode(rightVal);
            node.right = rightNode;
            queue.push(rightNode);
        }
        cursor += 2;
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

