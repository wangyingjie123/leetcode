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
    let h1 = headA;
    let h2 = headB;
    while(h1 || h2) {
      if (h1 == h2) {
        return h1;
      }
      h1 = h1 === null ? headB : h1.next;
      h2 = h2 === null ? headA : h2.next;
    }
    return null;
};
// @lc code=end

