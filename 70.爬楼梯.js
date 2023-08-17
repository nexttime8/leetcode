/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

/* 动态规划38.98 % 95.18 % */
/* var climbStairs = function (n) {
    let dp = [1, 2]
    for (let i = 2; i < n; i++) {
        dp[i] = dp[i - 2] + dp[i - 1]
    }
    return dp[n - 1]
}; */

/* 爬楼梯问题，总结规律：dp[i] = dp[i-1] + dp[i-2] + ... （加的个数，取决于最大可爬楼梯数），最大可爬4层，则dp[i] = dp[i-1] + dp[i-2] + dp[i-3] + dp[i-4] */
var climbStairs = function (n) {
    const dp = new Array(n + 1).fill(0)
    const m = 4 // 或者用数组来记录背包问题的物品：steps = [1, 2]
    dp[0] = 1
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (i >= j) {
                console.log(i, ":", dp[i], ";", j, ":", dp[i - j])
                dp[i] += dp[i - j]
            }
            // 要到达第 i 阶楼梯，我们可以从第 i-steps[j] 阶楼梯爬上来（动态规划转移方程——基于前面的状态）
        }
    }
    return dp[n]
}
// @lc code=end

