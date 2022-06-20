/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  if (!head || left === right) return head;
  let dummy = new ListNode(0);
  dummy.next = head;
  let pos = 0;
  let tempHead = dummy;
  // 第一步，先将指针指向left点
  while(pos < left -1) {
      tempHead = tempHead.next;
      pos++;
  }
  // 第二步，将left点的下一个点指向left点的下一个点
  let current = tempHead.next;
  let prev = null;
  while(pos < right) {
    [current.next, prev, current] = [prev, current, current.next];
    pos++;
  }
  tempHead.next.next = current;
  tempHead.next = prev;
  return dummy.next;
};
// @lc code=end

