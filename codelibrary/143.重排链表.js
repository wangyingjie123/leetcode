/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// 方法一：空间换时间--存储为线性表
var reorderList = function(head) {
    if (!head || !head.next) return head;
    const arr = [];
    while(head) {
        arr.push(head);
        head = head.next;
    }
    let left = 0, right = arr.length - 1;
    while(left < right) {
        left < right && (arr[left++].next = arr[right]);
        left < right && (arr[right--].next = arr[left]);
    }
    arr[left].next = null;
    return arr[0];
};
// @lc code=end

