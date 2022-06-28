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
var reorderList = function(head) {
  if (!head) return null;
  const mid = findListMid(head);
  const leftList = head;
  const rightList = mid.next;
  // 从中间节点分割链表
  mid.next = null;
  mergeList(leftList, reverseList(rightList));
};
// 找到链表的中间节点
function findListMid(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
// 反转后半段链表
function reverseList(head) {
  let prev = null, curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
// 合并两段链表
function mergeList(l1, l2) {
  while (l1 && l2) {
    const temp1 = l1.next, temp2 = l2.next;
    l1.next = l2;
    l1 = temp1;
    l2.next = l1;
    l2 = temp2;
  }
}
// @lc code=end

