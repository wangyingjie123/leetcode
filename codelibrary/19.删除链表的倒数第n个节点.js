/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let l = dummy;
    let r = dummy;
    let offset = n + 1;
    // 要寻找到删除节点的前一个节点
    //                    l               r
    // dummy -> 1 -> 2 -> 3 -> 4 -> 5 -> null
    while(offset--) {
        // 先找到起步时的右节点
        r = r.next;
        // 链表长度小于距离
        if (offset > 1 && r === null) {
            return dummy.next;
        }
    }
    while (r) {
        r = r.next;
        l = l.next;
    }
    l.next = l.next.next;
    return dummy.next;
};
// @lc code=end

