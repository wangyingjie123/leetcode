/*
 * @lc app=leetcode.cn id=44 lang=javascript
 *
 * [44] 通配符匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    // 字符串s的起点位置
    let i = 0;
    // 字符串p的起点位置
    let j = 0;
    // s的当前位置
    let s_match = 0;
    // *的位置
    let startIdx = -1;
    let n = s.length;
    let m = p.length;
    while(i < n){
        // 同解法一：dp[i][j] = dp[i-1][j-1] 两指针同时后移
        if(j < m && (p[j] == '?' || s[i] == p[j])){
            i++;
            j++;
        }
        // 同解法一：dp[i][j] = dp[i][j-1] 
        // 匹配空串，更新*号的位置，更新s的当前位置，p后移
        else if(j < m && p[j] == '*'){
            startIdx = j;
            s_match = i;
            j++;
        }
        // 同解法一：dp[i][j] = dp[i-1][j]
        // 当前字符不匹配，并且也不是*号，回退到上一步
        // 匹配一个字符，例如abky,ab*z
        // j 回到 * 号的下一个位置
        // s_match继续下一个字符，i同样更新
        else if(startIdx != -1){
            j = startIdx + 1;
            s_match++;
            i = s_match;
        }
        // 字符不匹配，也没有 * 
        else{
            return false;
        }
    }
    // 将末尾如有，多余的 * 加上去，相当于匹配空串
    // ab，a*******
    while(j < m && p[j] == '*'){
        j++;
    }
    // 判断是否能够匹配全部 
    return j == m;
};
// @lc code=end

