/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

import { map } from "async";

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const maps = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    };
    let res = [];
    for (const v of digits) {
        let w = maps[v];
        if (res.length > 0) {
            let temp = [];
            for (let i = 0; i < res.length; i++) {      
                for (let j = 1; j < w.length; j++) {
                    temp.push(res[i] + w[j]);
                }
                res[i] += w[0];
            }
            res.push(...temp);
        } else {
            res.push(...w);
        }
    }
    return res;
};
// @lc code=end

