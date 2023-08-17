/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
/* 动态规划   50.78 %  82.47 % */
/* var minCostClimbingStairs = function (cost) {
    let len = cost.length
    if (len === 2) return Math.min(...cost)
    let dp = new Array(len + 1).fill(0)
    for (let i = 2; i <= len; i++) {
        dp[i] = cost[i - 1] + dp[i - 1] > cost[i - 2] + dp[i - 2] ? dp[i] + cost[i - 2] + dp[i - 2] : dp[i] + cost[i - 1] + dp[i - 1]
    }
    return dp[len]
}; */

/* 动态规划，优化空间复杂度，直接在原数组上操作 87.48 % 94.82%  */
var minCostClimbingStairs = function (cost) {
    let len = cost.length
    for (let i = 2; i < len; i++) {
        cost[i] = Math.min(cost[i - 1], cost[i - 2]) + cost[i]
    }
    return Math.min(cost[len - 1], cost[len - 2]);
}
// @lc code=end

