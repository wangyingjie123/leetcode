/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    str = str.replace(' ', '');
    var num = parseInt(str);
    if (!num) {
        return 0;
    } else {
        if(num>=0)
            return num>2147483647?2147483647:num
        else 
            return num<-2147483648?-2147483648:num
    }
};
// @lc code=end

