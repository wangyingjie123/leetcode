/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/**
 * 2-4-3 (2 -> 4 -> 3)
 * 5-6-4 (5 -> 6 -> 4)
 * 7-0-8 ()
 * 可以发现规律，满10后进1加到下一位里
 */
var addTwoNumbers = function(l1, l2) {
    let node = new ListNode('head')
    let temp = node , sum , n = 0
    while( l1 || l2 ) {
        const n1 = l1 ? l1.val : 0; // 2 // 4 // 3
        const n2 = l2 ? l2.val : 0; // 5 // 6 // 4
        sum = n1 + n2 + n; // 7 10 8
        temp.next = new ListNode(sum % 10); // this.val = 7; this.next = null // 0
        // this.val = 0, this.next = null
        // this.val = 8, this.next = null
        temp = temp.next;
        n = parseInt(sum / 10); // 0 1 0
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    if( n > 0 ) temp.next = new ListNode(n);
    return node.next
};
// @lc code=end

