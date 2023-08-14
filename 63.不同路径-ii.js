/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
/* 动态规划 没写对 */
/* var uniquePathsWithObstacles = function (obstacleGrid) {
    let len1 = obstacleGrid.length
    let len2= obstaclGrid[0].length
    let dp = Array(len)
    dp.forEach(item => item.map(i => Array(n).fill(1)))
    for (let i = 1; i < len; i++) {
        for (let j = 1; j < len; j++) {
            dp[i][j] = (obstacleGrid[i - 1][j] === 1 ? 0 : dp[i - 1][j]) + dp[i][j - 1]
        }
    }
    return dp[len - 1][len - 1]
}; */

/*  73.09 % 79.72 % */
/* var uniquePathsWithObstacles = function (OG) {
    if (OG[0][0]) return 0
    let m = OG.length, n = OG[0].length
    let dp = Array.from({ length: m }, el => new Uint32Array(n)) // *
    dp[0][0] = 1
    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++)
            if (OG[i][j] || (!i && !j)) continue
            // 当前是障碍，或者是左上角，跳过
            else dp[i][j] = (i ? dp[i - 1][j] : 0) + (j ? dp[i][j - 1] : 0) // *
            // 否则，统计左边和上面的dp值
    return dp[m - 1][n - 1]
}; */

var uniquePathsWithObstacles = function (obstacleGrid) {
    if (obstacleGrid[0][0]) return 0
    let m = obstacleGrid.length
    let n = obstacleGrid[0].length
    // let dp = Array(m)
    // dp.forEach(item => item.map(i => Array(n)))
    let dp = Array.from({ length: m }, el => new Array(n).fill(0))
    // let dp = Array.from({ length: m }, el => new Uint32Array(n)) // 会自动初始化值为0；且速度比Array更快，只存储同一类型数据；且内存占用更高效；
    dp[0][0] = 1
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] || (!i && !j)) continue
            dp[i][j] = (i ? dp[i - 1][j] : 0) + (j ? dp[i][j - 1] : 0)
        }
    }
    return dp[m - 1][n - 1]
}
// @lc code=end

