/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // 双指针1、消除长度差
    // 从同一起点遍历，找相同点
    let pa = headA, pb = headB;
    while(pa || pb) {
        if (pa == pb) return pa;
        pa = pa === null ? headB : pa.next;
        pb = pb === null ? headA : pb.next;
    }
    return null;
};
// @lc code=end

