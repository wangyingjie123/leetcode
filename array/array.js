/**
 * 找出数组中出现次数最多的元素。
 * @param {arr} 目标数组。
 */
const newarr = [2,3,4,3,2,3,2];
const findMore = (arr) => {
  let hash = {};
  let maxNum = 0;
  let maxEle = null;
  for (let i = 0; i < arr.length; i++) {
    hash[arr[i]] ? hash[arr[i]] ++ : hash[arr[i]] = 1;
    if (hash[arr[i]] > maxNum) {
      maxEle = arr[i];
      maxNum = hash[arr[i]];
    }
  }
  return `次数最多的元素为:${maxEle}, 次数为:${maxNum}`;
};
const findMore2 = (arr) => {
  let maxNum = 0;
  let maxEle = null;
  let obj = arr.reduce((p, num) => {
    p[num] ? p[num] ++ : p[num] = 1;
    if (p[num] > maxNum) {
      maxEle = item;
      maxNum++;
    }
    return p;
  }, {});
  return `出现次数最多的元素为：${maxEle},出现次数为：${maxNum}`;
};
const findMore3 = (nums) => {
    let count = 0;
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
      if (count === 0) {
        res = nums[i];
      }
      res === nums[i] ? count++ : count--;
    }
    return res;
};
console.log(findMore(newarr));