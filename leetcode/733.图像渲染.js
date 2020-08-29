/*
 * @lc app=leetcode.cn id=733 lang=javascript
 *
 * [733] 图像渲染
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
// 解法二：bfs
var floodFill = function(image, sr, sc, newColor) {
    let m = image.length;
    let n = image[0].length;
    const oldColor = image[sr][sc];
    if (oldColor === newColor) return image;
    let queue = [[sr, sc]];
    while(queue.length) {
        // 出列
        const [i, j] = queue.shift();
        image[i][j] = newColor;
        // 依次按上下左右方向入列
        if (i - 1 >= 0 && image[i - 1][j] == oldColor) queue.push([i - 1, j]);
        if (i + 1 < m && image[i + 1][j] == oldColor) queue.push([i + 1, j]);
        if (j - 1 >= 0 && image[i][j - 1] == oldColor) queue.push([i, j - 1]);
        if (j + 1 < n && image[i][j + 1] == oldColor) queue.push([i, j + 1]);
    }
    return image;
};
// @lc code=end

