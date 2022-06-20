/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  return merge(lists, 0, lists.length - 1);
};
function merge(list, left, right) {
  if (left === right) {
    return list[left];
  }
  if (left > right) {
    return null;
  }
  const mid = left + right >> 1;
  return mergeTwo(merge(list, left, mid), merge(list, mid + 1, right));
}
function mergeTwo(listA, listB) {
  if (!listA || !listB) {
    return listA || listB;
  }
  let head = new ListNode();
  let cur = head;
  while(listA && listB) {
    if (listA.val < listB.val) {
      cur.next = listA;
      listA = listA.next;
    } else {
      cur.next = listB;
      listB = listB.next;
    }
    cur = cur.next;
  }
  cur.next = listA || listB;
  return head.next;
}
// @lc code=end

