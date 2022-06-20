/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start

var MyQueue = function() {
  this.queue1 = []; // 入栈
  this.queue2 = []; // 出栈
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.queue1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (!this.queue2.length) {
    this.intoStack();
  }
  return this.queue2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (!this.queue2.length) {
    this.intoStack();
  }
  return this.queue2[this.queue2.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.queue1.length === 0 && this.queue2.length === 0;
};

MyQueue.prototype.intoStack = function() {
  while (this.queue1.length) {
    this.queue2.push(this.queue1.pop());
  }
};
/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

