/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

/* 动态规划 完全不会 */
/* 没有理解这里的dp不是要求累加值，是要求最大值 */
/* var integerBreak = function (n) {
    // 目标是10，nums数组是1~n-1
    let dp = Array(n + 1).fill(0), max = Array(n + 1).fill(1)
    dp[0] = 1
    dp[1] = 1
    if (n == 2) return 1
    for (let i = 2; i <= n; i++) { // target
        for (let j = 1; j < n; j++) { // nums
            if (i > j) {
                console.log(i, ":", dp[i], ";", j, ":", dp[j])
                dp[i] += dp[i - j]
                max[i] *= (i-j)
            }
        }
    }
    return max[n]
}; */

/*  top voted solution 89.05 % 31.73 % */
/* var integerBreak = function (n) {
    let memo = new Map()
    function dp(n) {
        if (n == 1 || n == 2) return 1
        if (memo.has(n)) return memo.get(n)
        let q = 0
        for (let i = 1; i <= n / 2; i++) {
            q = Math.max(q, i * Math.max((n - i), dp(n - i)))
        }
        memo.set(n, q)
        return q
    }
    return dp(n)
}; */

/* 代码随想录 89.05 % 51.17 % */
/* var integerBreak = function (n) {
    let dp = new Array(n + 1).fill(0)
    dp[2] = 1
    for (let i = 3; i <= n; i++) {
        for (let j = 1; j <= i / 2; j++) { // **
            // 这里的dp[i]是必须的，后面两个分别是，j与拆分后的i-j相乘，j与i-j直接相乘，两种情况
            dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j)
        }
    }
    return dp[n]
}; */

/* 89.05 % 43.54 % */
var integerBreak = function (n) {
    let dp = new Array(n + 1).fill(0) // 一定要有初始值
    dp[2] = 1
    for (let i = 3; i <= n; i++) {
        for (let j = 1; j <= i / 2; j++) {
            dp[i] = Math.max(dp[i], j * Math.max(i - j, dp[i - j]))
        }
    }
    return dp[n]
}
// @lc code=end

