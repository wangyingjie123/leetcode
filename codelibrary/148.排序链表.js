/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head) return head;
  let p;
  const arr = [];
  // 将链表一节一节拆分到数组里
  while (head) {
    p = head.next;
    head.next = null;
    arr.push(head);
    head = p;
  }
  // 从小到大排序
  arr.sort((a, b) => a.val - b.val);
  for (let i = 0; i < arr.length; i++) {
    arr[i].next = arr[i + 1] || null;
  }
  return head || arr[0];
};
// @lc code=end
