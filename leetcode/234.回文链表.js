/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
// var isPalindrome = function(head) {
//     // 1转成数组
//     const arr = [];
//     while(head) {
//         arr.push(head.val);
//         head = head.next;
//     }
//     let left = 0, right = arr.length - 1;
//     while(left < right) {
//         if (arr[left] !== arr[right]) return false;
//         left++;
//         right--;
//     }
//     return true;
// };
var isPalindrome = function(head) {
    // 快慢指针
    if (head == null) return true;
    let fast = head, slow = head;
    // 快指针到达终点，慢指针指向中点
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    let cur = slow, last = null;
    // 将后半段反转
    while(slow) {
        slow = slow.next;
        cur.next = last;
        last = cur;
        cur = slow;
    }
    // 开始比对前后两段
    while(last) {
        if (head.val !== last.val) return false;
        head = head.next;
        last = last.next;
    }
    return true;
}
// @lc code=end

