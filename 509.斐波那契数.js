/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

/* 递归  效率贼低  8.75 %  25 %*/
/* var fib = function (n) {
    if (n === 0) return 0
    else if (n === 1) return 1
    else return fib(n - 1) + fib(n - 2)
}; */

/* 动态规划 效率很好 70.39 % 96.55 */
/* var fib = function (n) {
    let dp = [0, 1]
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
} */

/* 动态规划  53.36%  67.41% */
/* var fib = function (n) {
    let pre1 = 0
    let pre2 = 1
    let temp
    if (n === 0) return 0
    if (n === 1) return 1
    for (let i = 2; i <= n; i++) {
        temp = pre2 // 保留pre2初始值
        pre2 = pre1 + pre2 // 记录累加值
        pre1 = temp // pre2初始值赋给pre1
    }
    return pre2
} */

/* 动态规划 70.39% 6.51% */
var fib = function (n) {
    let pre1 = 0
    let pre2 = 1
    if (n === 0) return 0
    for (let i = 2; i <= n; i++) {
        [pre1, pre2] = [pre2, pre1 + pre2]
    }
    return pre2
}
/* 后面两个动态规划方法都有 优化空间复杂度 */
// @lc code=end

