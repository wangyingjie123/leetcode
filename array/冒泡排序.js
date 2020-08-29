import { swap, Compare, defaultCompare, example } from './utils.js';
/*冒泡排序（从小到大）
* 时间复杂度 O(n*n)
*/
function popSort (arr, compareFn = defaultCompare) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (compareFn(arr[j], arr[j + 1]) === Compare.BIGGER_THAN) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr;
}
console.log(popSort(example));