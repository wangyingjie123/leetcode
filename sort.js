/*
* @file sort
* 思路：先划分成一个一个小数组，在合并的时候进行排序
* 合并为一个大数组
*/
function mergeSort(arr) {
    if (arr.length > 1) {
        const { length } = arr;
        let middle = Math.floor(length / 2);
        let left = mergeSort(arr.slice(0, middle));
        let right = mergeSort(arr.slice(middle, length));
        arr = merge(left, right);
    }
    return arr;
}
function merge(left, right) {
    let i = 0;
    let j = 0;
    let res = [];
    while(i < left.length && j < right.length) {
        res.push(left[i] < right[j] ? left[i++] : right[j++]);
    }
    return res.concat(i < left.length ? left.slice(i) : right.slice(j));
}
/*
* O(nlogn)时间复杂度
* 思路：n先进行第一遍循环排序，找到基准值leftIndex
* 以基准值为分界线排序左右两边
*/
function quickSort(arr) {
    if (arr.length < 2) return arr;
    return quickSorts(arr, 0, arr.length - 1);
}
function quickSorts(arr, left, right) {
    if (left >= right) return;
    let pivotIndex = pivottion(arr, left, right);
    quickSorts(arr, left, pivotIndex - 1);
    quickSorts(arr, pivotIndex + 1, right);
    return arr;
}
function pivottion(arr, left, right) {
    let end = right;
    let leftIndex = left;
    for (let i = left; i < right; i++) {
        if (arr[i] < arr[end]) {
            [arr[leftIndex], arr[i]] = [arr[i], arr[leftIndex]];
            leftIndex++;
        }
    }
    [arr[leftIndex], arr[end]] = [arr[end], arr[leftIndex]];
    return leftIndex;
}

let arr = [2, 1, 3, 5, 4, 1];
console.log(quickSort(arr));