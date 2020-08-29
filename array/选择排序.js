import { swap, Compare, defaultCompare, example } from './utils.js';
/* 选择排序--找到数组中的最小值并将其放到第一位，接着找第二小的值放到第二位
*
*/
function selectSort (arr, compareFn = defaultCompare) {
  const { length } = arr;
  let indexMin;
  for (let i = 0; i < length - 1; i++) {
    indexMin = i;
    for (let j = i; j < length; j++) {
      if (compareFn(arr[indexMin], arr[j]) === Compare.BIGGER_THAN) {
        indexMin = j;
      }
    }
    if (i !== indexMin) {
      swap(arr, i, indexMin);
    }
  }
  return arr;
}
console.log(selectSort(example));