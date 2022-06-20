/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
var deleteDuplicates = function(head) {
  let p =new ListNode(null);
  p.next = head;
  let cur = p;
  const map = new Map();
  // 判断是否是重复的
  while(cur.next){
    if (cur.val === cur.next.val) {
      map.set(cur.val, cur.val);
    }
    cur = cur.next;
  }
  // 重新指向起点
  cur = p;
  while(cur.next){
    if (map.has(cur.next.val)) {
      cur.next = cur.next.next
    } else {
      cur = cur.next;
    }
  }
  return p.next;
};
// @lc code=end

