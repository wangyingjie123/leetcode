/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let fast = head, slow = head;
    while(fast) {
        if (fast.next == null) return null;
        fast = fast.next.next;
        slow = slow.next;
        // 快慢指针相遇
        // D = s2，让快指针从头出发，慢指针从相遇点继续出发
        if (slow == fast) {
            fast = head;
            while(true) {
                if (slow == fast) {
                    return slow;
                }
                fast = fast.next;
                slow = slow.next;
            }
        }
    }
    return null;
};
// @lc code=end

