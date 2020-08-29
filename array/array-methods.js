// 循环实现数组map
const selfMap = function (fn, context) {
    let arr = Array.prototype.slice.call(this);
    let mapedArr = Array(arr.length - 1);
    for (let i = 0; i < arr.length; i++) {
        if (!arr.hasOwnProperty(i)) continue;
        mapedArr[i] = fn.call(context, arr[i], i, this)
    }
    return mapedArr
};

// reduce实现
const selfMap2 = function (fn, context) {
    let arr = Array.prototype.slice.call(this);
    return arr.reduce((pre, cur, index) => {
        return [...pre, fn.call(context, cur, index, this)]
    }, [])
};
const result = (list) => {
    return list.reduce((accumulator, item) => {
        return {
            ...accumulator,
            [item.name]: item.img
        }
    }, {})
};
// reverse
const reverse = function(arr) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    let temp = arr[right];
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
};
console.log(reverse([1,2,4]));
export {
    selfMap2,
    result
}
