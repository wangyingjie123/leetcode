/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    let preHead = new ListNode(0);
    preHead.next = head;
    let pos = 0;
    let tempHead = preHead;
    // 第一步，先将指针指向m点
    while(pos < m -1) {
        tempHead = tempHead.next;
        pos++;
    }
    let pre = null;
    let cur = tempHead.next;
    while(pos < n) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
        pos++;
    }
    tempHead.next.next = cur;
    tempHead.next = pre;
    return preHead.next;
};
// @lc code=end

