// 快速排序--简易版
function quickSort(array) {
    if (array.length <= 1) {
        return array
    }
    const index = Math.floor(array.length / 2);
    const pivot = array.splice(index, 1)[0];
    let left = [];
    let right = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i])
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
}

/*
* 快速排序-
* 时间复杂度O(n*logn)
* 空间复杂度O（logn）
* */
var sortArray = function (nums) {
    if (nums.length < 2) return nums;
    return quickSort2(nums, 0, nums.length - 1);
};

function quickSort2(nums, left, right) {
    if (left >= right) return;
    let pivotIndex = partition(nums, left, right); // 找主元，双指针移动，比主元小的放左边
    quickSort2(nums, left, pivotIndex - 1); // 排序左半部分
    quickSort2(nums, pivotIndex + 1, right); // 排序有半部分
    return nums;
}

function partition(nums, left, right) {
    let end = right;
    let leftIndex = left;
    for (let i = left; i < right; i++) {
        if (nums[i] < nums[end]) {
            [nums[leftIndex], nums[i]] = [nums[i], nums[leftIndex]];
            leftIndex++;
        }
    }
    [nums[leftIndex], nums[end]] = [nums[end], nums[leftIndex]];
    return leftIndex;
}

sortArray([1, 2, 0, 3]);