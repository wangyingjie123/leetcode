/*
 * @lc app=leetcode.cn id=648 lang=javascript
 *
 * [648] 单词替换
 */

// @lc code=start
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
// hash查找
// var replaceWords = function (dictionary, sentence) {
//   const dictionarySet = new Set(dictionary);
//   const words = sentence.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];
//     for (let j = 0; j < word.length; j++) {
//       if (dictionarySet.has(word.substring(0, 1 + j))) {
//         words[i] = word.substring(0, 1 + j);
//         break;
//       }
//     }
//   }
//   return words.join(" ");
// };
// 字典树
const replaceWords = (dictionary, sentence) => {
  const trie = new Trie();
  for (const word of dictionary) {
    let cur = trie;
    for (let c of word) {
      if (!cur.children.has(c)) {
        cur.children.set(c, new Trie());
      }
      cur = cur.children.get(c);
    }
    cur.children.set("#", new Trie());
  }
  const words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = findRoot(words[i], trie);
  }
  return words.join(" ");
};
// 查找字典树最小路径
const findRoot = (word, trie) => {
  let root = "";
  let cur = trie;
  for (let i = 0; i < word.length; i++) {
    const c = word[i];
    if (cur.children.has("#")) {
      return root;
    }
    if (!cur.children.has(c)) {
      return word;
    }
    root += c;
    cur = cur.children.get(c);
  }
  return root;
};

class Trie {
  constructor() {
    this.children = new Map();
  }
}
// @lc code=end
