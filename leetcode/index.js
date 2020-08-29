// 动态规划
let list = [
    {id: 1, name: '部门A', parentId: 0},
    {id: 2, name: '部门B', parentId: 0},
    {id: 3, name: '部门C', parentId: 1},
    {id: 4, name: '部门D', parentId: 1},
    {id: 5, name: '部门E', parentId: 2},
    {id: 6, name: '部门F', parentId: 3},
    {id: 7, name: '部门G', parentId: 2},
    {id: 8, name: '部门H', parentId: 4}
];

function convert(list) {
    const res = [];
    const map = list.reduce((res, v) => (res[v.id] = v, res), {});
    for (const item of list) {
        if (item.parentId === 0) {
            res.push(item);
            continue
        }
        if (item.parentId in map) {
            const parent = map[item.parentId];
            parent.children = parent.children || [];
            parent.children.push(item)
        }
    }
    return res
}

const obj = {
    a: {
        b: {
            c: {
                d: 3
            }
        }
    }
};
const arr = ['a', 'b', 'c', 'd'];

function checkobj(arr, obj) {
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (obj[item]) {
            obj = obj[item]
        } else {
            return obj[item];
        }
    }
    return obj;
}

// console.log(checkobj(arr, obj));
//最少硬币找零
var waysToChange = function (n) {
    const coins = [1, 5, 10, 25];
    const cache = [];
    const makechange = (value) => {
        if (!value) return [];
        if (cache[value]) {
            return cache[value]
        }
        let min = [];
        let newMin;
        let newAmount;
        for (let i = 0; i < coins.length; i++) {
            const coin = coins[i];
            newAmount = value - coin;
            if (newAmount >= 0) {
                newMin = makechange(newAmount);
            }
            if (newAmount >= 0 &&
                (newMin.length < min.length - 1 || !min.length) &&
                (newMin.length || !newAmount)
            ) {
                min = [coin].concat(newMin);
                if (value === n) {
                }
                // console.log('new Min' + min + 'for' + value);
            }
        }
        return (cache[value] = min)
    };
    return makechange(n);
};
waysToChange(30);

