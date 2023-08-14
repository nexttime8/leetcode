/*
 * @lc app=leetcode.cn id=377 lang=javascript
 *
 * [377] 组合总和 Ⅳ
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/* 很像爬楼梯，又不是 动态规划 弄清楚目标 49.45 % 81.49 % */
/* var combinationSum4 = function (nums, target) {
    let dp = new Array(target + 1).fill(0) // *
    dp[0] = 1
    for (let i = 1; i <= target; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] <= i) { // 如果数组中的当前值，比我们的当前target小
                dp[i] += dp[i - nums[j]] // *
            }
        }
    }
    return dp[target]
} */

/* var combinationSum4 = function (nums, target) {
    let dp = new Array(target + 1).fill(0)
    // dp[0] = 1
    for (let i = 1; i <= target; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i >= nums[j]) { // 用数组里面比当前target小的数，进行求和
                dp[i] += dp[i - nums[j]]
            }
        }
    }
    return dp[target]
} */

var combinationSum4 = function (nums, target) {
    let dp = new Array(target + 1).fill(0)
    dp[0] = 1
    for (let i = 1; i <= target; i++) {
        // 给出的数组长度，决定累加几次
        for (let j = 0; j < nums.length; j++) {
            if (i >= nums[j]) {
                dp[i] += dp[i - nums[j]]
            }
        }
    }
    return dp[target]
}
// @lc code=end

