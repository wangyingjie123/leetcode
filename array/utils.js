export function checkArray(array) {
    if (!array || array.length <= 2) return;
}

export const example = [1, 0, 3, 2, 1, 2, 5, 4];

export function swap(arr, left, right) {
    // let rightValue = arr[right];
    // arr[right] = arr[left];
    // arr[left] = rightValue;
    [arr[left], arr[right]] = [arr[right], arr[left]];
}

export const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1,
    EQUALS: 0
};

export function defaultCompare(a, b) {
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}