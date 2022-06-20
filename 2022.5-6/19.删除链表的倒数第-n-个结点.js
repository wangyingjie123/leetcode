/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function (head, n) { 
  let first = head.next;
  let second = head;
  let index = 1;
  // 快指针领先慢指针n个节点
  while (first) {
    if (index > n) {
      second = second.next;
    }
    index++;
    first = first.next;
  }
  // 长度不足n的情况
  if (index < n || index === 1) return (head = null);
  // 长度正好为n的情况
  if (index === n) {
    head = head.next;
    return head;
  }
  second.next = second.next.next;

  return head;
};
// @lc code=end

