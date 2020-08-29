/*
* @file fisher-yates随机算法
* 从最后一位开始将当前位置和一个随机位置交换
* */
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }
    return arr;
}
const arr = [2, 3, 4, 5, 6];
console.log(shuffle(arr));