/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
  let i = 0;
  let j = height.length -1;
  let ans = 0;
  let leftmax = 0;
  let rightmax = 0;
  while( i < j){
      leftmax = Math.max(leftmax, height[i]);
      rightmax = Math.max(rightmax, height[j]);
      if(leftmax < rightmax) {
          ans += leftmax - height[i];
          i ++;
      }else{
          ans += rightmax - height[j];
          j --;
      }
  }
  return ans;
};
// @lc code=end

