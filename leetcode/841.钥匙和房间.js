/*
 * @lc app=leetcode.cn id=841 lang=javascript
 *
 * [841] 钥匙和房间
 */

// @lc code=start
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
// BFS
// var canVisitAllRooms = function(rooms) {
//     let set = new Set();
//     let queue = [0];
//     set.add(0);
//     while(queue.length) {
//         let cur = queue.shift();
//         let nextRooms = rooms[cur];
//         for (let i = 0; i < nextRooms.length; i++) {
//             let next = nextRooms[i];
//             if (!set.has(next)) {
//                 set.add(next);
//                 queue.push(next);
//             }
//         }
//     }
//     return set.size === rooms.length;
// };
// dfs
var canVisitAllRooms = function(rooms) {
    let set = new Set();
    const dfs = curRoom => {
        set.add(curRoom);
        const curRooms = rooms[curRoom];
        for (let i = 0; i < curRooms.length; i++) {
            const next = curRooms[i];
            if (!set.has(next)) {
                dfs(next);
            }
        }
    }
    dfs(0);
    return set.size === rooms.length;
}
// @lc code=end

