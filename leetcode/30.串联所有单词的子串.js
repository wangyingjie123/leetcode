/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const wordSize = words[0].length
    const substringLen = wordSize * words.length

    const wordsCount = {}
    words.forEach(w => (wordsCount[w] = (wordsCount[w] || 0) + 1))

    const res = []
    for (let i = 0; i <= s.length - substringLen; i++) {
        const tempCount = {...wordsCount}
        let count = words.length

        for (let j = i; j < i + substringLen; j += wordSize) {
            const word = s.slice(j, j + wordSize)

            if (!(word in tempCount) || tempCount[word] <= 0) break

            tempCount[word]--
            count--
        }

        if (count === 0) res.push(i)
    }
    return res
};
// @lc code=end

